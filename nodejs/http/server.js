// var http = require("http")
// var fs = require("fs")
// var server = http.createServer((req,res)=>{
// const data = fs.readFileSync("./kuchbhi/userapi.json","utf-8")
// const file = fs.readFileSync("./kuchbhi/index.html","utf-8")
// const myData = JSON.parse(data)
//  if(req.url ===  "/"){
//     res.end(file)
//  } else if(req.url=== "/about"){
//     res.end("<h1>About component</h1>")
//  } else if(req.url === "/contact"){
//     res.end("<h1>Contact Component</h1>")
//  } else if(req.url === "/userapi"){
//       res.end(myData[3].email)
//  } else {
//     res.end("Error Page")
//  }
    
// })
// server.listen(3000,()=>{
//     console.log("listening to my port 3000")
// })








// // http.createServer((req,res)=>{
// //    console.log("Adfar")
// //    res.write("First backendd applicatiion");
// //    res.write("First backendd applicatiion");
// //    res.write("First backendd applicatiion");
// //    res.write("First backendd applicatiion");
   
// //    res.end("<h1>Hello Mrning</h1>")
// // }).listen(4000,()=>{
// //     console.log("server is running at port 4000")
// // })

var http =require("http")
var fs = require("fs")
var path = require("path")
const server = http.createServer((req,res)=>{
   let filePath = path.join(__dirname,"public",req.url==='/'?"index.html":req.url)
   let contentType = "text/html";
   const extname = path.extname(filePath)
   const mimeTypes = {
    ".html":"text/html",
    ".css":"text/css",
    ".js":"text/javascript",
    ".png":"image/png",
    ".jpg":"image/jpg",
    ".jpeg":"image/jpeg",
   }
   contentType = mimeTypes[extname] || 'application/octet-stream'
   fs.readFile(filePath,(err,content)=>{
    if(err){
        if(err.code==='ENOENT'){
            fs.readFile(path.join(__dirname,"public","404.html"),(error,content)=>{
                res.writeHead(404,{"Content-Type":"text/html"})
                res.end(content,'utf-8')
            })
        } else {
            res.writeHead(500,{"Content-Type":"text/html"})
            res.end(`Server error : ${err.code}`)
        }
    } else {
        res.writeHead(200,{"Content-Type":contentType});
        res.end(content,'utf-8')
    }
   })
})
server.listen(3000,()=>{
    console.log("listening to port 3000")
})