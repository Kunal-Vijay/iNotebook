const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

// Create a user using : POST "api/auth".Doesn't require authentication
router.post(
  "/",
  [
    body("name", "Name should not be Empty").notEmpty(), // name must not be empty
    body("name", "Name must only contain alphabets").isAlpha(), // name must be a string
    body("email", "Enter a valid email").isEmail(), // email must be an email
    body("password", "Password must contain minimum 8 characters").isLength({
      min: 8,
    }), // password should be minimum of 8 chars
  ],
  (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        res.json({ error: "Email has already been taken use another email" , message : err.message});
      });
  }
);

module.exports = router;
