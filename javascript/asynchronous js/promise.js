// var promise  =new Promise((resolve,reject)=>{
//   var a =1;
//   if(a>5){
//     resolve("ADfar")
//   } else{
//     reject("error")
//   }
// })
// promise.then((result)=>{
//     console.log(result)
// },(err)=>{
//     console.log(err)
// })
console.log("1")
var promise  =new Promise((resolve,reject)=>{
    console.log("2")
    resolve("4")
  })
  promise.then((result)=>{
      console.log(result)
  }).catch((err)=>{
console.log(err)
  })
  console.log("3")