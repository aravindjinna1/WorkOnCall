// const jwt = require("jsonwebtoken");

// export const Auth = (req, res, next) => {
//   const token =
//     req.coockies?.access_token || req.headers.authorization?.split(" ")[1];
//   if (!token) return res.status(404).json({ message: "no token" });

//   try {
//     const payload = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = payload;
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: "Invalid token " });
//   }
// };



const jwt = require('jsonwebtoken');

function authenticateJWT(req, res, next) {

    const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token provided" });
  }


  const token = req.headers.authorization?.split(' ')[1];


  if (!token) return res.status(401).json({ message: 'Token missing' });
  
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token' });
    req.user = user;
    next();
  });
}

module.exports = authenticateJWT
// app.get('/profile', authenticateJWT, (req, res) => {
//   res.json({ message: 'Secure Profile Data', user: req.user });
// });
