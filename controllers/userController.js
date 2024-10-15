
const asyncHandler = require('express-async-handler');
const User =require('../models/userModel');
const bcrypt =require('bcrypt');
// @desc Register a user
const registerUser = asyncHandler(async (req,res)=>{
    const {username,email,password}=req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory"); 

    }
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("User already exists");
    }
// Hash password
const hashedPassword = await bcrypt.hash(password,10);
console.log("Hashed Password is "+hashedPassword);
    res.json({
        message:"Register the  user"
    });
});
// @desc Login  a user
const loginUser = asyncHandler(async (req,res)=>{
    res.json({
        message:"login user"
    });
});
// @desc Register a user
// @acess private
const currentUser = asyncHandler(async (req,res)=>{
    res.json({
        message:"Current user information"
    });
});
module.exports ={registerUser,loginUser,currentUser};