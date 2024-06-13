const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://singhpriyanshu8989:ORCJ2NXmvDQ8x3qH@cluster0.ho3emx3.mongodb.net/")


const todoSchema = mongoose.Schema({
title: String,
description: String,
completed: Boolean
})

const todo = mongoose.model('todos',todoSchema)


module.exports={
 todo
}


