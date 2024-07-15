var fs = require("fs")
// console.log(fs)
// var data ='';
// let readStream = fs.createReadStream("adfar.txt")
// readStream.on("data",function(chunk){
//   data+=chunk
// // console.log(data)
// })
// readStream.on("end",function(){
//     console.log(data)
// })
 let readStream = fs.createReadStream("adfar.txt")
 let writeStream = fs.createWriteStream("output.txt")
 readStream.pipe(writeStream)
