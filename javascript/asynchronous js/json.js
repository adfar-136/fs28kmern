let person = {
    firstName:"Adfar",
    lastName:"Rasheed",
    age:27
}
let jsonobj = JSON.stringify(person);
console.log(jsonobj)
let parsedobj = JSON.parse(jsonobj)
console.log(parsedobj)