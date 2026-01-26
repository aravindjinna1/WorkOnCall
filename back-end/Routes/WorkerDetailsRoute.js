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

router.use(express.urlencoded({ extended: true }));

// const workSchema = require("../Database/JobsSchema");
const workersSchema = require("../Database/WorkersSchema");

router.use(express.urlencoded({ extended: true }));


router.post(
  "/post-worker",
  authMiddleware,
  upload.single("image"),
  async (req, res) => {
    try {
          if (!req.file) {
      return res.status(400).json({ message: "Image is required" });
    }
    
      console.log("File:", req.file);

      const { title, name, amount, workHours, address, description, mobileNo } =
        req.body;
      console.log("FILE:", req.file);
      console.log(req.body);

      const newWorker = new workersSchema({
        title,
        name,
        amount,
        workHours,
        description,
        address,
        mobileNo,
        imageUrl: req.file.path,
        user: req.user.id,
      });
      await newWorker.save();

      res.status(201).json({
        message: "details post successfully",
      });
    } catch (err) {
      res.status(500).json({
        message: "server error",
      });
    }
  },
);

module.exports = router;
