var fs = require("fs");
console.log("1")
// fs.writeFile("file1.txt","Hello Welcome back",(err)=>{
//     if(err){
//         console.log(err)
//     } else {
//         console.log("file created successfully")
//     }
// })
// fs.appendFile("file1.txt"," add more text",()=>{
//     console.log("done")
// })
fs.readFile("file1.txt","utf-8",(err,data)=>{
   console.log(data)
})
console.log("2")