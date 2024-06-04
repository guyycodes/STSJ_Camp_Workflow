let msgs = [];

const displayErrorMsgs = function (msgs, loginForm) {
    const ul = document.createElement("ul"); // creates a ul
    ul.classList.add("messages"); // adds a class to the ul
    ul.style.color = "red";
    // Clear the ul before appending new messages
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
    for (let msg of msgs) {
        const li = document.createElement("li");
        const text = document.createTextNode(msg);
        li.appendChild(text);
        ul.appendChild(li);
    }
    const node = document.querySelector(".messages"); // selects the ul just made by its class

    if(node == null) {
        loginForm.parentNode.insertBefore(ul, loginForm)
    } else{
        node.parentNode.replaceChild(ul, node);
    }
}

const clearErrors = function(){
    const elements = document.getElementsByClassName('messages')
    Array.from(elements).forEach(function(element){
        element.remove()
    });
    msgs = [];
}

let validate = async function (em, p, loginForm)  {
    let email = em;
    let password = p;
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    
    if (!emailPattern.test(email)) {
        msgs[msgs.length] = "Please enter a valid email address.";
    } 
    else if (!passwordPattern.test(password)) {
        msgs[msgs.length] = "Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character.";
    }
    if (msgs.length == 0) {
      // Fetch API returns a Promise
        try{
            const response = await fetch('/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
                // If login is successful, redirect to dashboard
                if (response.ok) {
                    // set the session token in the browser
                    const data = await response.json();
                    document.cookie = `session_token=${data.newSession.session_token}; path=/`
                    msgs[msgs.length] = "Login Success!";
                    displayErrorMsgs(msgs, loginForm)
                    setTimeout(() => {window.location.href = '/dashboard';}, 500);
                    //heartbeatInterval()
                    return;
                } else {
                    // Display error message from server
                    const data = await response.json();
                    console.error({message: "Server error", Error: data})
                    msgs[msgs.length] = data.message
                    displayErrorMsgs(msgs, loginForm)
                    return;
                }
        }catch(err){
            console.error({message:"Username or Password is incorrect", Error: err})
        }
    }
    displayErrorMsgs(msgs, loginForm)
    setTimeout(() => clearErrors(), 5000);
}

export { clearErrors, validate };