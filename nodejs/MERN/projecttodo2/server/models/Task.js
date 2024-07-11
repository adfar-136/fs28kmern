const mongoose = require("mongoose")

const taskSchema = new mongoose({
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
    }
})

module.exports = mongoose.model("Task",taskSchema)