import React, { useState } from "react"

export function Bg(){

    const [color,setColour]=useState("olive")
    
    return (
        <div className="w-screen h-screen duration-100"
        style={{backgroundColor: color }}
        >   
            <div className="fixed flex flex-wrap 
            justify-center bottom-12 inset-x-0 px-2">

                <div className=" flex flex-wrap justify-center shadow-lg gap-3 bg-white px-3 py-2 rounded-3xl">

                    <button onClick={()=>{setColour("red")}} //onclick always wants a function to execute not a returned vlaue like setcolour() so we did pass it in a callback 
                     className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                    style={{backgroundColor:"red"}}
                    >red</button>
                    
                    <button onClick={()=>{setColour("green")}} 
                    className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                    style={{backgroundColor:"green"}}
                    >green</button>
                    
                    <button onClick={()=>{setColour("blue")}} 
                    className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                    style={{backgroundColor:"blue"}}
                    >blue</button>

                </div>
            </div>

        </div>
    )
}
