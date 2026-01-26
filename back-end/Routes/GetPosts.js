const express = require("express");
// const bcrypt = require("bcrypt");
// const UserSchema = require("../Database/registrationSchema");
const mongoose = require("mongoose");
require("dotenv").config();
// const { createToken } = require("../utils/jwt");
// const passport = require("passport");

// const upload = require("../config/cloudinary");

// const authMiddleware = require("../utils/authMiddleware");
const router = express.Router();

const workSchema = require("../Database/JobsSchema");
const workersSchema = require("../Database/WorkersSchema");




router.get("/get-work", async (req, res) => {
  try {
    const search = req.query.search || "";
    // if (!search) {
    //      return workersSchema.find()  ;
    //        }
   console.log("searchinputtt ",search);
  
if(search && search.trim() !==""){
    works = await workSchema
      .find({ $text: { $search: search } }, { score: { $meta: "textScore" } })
      .sort({ score: { $meta: "textScore" } });
}else{
    works = await workSchema.find()
    // .sort({ createdAt: -1 })
}
 
    // fetch all documents

    res.status(200).json(works);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });
  }
});







router.get("/get-workers", async (req, res) => {
  try {
    
    const search = req.query.search || "";

    // if (!search) {
    //      return workersSchema.find();
    //        }
  if (search && search.trim() !== "") {

     workers = await workersSchema
      .find({ $text: { $search: search } }, { score: { $meta: "textScore" } })
      .sort({ score: { $meta: "textScore" } });
  }else{
     workers = await workersSchema.find()
    //  .sort({ createdAt: -1 });
  }

    res.status(200).json(workers);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "server error" });
  }
});


module.exports = router