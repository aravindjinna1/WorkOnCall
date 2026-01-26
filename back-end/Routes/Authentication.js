const express = require("express");
const bcrypt = require("bcrypt");
const UserSchema = require("../Database/registrationSchema");
const mongoose = require("mongoose");
require("dotenv").config();
const { createToken } = require("../utils/jwt");
// const passport = require("passport");

// const upload = require("../config/cloudinary");

// const authMiddleware = require("../utils/authMiddleware");
const router = express.Router();

// const workSchema = require("../Database/JobsSchema");
// const workersSchema = require("../Database/WorkersSchema");






router.post("/register-user", async (req, res) => {
  try {
    const { fullname, password, phonenumber } = req.body;

    const existingUser = await UserSchema.findOne({
      $or: [{ fullname }, { phonenumber }],
    });

    if (existingUser) {
      return res.status(400).json({
        message:
          "user already found login with same credentials or signup with different credentials",
      });
    }

    const salt = 10;

    const hashedPassword = await bcrypt.hash(password, salt);

    const newRegister = new UserSchema({
      fullname: fullname,
      password: hashedPassword,
      phonenumber: phonenumber,
    });

    await newRegister.save();

    res.status(201).json({
      message: "registration successfull",
    });
  } catch (error) {
    res.status(500).json({ message: "server error", error });
  }
});



router.post("/login-user", async (req, res) => {
  const { fullname, password } = req.body;
  console.log("it was from the backend only", req.body);

  try {
    const existingUser = await UserSchema.findOne({ fullname });

    if (!existingUser) {
      return res.status(404).json({
        messgae: "user not found",
      });
    }
    console.log("urtnshfh sifusdjfndiufss ei sf",existingUser);
    
    const isValid = await bcrypt.compare(password, existingUser.password);
    console.log("true or notttt dioj oisdj ",isValid);
     
    if (!isValid) {
      return res.status(401).json({
        message: "invalid credentialsee",
      });
    } else {
      
       const token = createToken(existingUser);

       console.log("token from the backend",token);

      return res.status(201).json({
        // Info:req.body,
        message: "Login successfull",
        token,
      });
     

      // console.log("the token hear broooo", token);

      // res.redirect(`http://localhost:5173/login-success?token=${token}`);
    }
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

module.exports = router