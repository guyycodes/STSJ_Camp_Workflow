import jwt from "jsonwebtoken";
import axios from "axios";
import querystring from "querystring";
import { google } from 'googleapis';

// set token secret and expiration date
const secret = "mysecretsshhhhh";
const expiration = "2h";

// create a google oauth client
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.REDIRECT_URI
);

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

// function to get user data from google
async function getUserData(access_token){
  const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token${access_token}`);
  const data = await response.json();
  console.log("Data received from Google: ", data)
}

// function to handle Google auth
const googleAuth = async (code) => {

  console.log("Code received from frontend: ", code)
  console.log("Client ID: ", process.env.GOOGLE_CLIENT_ID)
  console.log("Client Secret: ", process.env.GOOGLE_CLIENT_SECRET)
  console.log("Redirect URI: ", process.env.REDIRECT_URI)

  try {
    // exchange auth code for tokens
    const {tokens} = await oauth2Client.getToken(code);
    await oauth2Client.setCredentials(tokens);
    console.log("Tokens received: ", tokens)

    const user = oauth2Client.credentials
    console.log("User: ", user)

    await getUserData(user.access_token)

    // const { id_token } = response.data;

    // // verify id token
    // const ticket = await axios.get(
    //   `https://oauth2.googleapis.com/tokeninfo?id_token=${id_token}`,
    // );
    // const payload = ticket.data;

    // // create jwt
    // const token = signTheToken({
    //   username: payload.name,
    //   email: payload.email,
    //   _id: payload.sub,
    // });

    // return token;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to authenticate with Google");
  }
};

export { auth, signTheToken, googleAuth };
