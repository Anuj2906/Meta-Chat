const express = require('express');
const mangoose = require('mongoose');
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
const User =require('./models/User');
const jst = require('jsonwebtoken');

dotenv.config();
mongoose.connect(process.env.MONGO_URL);
const app = express();

app.get('/test',(req,res) => {
    res.json('test ok')
});

app.post('/register', async(res,res) => {
    const {username, password} =req.body;
    const createdUser = await  User.create({username,password});
    jst.sign({UserId: createdUser, id}, jwtSecret ,(err ,token) => {
        if(err) throw err;
        res.cookies('token',token).status(201).json('ok');
    });

});

app.listen(4040);