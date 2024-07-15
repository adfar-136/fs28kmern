const express =require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const router = require("./routes/userr")
const cookieParser = require("cookie-parser")
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors({
    origin:["http://localhost:3001"],
    credentials:true
}))
mongoose.connect("mongodb://localhost:27017/internships").then(()=>{
    console.log("connected to database")
})
app.use("/auth",router)
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})

