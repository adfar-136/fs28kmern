// var arr = [2,3,4,5,6,7,8,9,0];
// for(let i of arr){
//     console.log(i)
// }
// var arr3 = arr.filter((item)=>{
//    return item > 6
// })
// console.log(arr3)
// var arr2 = arr.map((item,index)=>{
//     return item*5
// })
// console.log(arr2)

// var arr = [3,21,42,12,60.5,-23,102,-115,0];
// var arr2 = arr.sort((a,b)=>a-b)
// console.log(arr2)

// var arr = [1,2,3,4,5,6,7,8,9];
// var sum = arr.reduce((total,item,index)=>{
//  return total - item
// })
// console.log(sum)

// var arr =[3,4,5,6,7,8,9];
// var arr2 =[]
// arr.forEach(function(item,index){
//    arr2.push(item*item)
//    console.log(item*10)
// })
// console.log(arr2)

// var arr= [3,4,5]
// var bool = arr.some((item,index)=>{
//    return item >5
// })
// console.log(bool)
// var arr= [6,7,8]
// var bool = arr.every((item,index)=>{
//    return item >5
// })
// console.log(bool)

// var arr = [2,3,4,5,6,7,6,5,4,5]
// let value = arr.find((x)=>{
//     return x >10 && x<15
// })
// console.log(value)

// let value2 = arr.findIndex((x)=>{
//     return x >10 && x<15
// })
// console.log(value2);

var arr =[ 5,6,7,8,9,0,6,8,9,6];
var value = arr.includes(6,4);
var index =arr.indexOf(6,5);
var lastIndex = arr.lastIndexOf(6)
console.log(lastIndex)