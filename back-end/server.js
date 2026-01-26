const express = require("express");
// const routes = require("./Routes/GoogleAuth");
require("dotenv").config();
const cors = require("cors");
const dbConnection = require("./Database/dbConnect");
const passport = require('./config/passport')
const GetPosts = require('./Routes/GetPosts')
const WorkDetails = require('./Routes/WorkDetails')
const WorkerDetails = require('./Routes/WorkerDetailsRoute')
const Profile = require('./Routes/profileRoute');
const authentication = require('./Routes/Authentication')
const GooglAuth = require('./Routes/GoogleAuth')
const DeletePost = require('./Routes/DeletePosts')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(passport.initialize())

app.use(cors());
dbConnection();

// app.use("/api", routes);
app.use('/api/GetPosts', GetPosts);
app.use('/api/GetPosts', GetPosts);
app.use('/api/WorkDetails', WorkDetails);
app.use('/api/WorkerDetails', WorkerDetails);
app.use('/api/Profile', Profile);
app.use('/api/authentication', authentication);
app.use('/api', GooglAuth); //GooglAuth
app.use('/api/delete-post',DeletePost);



const PORT = process.env.PORT;
app.listen(PORT, console.log(`server running on http://localhost:${PORT}`));
