//basic express code
const express=require("express");
const { createTodo, updateTodo } = require("./types");
const { todo }=require("./db")
const cors = require("cors")
const app = express()
const PORT=3000

//title string 
//description string
app.use(cors()); //accessed by anyone
app.use(express.json());
//when we try to hit the backend from frontend that is not hosted on localhost 300 we will use cors in backend
// app.use(cors({
//     origin:"https://localhost:5173" will use by only 5173
// }))


app.post("/todos",async function(req,res){
    const createPayload=req.body;
    const parsePayload=createTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"you sent the wrong inupts"
        })
        return;
    }
    await todo.create({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    res.json({
        msg:"todo created"
    })
})


app.get("/todos",async function(req,res){
    const todos=await todo.find()
    res.json({
        todos
    })
})

app.put("/completed",async function(req,res){
    const updatePayload=req.body;
    const parsePayload=updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
        res.status(411).json({
            msg:"you sent the wrong inputs"
        })
        return;
    }

    await todo.update({
        _id:req.body.id
    },{
        completed:true
    })

    res.json({
        msg:"todo marked as completed"
    })


})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});