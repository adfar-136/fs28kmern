const express= require("express")
const Task = require('../models/Task')
const router = express.Router()

router.get("/",async (req,res)=>{
    try {
        const tasks = await Task.find()
        res.json(tasks)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})
router.post("/",async (req,res)=>{
    const {title,description} = req.body;
    const newTask = new Task({title,description})
   try {
    const savedTask = await newTask.save()
    res.status(201).json(savedTask)
   } catch (error) {
    res.status(400).json({message:error.message})
   }
})