const mongoose = require("mongoose")

const appliedOppurtunitySchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    id :{
        type : Number,
        required : true
    },
    profile_name:{
        type : String,
        required : true
    },
    stipend:{
        type: String,
        required : true
    },
    company_name:{
        type : String,
        required : true
    },
    duration:{
        type : String,
        required : true
    }
})
const AppliedOppurtunity = mongoose.model("AppliedOppuertunity",appliedOppurtunitySchema)

module.exports = AppliedOppurtunity