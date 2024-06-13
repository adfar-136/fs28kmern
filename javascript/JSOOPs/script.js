

// // const user1 = {
// //     firstName :"Adfar",
// //     lastName:"Rashid",
// //     age:27,
// //     getBirthYear : function(){
// //         return new Date().getFullYear() - this.age
// //     }
// // }
// // const user2 = {
// //     firstName :"Ankit",
// //     lastName:"Sharma",
// //     age:20,
// //     getBirthYear : function(){
// //         return new Date().getFullYear() - this.age
// //     }  
// // }
// //factory function
// // function createUser(firstName,lastName,age){
// //     const user = {
// //         firstName :firstName,
// //         lastName:lastName,
// //         age:age,
// //         getBirthYear : function(){
// //             return new Date().getFullYear() - this.age
// //         }  
// //     }
// //     return user
// // }
// // let user1 = createUser("Adfar","Rasheed",27)
// // let user2 = createUser("Ankit","Sharma",20);
// // let arr = [2,3,4,5];
// // let arr2 = [5,6,7,8,9];
// //factory function
// // function getBirthYear(){
// //     return new Date().getFullYear() - this.age
// // }
// // function createUser(firstName,lastName,age){
// //     const user = {
// //         firstName,
// //         lastName,
// //         age,
// //         getYear:createUser.commonMethod.getBirthYear,
// //         getName:createUser.commonMethod.getFullName,
// //     }
// //     return user
// // }
// // createUser.commonMethod = {
// //     getBirthYear : function(){
// //         return new Date().getFullYear() - this.age
// //     },
// //     getFullName: function(){
// //         return `${this.firstName} ${this.lastName}`
// //     }
// // }
// // let user1 = createUser("Adfar","Rasheed",27)
// // let user2 = createUser("Ankit","Sharma",20);


// // function greet(){
// //    this.firstName = "Adfar"
// //    return "adfar"
// // }
// // function createUser(firstName,lastName,age){
// //    this.firstName = firstName;
// //    this.lastName = lastName;
// //    this.age = age;
// // }
// // createUser.prototype.getBirthYear = function(){
// //         return new Date().getFullYear() - this.age
// // }
// // createUser.prototype.getFullName = function(){
// //     return this.firstName + " " + this.lastName
// // }
// // let user1 =new createUser("Adfar","Rasheed",27)
// // let user2 =new createUser("Ankit","Sharma",20);
// class createUser{
  
//   constructor(firstName,lastName,age){
//     this.firstName = firstName;
//     this.lastName =lastName;
//     this.age =age
//   }
//  static getBirthYear() {
//         //  console.log(this.#getFullName())
//         console.log("static methods")
//         // return new Date().getFullYear() - this.age
// }
// #getFullName(){
//     return this.firstName + " " + this.lastName
// }
// }
// let user1 = new createUser("Adfar","Rasheed",27);
// let user2 =new createUser("Ankit","Sharma",20);

// // console.log(user1.#getFullYear())
class employee{
    constructor(name,age,salary){
         this.name=name;
         this.age=age;
         this.salary =salary;
        console.log("c1 called")
       
    }
   getInfo(){
    console.log("vghadgh")
   }
}

class manager extends employee{
    constructor(name,age,salary){
        super(name,age,salary)

     console.log("c2 called")
     
    }
   getInfo(){
    console.log(`My name is ${this.name} and i am ${this.age} years old and my salary is ${this.salary}`)
    super.getInfo()
    
   }
}
let user1 = new manager("Adfar",27,5000);
let ele = document.getElementById("main")