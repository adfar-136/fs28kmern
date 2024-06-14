// async function greet(){
//     return "adfar"
// }
// greet().then((res)=>{
//     console.log(res)
// })
var promise = new Promise((resolve,reject)=>{
   resolve("data ")
})
async function greet(){
    console.log("1")
    // promise.then((res)=>console.log(res))
    let data =await promise;
    console.log(data)
    console.log("3")
}
greet()