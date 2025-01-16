import { memo, useCallback, useEffect, useMemo, useState } from 'react'

//SIDE EFFECTS functions or components running other than rendering like 
//seTimeout , fetch , seTinterval , document.getElementById("").innerHTML=""

//HOOKS - useState , Useeff , Usecallback , usememo , 
       // useRef , useContext

    //---------------Usestate---------------------
    //simple object describes how your frontend would look like 
    //triggers rerender which finally results in DOM update

    //--------------UseEffect---------------------
    //it allows you to use side effects in function components
    //SIDE EFFECTS are operations that cn affect other componenets
    //or cant be done during rerendering such as data fetching, subscriptions ,
    //manually changing the DOM 


//----------------------------UseEffect---------------------------------
// function App() {
//   const [todos,setTodos]=useState([]);

//   useEffect(()=>{
//       fetch("https://sum-server.100xdevs.com/todos")
//       .then(async function(res){
//         const json=await res.json();
//         setTodos(json.todos)
//       })
//   },[]) // [] under this condition this callback should run 
//         //this is called dependency array


//   return (
//     <div>
//       {todos.map(function(todo){ 
//         return <Todo title={todo.title} description={todo.description}/>
//         })}
//     </div>
//   )
// }

// function Todo({title,description}){
//   return <div>
//     <h1>{title}</h1>
//     <h2>{description}</h2>
//   </div>
// }

// export default App



// --------------------------------------------------------
//write a component that takes a todo id as an input and fetches the data for that todo from given endpoint
//- https://sum-server.100xdevs.com/todo?id=1
import axios from "axios"
function App() {
  
  const [selectedId,setSelectedId]=useState(1)
  return(
      <div>
        <button onClick={()=>{setSelectedId(1)}}>1</button>
        <button onClick={()=>{setSelectedId(2)}}>2</button>
        <button onClick={()=>{setSelectedId(3)}}>3</button>
        <button onClick={()=>{setSelectedId(4)}}>4</button>
        <Todo id={selectedId}/>
      </div>
  )
}

function Todo({id}){
  const [todo,setTodo]=useState({})

  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todo?id="+id)
    .then(response=>{setTodo(response.data.todo)})
  },[id]) //now this will get rerendered whenever id changes 

  return <div>
    ID:{id}
    <h1>
      {todo.title}
    </h1>
    <h4>
      {todo.description}
    </h4>
  </div>
}


export default App


//-----------------------------Usememo---------------------------------------------


//in app create counter that inc by one
//user put value in input box (n) and show sum form 1-n
//everything needs to be inside app
//across renders if we have to memoise any value 
// function App(){
//   const [counter,setCounter]=useState(0);
//   const [inputValue,setInputvalue]=useState(1)
  
//   let count=0;
//   for(let i=1;i<=inputValue;i++){
//     count+=i
//   }
//   return <div>
//     <input onChange={(e)=>{
//       setInputvalue(e.target.value)
//       }} placeholder={"find sum from 1 to n"}/>
//       <br />
//     Sum from 1 to {inputValue} is {count}
//     <button onClick={()=>{setCounter(counter+1)}}>Counter {counter}</button>
//   </div>
// }

//whenever counter is inc for loop will run unneccesarily//------
// causing a rerender 

// function App(){
//   const [counter,setCounter]=useState(0);
//   const [inputValue,setInputvalue]=useState(1)
  
//   let count=useMemo(()=>{
//     let finalcount=0
//     for(let i=1;i<=inputValue;i++) 
//       finalcount+=i
//     return finalcount
//   },[inputValue]) //on clicking on the counter usememo will not run 
  
//   //or ---

//   // const [count, setCount]=useState(0) // this introduces an extra state variable one extra rerender 
//   // useEffect(()=>{
//   //   let finalcount=0;
//   //   for(let i=0;i<inputValue;i++)
//   //     finalcount+=i
//   //   setCount(finalcount);
//   // },[inputValue])

//   return <div>
//     <input onChange={(e)=>{
//       setInputvalue(e.target.value)
//       }} placeholder={"find sum from 1 to n"}/>
//       <br />
//     Sum from 1 to {inputValue} is {count}
//     <br />
//     <button onClick={()=>{setCounter(counter+1)}}>Counter {counter}</button>
//   </div>
// }

//----------------------------------Usecallback------------------------------------------

                                  // ----memo-------
// function App(){
//   const [count,setCount]=useState(0);

//   return <div>
//     <ButtonCompo/>
//     <button onClick={()=>{
//       setCount(count+1);
//     }}>Click me {count}</button>
//   </div>

// }
// const  ButtonCompo=()=>{  //if click rerenders then this will also rerneder so wrap it inside a memo
//   console.log("child render")
//   return <div>
//     <button>Button clicked</button>
//   </div>
// }
// const  ButtonCompo=memo(()=>{ //this function only rerenders if input chnages 
//   console.log("child render")
//   return <div>
//     <button>Button clicked</button>
//   </div>
// })

//------------------------------------------------------------------------------------------------

// function App(){
//   const [count,setCount]=useState(0);

//   const inputFunction=useCallback(()=>{
//     console.log("hi there")
//   },[]) //unless any dependency chnages this function will be remembered throughout the rerenders

//   return(
//    <div>
//     <ButtonCompo inputFunction={inputFunction}/>
//     <button onClick={()=>{
//       setCount(count+1)
//     }}>Click me {count}</button>
//   </div>
//   )
// }

// const ButtonCompo=memo(({inputFunction})=>{
//   console.log("child render");
  
//   return <div>
//     <button>button clicked</button>
//   </div>
// })

// export default App