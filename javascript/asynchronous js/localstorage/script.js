localStorage.setItem("obhgudhj",JSON.stringify({name:"adfar",age:35}))
let age = JSON.parse(localStorage.getItem("obj"))
console.log(age)
localStorage.removeItem("firstName");
localStorage.clear()