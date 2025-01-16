import { useCallback, useState } from "react"

export function Hooks(){
    const [length ,setLength]=useState(0)
    const [numberAllowed , setNumberAllowed]=useState(false)
    const [charAllowed , setcharAllowed]=useState(false)
    const [password , setPassword] = useState("");


    const passwordGenerator=useCallback(()=>{
        let pass=""
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(numberAllowed)   str+="0123456789"
        if(charAllowed)     str+="`~!@#$%^&*()-_=+[]{}|;:'"

        for(let i=1;i<=length;i++){
            let char=Math.floor(Math.random()*str.length+1)
            pass=str.charAt(char)
        }   


    },[length,charAllowed,numberAllowed,password])


    return (
        <div>
            <h1 className="text-4xl text-center text-white">Password Generator</h1>
        
            <div className="w-full max-w-md mx-auto shadow-md "></div>
        </div>
    )
}
