const express =require("express")
const app = express()
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
app.use(express.json());



app.post("todo",  async function(req,res){

const createPayload = req.body
 const parsePayload =createTodo.safeParse(createPayload)


 if(!parsePayload.success){
    res.status(400).json({error:"Invalid input"})
    return ;
}
await todo.create({
title:createPayload.title,
description:createPayload.description,
completed: false
})
res.json({
    msg:"todo created"
})

})




app.get("/todos",async function(req,res){
 
    const todos = await todo.find({})
    res.json({
        todos
    })

    
})

app.put("/completed",function(req,res){
    
const updatePayload =req.body
const parsePayload = updateTodo.safeParse(updatePayload)
if(!parsePayload.success){
    res.status(400).json({error:"Invalid input"})
    return ;
}

})

