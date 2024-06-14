document.getElementById("btn").addEventListener("click",fetchJoke);
async function fetchJoke(){
   let data =await fetch("https://official-joke-api.appspot.com/random_joke")
   let jsondata =await data.json()
   console.log(jsondata)
}
// function fetchJoke(){
//    fetch("https://official-joke-api.appspot.com/random_joke")
//    .then((result)=> result.json())
//    .then((response)=>{
//     document.getElementById("main").innerHTML = `
//     <h3>SetUP : ${response.setup}</h3>
//    <h3>Punchline : ${response.punchline}</h3>
//     `
//    })
  

// }