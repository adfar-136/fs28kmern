const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const User = require("./models/User")
const bodyParser = require("body-parser")
const bcrypt = require("bcryptjs")
const Registration = require("./models/Event")
const app = express()
app.use(cors())
app.use(bodyParser.json())
console.log(bcrypt)
mongoose.connect("mongodb://localhost:27017/register").then(()=>{
  console.log("connected to database")
})
app.post("/register",async (req,res)=>{
   const {username,email,password} = req.body
   const hashedPassword =await bcrypt.hash(password, 10)
   const newUser = new User({
    username,
    email,
    password: hashedPassword
   })
   await newUser.save()
  res.json("User registered successfully")
})
app.post("/register-event",(req,res)=>{
  const {username,event,date} = req.body;
  const newRegistration =  new Registration({username,event,date})
  newRegistration.save()
  res.json("Event registered successfully")
})
app.post("/login",async (req,res)=>{
  const {email,password} = req.body;
  const user = await User.findOne({email})
  if(!user){
    return res.status(400).send({message:"User not found"})
  }
  const isMatch= await bcrypt.compare(password,user.password)
  if(!isMatch){
    return res.status(400).send({message:"Invalid password"})
  }
  res.json({message:"Login successful",email:user.email})
})
app.listen(5000,()=>{
  console.log("Server is running on port 5000")
})