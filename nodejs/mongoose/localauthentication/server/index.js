const express = require("express")
const app = express()
const passport = require("passport")
const {inititalizePassport,isAuthenticated} = require("./passportConfig")
const {User,connectMongoose} = require("./database")
const expressSession = require("express-session")
const bodyParser = require("body-parser")
const ejs = require("ejs")
app.set("view engine","ejs")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
connectMongoose()
inititalizePassport(passport)
app.use(expressSession({secret:"secret",resave:false}))
app.use(passport.initialize())
app.use(passport.session())
app.get("/register",(req,res)=>{
  res.render("register")
})
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/login",(req,res)=>{
    res.render("login")
})
app.get("/logout",(req,res)=>{
    req.logout(()=>{
        res.redirect("/")
    })
})
app.get("/profile",isAuthenticated,(req,res)=>[
    res.send(req.user)
    // res.render("profile")
])
app.post("/login",passport.authenticate("local",
    {successRedirect:"/profile",failureRedirect:"/register"}
))
app.post("/register",async (req,res)=>{
    const user = await User.findOne({username:req.body.username})
    if(user){ return res.status(400).send("User already exists")}
    const newUser =await User.create(req.body)
    res.status(201).send(newUser)
})
app.listen(5000,()=>{
    console.log("Server is running on port 5000")
})