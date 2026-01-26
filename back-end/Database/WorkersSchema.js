const mongoose = require("mongoose");

const WorkersSchema = new mongoose.Schema({

  title: { type: String, required: true },
  name:{type:String, required:true},
  amount: { type: String, required: true },
  workHours: { type: String },
  description: { type: String },
  address: { type: String, required: true },
  mobileNo: { type: Number, required: true },
   imageUrl: {type:String},
   type: {type:String, default:"B"},
   user:{type:String, required:true}
  //  createdAt: {type:Date, default:Date.now}
  
  
}, {timestamps:true});

WorkersSchema.index(
  { title: "text", description: "text"},
   { weights: { title: 5, description: 1 } }
);


module.exports = mongoose.model("Workers", WorkersSchema);






// const mongoose = require("mongoose");

// const WorkersSchema = new mongoose.Schema(
//   {
//     title: { type: String, required: true },
//     name: { type: String, required: true },
//     amount: { type: String, required: true },
//     workHours: { type: String },
//     description: { type: String },
//     address: { type: String, required: true },

//     mobileNo: {
//       type: String,
//       // required: true,
//       // match: /^[0-9]{10}$/
//     },

//     imageUrl: { type: String },

//     type: { type: String, default: "B" },

//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true
//     }
//   },
//   { timestamps: true }
// );

// WorkersSchema.index(
//   { title: "text", description: "text" },
//   { weights: { title: 5, description: 1 } }
// );

// module.exports = mongoose.model("Workers", WorkersSchema);
