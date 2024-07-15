const express = require("express")
const UserModel = require("../models/user")
const AppliedOppurtunity = require("../models/Applied")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const router = express.Router()
router.post("/signup",async(req,res)=>{
    const {username,email,password} = req.body;
    const user = await UserModel.findOne({email})
    if(user){
        return res.status(400).json({message:"Email already exists"})
    }
    const hashedPass = await bcrypt.hash(password,10)
    const newUser = new UserModel({
        username,
        email,
        password:hashedPass
    })
    await newUser.save()
    return res.json({status:true,message:"User Created"})
})
router.post("/login",async (req,res)=>{
    const {email,password} = req.body;
    const user = await UserModel.findOne({email})
    if(!user){
        return res.status(400).json({message:"User not found"})
    }
    const validPassword = await bcrypt.compare(password,user.password)
    if(!validPassword){
        return res.json({message:"password is Incorrect"})
    }
    const token = jwt.sign({email:user.email},"jwtkey",{expiresIn:"4h"});
    res.cookie("token",token)
    return res.json({status:true,message:"Login Successfull",token})
})
const verifyUser =async (req,res,next)=>{
    try {
        const token = req.cookies.token;
        if(!token){
            return res.json({status:false,message:"Auth Failed"})
        }
        const decoded = await jwt.verify(token,"jwtkey")
        req.user = decoded;
        next()
    } catch (error) {
        console.log(error)
    }
}
router.post("/apply",verifyUser,async (req,res)=>{
    try {
        console.log(req.user)
        const {oppurtunity} = req.body;
        const applyOppurtunity = new AppliedOppurtunity({
            userId:req.user.email,
            id:oppurtunity.id,
            profile_name:oppurtunity.profile_name,
            stipend:oppurtunity.stipend.salary,
            company_name:oppurtunity.company_name,
            duration:oppurtunity.duration
        })
        await applyOppurtunity.save();
        res.status(201).json({message:"Oppurtunity applied successfully"})

    } catch (error) {
        res.status(500).json({erro:"Internal server error"})
    }
})
router.get("/applied-oppurtunities",verifyUser,async (req,res)=>{
 try {
    const appliedOppurtunities = await AppliedOppurtunity.find({userId:req.user.email})
    res.json(appliedOppurtunities)
 } catch (error) {
    res.status(500).send("Internal server error")
 }
})
router.get("/verify",verifyUser,(req,res)=>{
    return res.json({status:true,message:"Auth Successfull",user:req.user})
})
router.get("/logout",(req,res)=>{
    res.clearCookie('token')
    return res.json({status:true,message:"Logged out successfully"})
})
module.exports = router;