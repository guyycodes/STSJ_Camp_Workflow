import express from "express";
import { googleAuth } from "../utils/auth/authenticate.js";
import axios from "axios";
import {OAuth2Client} from "google-auth-library";

const router = express.Router();
const oauth2Client = new OAuth2Client();

// google auth route
router.post("/auth/google", async (req, res, next) => {
  const { code } = req.body;
  console.log("Code received from Google: ", code)

  try {
    // exchange auth code for tokens
    const { data } = await axios.post('https://oauth2.googleapis.com/token', {
      code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: 'postmessage', // postmessage returns auth code directly to app isntead of redirecting user to a webpage
      grant_type: 'authorization_code',
    });
    console.log("Data received from Google: ", data)

    const accessToken = data.access_token;
    console.log("Access token: ", accessToken)

    // fetch user data
    const userResponse = await axios.get(
      'https://www.googleapis.com/oauth2/v3/userinfo',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      }
    );
    const userData = userResponse.data;
    console.log("User data: ", userData)

    res.status(200).json({ message: "Auth successful", userData });
  } catch (error) {
    next(error); // pass error to centralized error handler
  }
});

// email route
router.post("/", (req, res) => {
  console.info("Get was used");
  console.log("This email will be contact: " + req.body.email);
  const templateParams = {
    email: req.body.email,
  };
  console.log(process.env.EMAILJS_PUBLIC);

  // Uncomment and configure emailjs sending functionality if needed
  // emailjs.send('service_7098943', 'template_5grsipc', templateParams, {
  //     publicKey: process.env.EMAILJS_PUBLIC,
  //     privateKey: process.env.EMAILJS_PRIVATE,
  // }).then((response) => {
  //     console.log('SUCCESS!', response.status, response.text);
  // }, (err) => {
  //     console.log('FAILED...', err);
  // });

  res.json({ message: "Everything went okay" });
});

// health check endpoint
router.get("/health", (req, res) => {
  res.status(200).send("Healthy");
});

export default router;
