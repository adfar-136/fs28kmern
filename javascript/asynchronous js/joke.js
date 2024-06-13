document.getElementById("btn").addEventListener("click",fetchJoke)
function fetchJoke(){
   fetch("https://official-joke-api.appspot.com/random_joke")
   .then((result)=> result.json())
   .then((response)=>{
    document.getElementById("main").innerHTML = `
    <h3>SetUP : ${response.setup}</h3>
   <h3>Punchline : ${response.punchline}</h3>
    `
   })
  

}