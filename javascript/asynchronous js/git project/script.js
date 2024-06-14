function fetchUserInfo(username){
   fetch(`https://api.github.com/users/${username}`)
   .then((response)=>response.json())
   .then((user)=>{
    document.getElementById("overview").innerHTML = `
      <div>
        <img width="150px" height="150" src="${user.avatar_url} alt="${user.name}"/>
        <h2>user Name: ${user.name}</h2>
        <h2>user Bio: ${user.bio}</h2>
        <h2>user Followers: ${user.followers}</h2>
        <h2>user Followings: ${user.following}</h2>
        <h2>user Repos: ${user.public_repos}</h2>
        <a href="${user.html_url}" target="_blank">${user.name}</a>
      </div>
    `
   }).catch(()=>{
    document.getElementById("overview").innerHTML = "<h1>USer not found</h1>"
   })
}
document.getElementById("searchForm").addEventListener("submit",(e)=>{
  
    e.preventDefault()
    let username = document.getElementById("username").value;
    if(username){
        fetchUserInfo(username)
        fetchUserRepos(username,1)
        setPagination(username,1)
    }
})
function fetchUserRepos(username,page){
    fetch(`https://api.github.com/users/${username}/repos?per_page=5&page=${page}`)
    .then((response)=>response.json())
    .then((repos)=>{
        let repolist = repos.map((repo)=>`
         <div class="repo">
          <div>
            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            <p>${repo.description || 'no description available'}</p>
          </div>
         </div>
        `).join("")
        
        document.getElementById("repos").innerHTML =repolist;
      
    })
}
// function setPagination(username,page){
//     console.log(page)
//     let pagination = document.getElementById("pagination")
//     pagination.innerHTML = `
//      <button onclick="fetchUserRepos('${username}',${page-1})" ${page===1?"disabled":""}>Previous</button>
//      <button onclick="fetchUserRepos('${username}',${page+1})">Next</button>
//     `
// }
function setPagination(username,page,totalRepos){
    totalRepos=66;
    let pagination = document.getElementById("pagination");
    // let prevBtn = document.createElement("button")
    // prevBtn.innerHTML= `
    // <button onclick="fetchUserRepos('${username}',${page-1})" ${page===1?"disabled":""}>Previous</button>
    // `
    // document.getElementById("prev").appendChild(prevBtn)
    let btnCount = Math.ceil(totalRepos/5);
    for(let i=1;i<=btnCount;i++){
        let pageBtn = document.createElement("button");
        pageBtn.textContent = i;
        pageBtn.onclick = ()=>{
            fetchUserRepos(username,i)
        }
        pagination.appendChild(pageBtn)
    }
    // let nextBtn = document.createElement("button")
    // nextBtn.innerHTML= `
    // <button onclick="fetchUserRepos('${username}',${page+1})">Next</button>
    // `
    // document.getElementById("next").appendChild(nextBtn)
}