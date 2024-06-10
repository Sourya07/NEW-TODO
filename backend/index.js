const express =require("express")
const app = express()
const { createTodo, updateTodo } = require("./types")
app.use(express.json());



app.post("todo",function(req,res){

const createPayload = req.body
 const parsePayload =createTodo.safeParse(createPayload)


 if(!parsePayload.success){
    res.status(400).json({error:"Invalid input"})
}
return ;
})




app.get("/todos",function(req,res){
    
})
app.put("/completed",function(req,res){
    
const updatePayload =req.body
const parsePayload = updateTodo.safeParse(updatePayload)
if(!parsePayload.success){
    res.status(400).json({error:"Invalid input"})
}
return ;
})

