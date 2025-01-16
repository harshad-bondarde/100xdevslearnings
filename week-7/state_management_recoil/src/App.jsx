import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";
import { useState,useMemo } from "react";

function App(){    
    return (
        <div>
          <RecoilRoot>
            <Count />
          </RecoilRoot>
        </div>
    )
}

function Count(){
    const count=useRecoilValue(countAtom) 

    // const iseven=useMemo(()=>{
    //     if(count%2==0)  return 1;
    // },[count])   //better should run only when count rerneders
    // const iseven=useRecoilValue(evenSelector)
    return <div>
        <CountRerender /> 
        <Buttons />
        {/* {(iseven)?"it is even":null} */}
    </div>
}

function Even(){
    const value=useRecoilValue(countAtom)
    if(value%2==0){
        return(
            <div>
                it is even
            </div>
        )
    }
}

function Input(){
  const [input,setInput]=useState("") //for child we will use 
  return <div>
      <input onChange={(e)=>{
        setInput(e.target.value)
      }}></input>
    </div>
}

function CountRerender(){
    const count=useRecoilValue(countAtom)
    return <div>
        {count}
    </div>
}

function Buttons(){
    // const [count,setCount]=useRecoilState(countAtom)
    //here we really dont need count on clicking on the button value should be dec or inc 
    // setCount(count+1) will req count
    // setCount(count => count+1) will req only setcount
    //so 
    const setCount=useSetRecoilState(countAtom)
    console.log("button rerenders")
    return <div>
        <button onClick={()=>{
            setCount(count=>count+1)
        }}>increase</button>
    
        <button onClick={()=>{
            setCount(count=>count-1)
        }}>decrease</button>
    </div>
}

export default App
