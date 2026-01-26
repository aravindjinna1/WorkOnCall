const mongoose = require('mongoose');

const registrationSchema = mongoose.Schema({

    name:{type:String},
    email:{type:String},
    provider:{type:String},
    providerId:{type:String},


     googleId: { type: String, unique: true },
    fullname: String,
    email: { type: String, unique: true },
    avatar: String,
    provider: { type: String, default: "google" },

    fullname:{type:String },
    password:{type:String },
    phonenumber:{type:Number},
})

module.exports = mongoose.model("Registration", registrationSchema);

