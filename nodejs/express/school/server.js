var express = require("express")
var app = express()
// var bodyParser = require("body-parser")
var studentArray = require("./initialData")
let currentid = studentArray.length
app.use(express.json())
// app.use(bodyParser.urlencoded({ extended: true }))
app.get("/api",(req,res)=>{
  res.send(studentArray)
})
app.get("/api/student/:id",(req,res)=>{
  let id = req.params.id;
  if(!isNaN(id)){
    id = parseInt(id)
    let studentObject = studentArray.find((item)=>{
      return (item.id===id)
    })
    if(studentObject === undefined){
      res.sendStatus(404)
    }
    res.send(studentObject)
  } else {
    return res.sendStatus(400)
  }
})
app.post("/api/student/",(req,res)=>{
  let reqkeys =Object.keys(req.body)
  if(reqkeys.find((e)=>{return e==="name"}) && reqkeys.find((e)=>{return e === "currentClass"})
    && reqkeys.find((e)=>{return e === "division"})){
      if(!isNaN(req.body.currentClass)){
        let name = req.body.name;
        let currentClass = req.body.currentClass;
        let division = req.body.division;
        currentid++;
        studentArray.push({id:currentid,name:name,currentClass:currentClass,division:division})
        res.send(studentArray)
      } else {
        return res.sendStatus(400)
      }
  } else {
    res.sendStatus(400)
  }
})
app.put("/api/student/:id",(req,res)=>{
  if(!isNaN(req.params.id)){
    let id = parseInt(req.params.id);
    let oldObj = studentArray.find((item)=>{
      return (item.id===id)
    })
    if(oldObj === undefined){
      res.sendStatus(404)
    } else{
      let newObj = req.body
      let studentObj= {...oldObj,...newObj}
      let index =studentArray.indexOf(oldObj)
      studentArray.splice(index,1)
      studentArray.push(studentObj)
      res.send(studentArray)
    }
  }
})
app.delete("/api/student/:id",(req,res)=>{
  if(!isNaN(req.params.id)){
    let id = parseInt(req.params.id);
    let stuobj =studentArray.find((item)=>{
      return item.id === id
    })

    if(stuobj !== undefined){
       let index = studentArray.indexOf(stuobj)
       studentArray.splice(index,1)
       res.send(200)
    } else{
      return res.sendStatus(404)
    }

}
else {
  return res.sendStatus(400)
}
})
app.listen(8000,()=>{
  console.log("server is running on port 8000")
})
