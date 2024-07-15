const express = require("express")
const app = express()
const port = 3000
const cors = require("cors")
const mongoose = require("mongoose")
const router = require("./routes/tasks")
const bodyParser = require("body-parser")
app.use(cors())
app.use(bodyParser.json())
mongoose.connect("mongodb://localhost:27017/todomern").then(()=>{
    console.log("connected to db")
})
app.use("/tasks",router)
app.listen(port,()=>{
    console.log("server is running on port 3000")
})