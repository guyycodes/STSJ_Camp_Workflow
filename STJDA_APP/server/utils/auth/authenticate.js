import jwt from "jsonwebtoken";

// set token secret and expiration date
const secret = "mysecretsshhhhh";
const expiration = "2h";

// change to object request
// function for our authenticated routes
const auth = ({ req }) => {
  // allows token to be sent via  req.query or headers
  let token = req.body.token || req.query.token || req.headers.authorization;

  // ["Bearer", "<tokenvalue>"]
  if (req.headers.authorization) {
    token = token.split(" ").pop().trim();
  }

  if (!token) {
    return req;
  }

  // verify token and get user data out of it
  try {
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
  } catch {
    console.log("Invalid token");
  }

  // send to next endpoint
  return req;
};

const signTheToken = ({ username, email, _id }) => {
  const payload = { username, email, _id };

  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};

// function to handle Google auth
const googleAuth = async (code) => {
  try {
    // exchange auth code for tokens
    const response = await axios.post(
      "https://oath2.googleapis.com/token",
      null,
      {
        params: {
          code,
          client_id: process.env.GOOGLE_CLIENT_ID,
          client_secret: process.env.GOOGLE_CLIENT_SECRET,
          redirect_uri: "REDIRECT_URI", // needs to match redirect uri set up in google api console
          grant_type: "authorization_code",
        },
      },
    );

    const { id_token } = response.data;

    // verify id token
    const ticket = await axios.get(
      `https://oauth2.googleapis.com/tokeninfo?id_token=${id_token}`,
    );
    const payload = ticket.data;

    // create jwt
    const token = signTheToken({
      username: payload.name,
      email: payload.email,
      _id: payload.sub,
    });

    return token;
  } catch (error) {
    throw new Error("Failed to authenticate with Google");
  }
};

export { auth, signTheToken, googleAuth };
