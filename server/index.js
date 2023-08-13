const express = require('express');
const mongoose = require('mongoose');
// const dotenv = require('dotenv');
const cors = require("cors")
const userRoute = require("./Routes/userRoute");
const chatRoutes = require("./Routes/chatRoutes");
const msgRoutes = require("./Routes/msgRoutes");
const { notFound, errorHandler } = require("./middleware/errorHandle");

const app = express();
require("dotenv").config();

app.use(express.json()); 
app.use(cors());
app.use("/api/users", userRoute);
app.use("/api/chat", chatRoutes);
app.use("/api/msg", msgRoutes);

app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res)  =>{
    res.send("Welcome!");
})

const port = process.env.PORT || 8080;
const uri = process.env.MONGO_URL;

app.listen(port, (req, res) => {
    console.log(`server is running on port...:${port}`)
});

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDb connection established"))
.catch((error)=> console.log("MongoDb connection failed", error.message));