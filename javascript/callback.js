function greet(x,y){
    x;
    console.log(y)
}
function callback(p){
    console.log(p)
}
greet(callback("ADfar"),"Good morning");
function abc(){
    return function xyz(){
        
    }
}