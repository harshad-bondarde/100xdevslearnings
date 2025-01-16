/*
    Todo{
        title:string ,
        description:string,
        completed:boolean
    }
*/
const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://harshadbondarde2206:mongo123@cluster0.lnfopdk.mongodb.net/todos")

const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo=mongoose.model('todos',todoSchema)

module.exports={
    todo:todo
}