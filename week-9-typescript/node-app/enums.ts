type keyInput="up"|"down"|"left"|"right"

// function doSomething(key : keyInput){
//     if(key=='up'){

//     }
//     // if(key=='p') this will give me an error 
// }

// or 
enum Direction{ //this all are 0 indexed up=0 down=1 .......
    up,
    down,
    left,
    right
}

//if we want to print "up" using Direction.up give up="up"
// enum Direction{ //this all are 0 indexed up=0 down=1 .......
//     up="up",
//     down="down",
//     left="left",
//     right="right"
// }
function doSomething(key : Direction){
    if(key==Direction.up){
        console.log(key)
    }
}

doSomething(Direction.up)
// console.log(Direction.up)


//------------------
// popular usecase 
// enum ResponseStatus {
//     success=200,
//     NotFound=404,
//     error=500
// }

// const app=express()
// app.get("/".replace(req,res)=>{
//     if(!req.query.userId){
//         res.status(ResponseStatus.NotFound).json({})
//     }
// })

// app.get("/123",(req,res)=>{

// })