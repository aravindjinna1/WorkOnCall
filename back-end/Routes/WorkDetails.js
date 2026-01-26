const express = require("express");
// const bcrypt = require("bcrypt");
// const UserSchema = require("../Database/registrationSchema");
const mongoose = require("mongoose");
require("dotenv").config();
// const { createToken } = require("../utils/jwt");
// const passport = require("passport");

const upload = require("../config/cloudinary");

const authMiddleware = require("../utils/authMiddleware");
const router = express.Router();

const workSchema = require("../Database/JobsSchema");
// const workersSchema = require("../Database/WorkersSchema");
router.use(express.urlencoded({ extended: true }));

router.use(express.json());


router.post(
  "/post-work",
  authMiddleware,
  upload.single("image"),
  async (req, res) => {
    // res.json({message:`secured profile data`, user:req.user})

    try {
      const { title, amount, workHours, address, description, mobileNo } =
        req.body;

        const UserId = req.body._id;
        console.log(UserId);
        
        const userInfo = req.secure.id

      await workSchema.create({
        title,
        amount,
        workHours,
        description,
        address,
        mobileNo,
        imageUrl: req.file.path,
        user:req.user.id,
      });

      res.status(201).json({
        message: "work details posted successfully ",
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
      });
    }
  }
);



module.exports = router