const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    completed:{
        type:Boolean,
        default:false
    },
    dueDate:{
        type:Date,
    },
    priority:{
        type:String,
        enum:["low","medium","high"],
        default:"medium"
    }
})

module.exports = mongoose.model("Task",taskSchema)