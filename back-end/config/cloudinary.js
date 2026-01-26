// const multer = require("multer");
// const cloudinary = require("cloudinary").v2;
// const { CloudinaryStorage } = require("multer-storage-cloudinary");

// cloudinary.config({
//   cloud_name: "dnukedguo",
//   api_key: "123122289371584",
//   api_secret: "lTTLkXDWLqUAyrkRgjX34huSNVU",
// });

// const storage = new CloudinaryStorage({
//   cloudinary,
//   params: {
//     folder: "services",
//     allowed_formats: ["jpg", "png", "jpeg"],
//   },
// });

// const upload = multer({ storage });
// module.exports = upload;





const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: "dnukedguo",
  api_key: "123122289371584",
  api_secret: "lTTLkXDWLqUAyrkRgjX34huSNVU",
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "services",
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
    transformation: [
      { width: 800, height: 800, crop: "limit", quality: "auto" }
    ],
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 1 * 1024 * 1024 }, // 1MB limit
});

module.exports = upload;
