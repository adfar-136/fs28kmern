var express= require("express")

var userRouter = express.Router()

userRouter.get("/user",(req,res)=>{
    res.send("user")
})
userRouter.get("/phone",(req,res)=>{
    res.send("phone")
})
userRouter.get("/details",(req,res)=>{
    res.send("details")
})
userRouter.get("/details/:adhaar",(req,res)=>{
    res.send("details : "+req.params.adhaar)
})
userRouter.param("adhaar",(req,res,next,adhaar)=>{
    console.log("adhaar : "+adhaar)
    next()
})
// userRouter.get("/user/:id",(req,res)=>{
//     const userId = req.params.id;
//     res.send("user"+userId)
// })
userRouter.param('id',(req,res,next,id)=>{
    console.log("id is "+id)
   next()
})
userRouter.get("/user/:id",(req,res,next)=>{
    console.log("adfar")
    next()
},(req,res)=>{
    const userId = req.params.id;
    res.send(userId)
})
module.exports = userRouter