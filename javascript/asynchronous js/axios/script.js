let url = "https://jsonplaceholder.typicode.com/posts";
document.getElementById("getBtn").addEventListener("click",()=>{
    axios.get(url).then((result)=>{
        console.log(result)
    })
})
document.getElementById("createBtn").addEventListener("click",()=>{
    let title = document.getElementById("title").value
    let body = document.getElementById("body").value
    axios.post(url,{
        title,
        body,
        userId:2
    }).then((result)=>{
         console.log(result)
    })
    // fetch(url,
    //    {
    //      method:"POST",
    //      headers: {
    //        'Content-Type':'application/json'
    //      },
    //      body:JSON.stringify({
    //         title,
    //         body,
    //         userId:2
    //      })
    //    }
    // ).then((response)=>response.json())
    // .then((result=>console.log(result)))
})

document.getElementById("putBtn").addEventListener("click",()=>{
    let id = document.getElementById("number").value;
    let title = document.getElementById("titleupdate").value
    let body = document.getElementById("bodyupdate").value
    axios.put(`${url}/${id}`,{
        title,
        
    }).then((data)=>{
        console.log(data)
    })
})