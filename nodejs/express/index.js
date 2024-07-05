var express = require("express")
var app = express()
app.get("/",(req,res)=>{
  res.send("Welcome to express")
})
app.get("/about",(req,res)=>{
    
    res.write("<h1>Some random text</h1>")
    res.write("<h1>Some random text</h1>")
    res.write("<h1>Some random text</h1>")
    res.write("<h1>Some random text</h1>")
    res.write("<h1>Some random text</h1>")
    res.send()
})
app.get("/contact",(req,res)=>{
  res.send("sghhjk")
})
app.get("/api",(req,res)=>{
   console.log(req)
   console.log(res)
   res.json("defrdfrf")
})
app.listen(3001,()=>{
    console.log("Server is running on port 3001")
})