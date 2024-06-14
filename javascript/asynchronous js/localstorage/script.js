// localStorage.setItem("obhgudhj",JSON.stringify({name:"adfar",age:35}))
// let age = JSON.parse(localStorage.getItem("obj"))
// console.log(age)
// localStorage.removeItem("firstName");
// localStorage.clear()
function handleSubmit(){
    alert('hello')
   let namee = document.getElementById("name").value;
   let email = document.getElementById("email").value;
   localStorage.setItem("name",namee)
   localStorage.setItem("email",email)
}