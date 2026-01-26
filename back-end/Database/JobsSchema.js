const mongoose = require("mongoose");

const WorksSchema = mongoose.Schema({

  title: { type: String, require: true },
  amount: { type: String, required: true },
  workHours: { type: String },
  description: { type: String },
  address: { type: String, require: true },
  mobileNo: { type: Number, required: true },
  imageUrl: {type:String},
  type: {type:String, default:"A"},
  createdAt:{type:Date, default:Date.now},
     user:{type:String, required:true},


  
},  { timestamps: true });

WorksSchema.index(
  { title: "text", description: "text"},
   { weights: { title: 5, description: 1 } }
);


module.exports = mongoose.model("Work", WorksSchema);

