

// const user1 = {
//     firstName :"Adfar",
//     lastName:"Rashid",
//     age:27,
//     getBirthYear : function(){
//         return new Date().getFullYear() - this.age
//     }
// }
// const user2 = {
//     firstName :"Ankit",
//     lastName:"Sharma",
//     age:20,
//     getBirthYear : function(){
//         return new Date().getFullYear() - this.age
//     }  
// }
//factory function
// function createUser(firstName,lastName,age){
//     const user = {
//         firstName :firstName,
//         lastName:lastName,
//         age:age,
//         getBirthYear : function(){
//             return new Date().getFullYear() - this.age
//         }  
//     }
//     return user
// }
// let user1 = createUser("Adfar","Rasheed",27)
// let user2 = createUser("Ankit","Sharma",20);
// let arr = [2,3,4,5];
// let arr2 = [5,6,7,8,9];
//factory function
function getBirthYear(){
    return new Date().getFullYear() - this.age
}
function createUser(firstName,lastName,age){
    const user = {
        firstName,
        lastName,
        age,
        getBirthYear,
    }
    return user
}
let user1 = createUser("Adfar","Rasheed",27)
let user2 = createUser("Ankit","Sharma",20);
