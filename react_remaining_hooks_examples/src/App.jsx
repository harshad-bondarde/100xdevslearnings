import { useCallback } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

//------------------------- reconciliation ----------------------
// function App() {
//   const [count,setCount]=useState(0);
//   return (
//     <div>
//       <button onClick={()=>{setCount(count+1)}}>
//         count is {count}
//       </button>
//     </div>
//   )
// }


//-----------------------Useeffect--------------------------------

// function App(){
//   const [exchange1Data,setExchange1Data]=useState({})
//   const [exchange2Data,setExchange2Data]=useState({})
//   const [bankData,setBankData]=useState({})

//   useEffect(()=>{
//     setExchange1Data({
//       returns:100
//     });
//   },[])
//                       //------these two are never changing operations 
//   useEffect(()=>{
//     setExchange2Data({
//       returns:100
//     });
//   },[])

//   useEffect(()=>{
//     setTimeout(() => {
//       setBankData({income:100})
//     }, 5000);         //--after this above two will also get rerendered use usememo
//   },[])


//   // const cryptoReturns= exchange1Data.returns + exchange2Data.returns;
//   const cryptoReturns=useMemo(()=>{
//     console.log("hi hello") //this will print only in first rerender since usememo remembers every data of rerendering it will remember the data loaded in first rerneder
//     return exchange1Data.returns+exchange2Data.returns;

//   },[exchange1Data,exchange2Data]) //will run only if these two changes 

//   const incomeTax=(cryptoReturns+bankData.income) * 0.3

//   return(
//     <div>
//       hi there your income tax are {incomeTax}
//     </div>
//   )
// }
//------------------------------UseCallback--------------------------------

//functions are not same even there bodies are same 
//function a(){ } == function b(){ } will return false
// function App(){
//   const [exchange1Data,setExchange1Data]=useState({})
//   const [exchange2Data,setExchange2Data]=useState({})
//   const [bankData,setBankData]=useState({})

//   useEffect(()=>{
//     setExchange1Data({
//       returns:100
//     });
//   },[])
//                       //------these two are never changing operations 
//   useEffect(()=>{
//     setExchange2Data({
//       returns:100
//     });
//   },[])

//   useEffect(()=>{
//     setTimeout(() => {
//       setBankData({income:100})
//     }, 5000);         //--after this above two will also get rerendered use usememo
//   },[])


//   // const cryptoReturns= exchange1Data.returns + exchange2Data.returns;
//   const cryptoReturns=useCallback(function(){
//     return exchange1Data.returns+exchange2Data.returns;
//   },[exchange1Data,exchange2Data]);

//   // const incomeTax=(cryptoReturns+bankData.income) * 0.3

//   return(
//     <div>
//       <Cryptocalc calc_cryptoreturns={cryptoReturns} />
//     </div>
//   )
// }

// const cryptogainscalculator=memo(function(calc_cryptoreturns){
//   return <div>
//     your returns are {calc_cryptoreturns()}
//   </div>
// })


//----------------------------Useref-------------------------
function App(){
  const [incomeTax, setIncomeTax]=useState(20000)
  const divRef=useRef();

  useEffect(()=>{
    setTimeout(()=>{
      console.log(divRef.current)
      divRef.current.innerHTML=10
    },5000)
  },[])
  
  return (
    <div>
      hi there , your income tax returns are <div ref={divRef}>{incomeTax}</div>
    </div>
  )
}
export default App
