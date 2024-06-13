// var arr = [5,6,7,8,9]
// function sum(a,b,c,d,e){
//     return a+b+c+d+e
// }
// console.log(sum(...arr));
// var arr = [5,6,7,8,9]
// function sum(a,b,...other){
//     console.log(a,b,other)
// }
// sum(4,5,6,7,8,9,2,4,5,3,53,34,34,43,43,43,34);
var arr1 = [2,3,4,5,6]
var arr2 = [...arr1];
arr2[2]="adfar";
console.log(arr1)