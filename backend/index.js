const express =require("express")
const app = express()
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
app.use(express.json());
app.use(cors())


app.post("/todo",  async function(req,res){

const createPayload = req.body
 const parsedPayload =createTodo.safeParse(createPayload)


 if(!parsedPayload.success){
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

app.put("/completed", async function(req,res){
    
const updatePayload =req.body
const parsePayload = updateTodo.safeParse(updatePayload)
if(!parsePayload.success){
    res.status(400).json({error:"Invalid input"})
    return ;
}
await todo.update({
    _id: req.body.id
},{
    completed:true
})
res.json({
    msg: "Todo marked as completed"
})

})
app.listen(3000);



