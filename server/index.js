const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
//const { default: mongoose } = require('mongoose');
//const User =require('./model/User');
//const jst = require('jsonwebtoken');
dotenv.config();
const mongo_uri = process.env.MONGO_URL;
mongoose.connect(mongo_uri);
jwtSecret = process.env.JWT_SECRET;

const app = express();


app.get('/test',(req,res) => {
    res.json('test ok')
});



// app.post('/register', async(req,res) => {
//     const {username, password} =req.body;
//     const createdUser = await  User.create({username,password});
//     jst.sign({UserId: createdUser, id}, jwtSecret ,(err ,token) => {
//         if(err) throw err;
//         res.cookies('token',token).status(201).json('ok');
//     });

// });

app.listen(4040);