var userRouter = require("./Routes/userRouter")
var express = require("express");
var app = express()
// var userRouter = express.Router()
var adminRouter = express.Router()
// userRouter.use((req,res,next)=>{
//   console.log('Time :' ,Date.now())
//   next()
// })
// userRouter.get("/user",(req,res)=>{
//   res.send("user")
// })
// userRouter.get("/contact",()=>{
//   res.send("contact")
// })
adminRouter.get("/dashboard",(req,res)=>{
  res.send("dashboard")
})
app.use("/api",userRouter)
app.use("/admin",adminRouter)
app.listen(3001,()=>{
  console.log("server is running on port 3001")
})