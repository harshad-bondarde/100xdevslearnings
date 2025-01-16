// import { useState } from "react"

// export function Prop(){
//     const [count,setCount]=useState(0);
    
//     return (
//         <div>
//             <Count count={count} setCount={setCount}/>
//         </div>
//     )
// }    

// //setcount is not needed here it is used by the child we have to pass it through all functions
// //this is prop drilling  
// function Count({count,setCount}){
//     return <div>
//         {count}   
//         <Buttons count={count} setCount={setCount}/>
//     </div>
// }

// function Buttons({count,setCount}){
//     return <div>
//         <button onClick={()=>{
//             setCount(count+1)
//         }}>increase</button>
    
//         <button onClick={()=>{
//             setCount(count-1)
//         }}>decrease</button>
//     </div>
// }


//-------------------context_api makes easy to pass props to pass down----------------------


import { useContext, useState } from "react"
import { CountContext } from "./context";

export function Prop(){
    const [count,setCount]=useState(0);
    
    return (
        <div>
            <CountContext.Provider value={count}>
                <Count setCount={setCount}/>
            </CountContext.Provider>
        </div>
    )
}    

function Count({setCount}){ //havent sent count value from here we will teleport it from app function to CountRerender
    return <div>
        <CountRerender /> 
        <Buttons setCount={setCount}/>
    </div>
}

function CountRerender(){
    const count=useContext(CountContext)
    return <div>
        {count}
    </div>
}

function Buttons({setCount}){
    const count=useContext(CountContext)
    return <div>
        <button onClick={()=>{
            setCount(count+1)
        }}>increase</button>
    
        <button onClick={()=>{
            setCount(count-1)
        }}>decrease</button>
    </div>
}