import React, { Suspense, useState } from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
// import { Landing } from "./components/Landing"
// // import { Dashboard } from "./components/Dashboard"

// const  Dashboard = React.lazy(()=>import('./components/Dashboard')) //this is a assynchronous call so 
// //this sends webiste components incrementingly rather than all components at once 


// //----------------------------routing---------------------------------
// // react gives single page appliacations
// // 

// function App() {
//   // const navigate= useNavigate() //can only use this inside broswerrouter 
//   return (
//     <> 
        
//         {/* <div>
//           <button onClick={()=>{
//             window.location.href="/"  //this refetch the landing page bring back html again ... its just like again entering the route name 
//           }}>landing</button> 
//           <button onClick={()=>{
//             window.location.href="/dashboard"
//           }}>dashboard</button>
//         </div> */}


//         {/* <div> 
//           <button onClick={()=>{ //since navigate can use inside broswer router navigate this too inside the browser router 
//             navigate("/")  
//           }}>landing</button> 
//           <button onClick={()=>{
//             navigate("/Dashboard")
//           }}>dashboard</button>
//         </div> */}

//       <BrowserRouter>
//       <Appbar/>
//         <Routes>
//           <Route path="/" element={<Landing/>}/>
//           <Route path="/Dashboard" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}/>
//         </Routes>
//       </BrowserRouter>

//     </>
//   )
// }

// function Appbar(){
//   const navigate=useNavigate();

//   return (
//       <div>
//           <button onClick={()=>{ 
//             navigate("/")   //while navigating this rerenders the child component to bring back page
//           }}>landing</button> 
//           <button onClick={()=>{
//             navigate("/Dashboard")
//           }}>dashboard</button>
        
//       </div>
//   )
// }
// export default App


//---------------------------------------prop_drilling------------------------------

import { Prop } from './prop'
function App(){

  return (
    <div>
      <Prop/>
    </div>
  )
}

export default App