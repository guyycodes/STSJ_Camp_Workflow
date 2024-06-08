import express from "express";

const router = express.Router();

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

router.get("/health", (req, res) => {
  res.status(200).send("Healthy");
});

export default router;
