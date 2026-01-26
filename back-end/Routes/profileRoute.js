const express = require("express");
// const bcrypt = require("bcrypt");
const UserSchema = require("../Database/registrationSchema");
const mongoose = require("mongoose");

require("dotenv").config();
// const { createToken } = require("../utils/jwt");
// const passport = require("passport");

// const upload = require("../config/cloudinary");

// const authMiddleware = require("../utils/authMiddleware");

const router = express.Router();
const Auth = require("../utils/authMiddleware");

const workSchema = require("../Database/JobsSchema");
const workersSchema = require("../Database/WorkersSchema");

router.get("/get-profile", Auth, async (req, res) => {
  try {
    // const user = req.user

    // const CurrentUserId = req.user.id;
    const userData = await UserSchema.findById(req.user.id).select("-password");
    if (!userData) {
        res.status(404).json({
        message: "user not found",
      });
    }
    // const userData = await UserSchema.findId({CurrentUserId});

    const workPost = await workSchema.find({ user: req.user.id });

    const workersPost = await workersSchema.find({ user: req.user.id });

   //  const DeleteJobPost = await workSchema.findAndDelete({user:req.user.id}) 

    res.status(200).json({ userData, workPost, workersPost });
    
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "server Error",
    });
  }
});




module.exports = router;
