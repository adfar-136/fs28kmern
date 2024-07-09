const mongoose = require("mongoose")

 mongoose.connect("mongodb://127.0.0.1:27017/fsmernlpu").then(()=>{
    console.log("connected to db")
 })

 const student = new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    phone:Number,
 })

const Students = new mongoose.model("Students",student)
const adder =async ()=>{
//     const student1 = new Students({
//         name:"Adfar",
//         age:20,
//         email:"adfar@gmail.com",
//         phone:1234567890
//     })
//    await student1.save()
    //    Students.create({
    //     name:"Adfdvfar",
    //     age:240,
    //     email:"adf2232ar@gmail.com",
    //     phone:123456344327890
    //   })
    const a1 =await Students.findOne({age:{$eq:240}})
    console.log(a1)
}
adder()