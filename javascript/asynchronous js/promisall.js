function combine(){
    var promise1 = new Promise((res,rej)=>{
        setTimeout(()=>{
            res("promise one resolved")
        },3000)
    })
    var promise2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("promise two resolved")
        },3000)
    });
    var combinePromises = Promise.all([promise1,promise2])
    return combinePromises
}
combine().then((result)=>{
   console.log(result)
})