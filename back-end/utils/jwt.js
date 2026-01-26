const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.createToken = (user) => {
  // console.log(process.env.JWT_SECRET);

  return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};
