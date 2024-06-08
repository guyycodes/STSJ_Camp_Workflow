import express from "express";

const router = express.Router();

// google auth route
router.post("/auth/google", async (req, res, next) => {
  const { code } = req.body;

  try {
    const token = await googleAuth(code);
    res.json({ token });
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
