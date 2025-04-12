import { useState } from "react"

// function App() {
//   //should have top level parent react cant return two siblings at a time 
//   const [title,setTitle]=useState("my name is harshad")

//   function updatetitle(){
//     setTitle("my name is "+Math.random())
//   }
//   return (
//     // <div>
//     //   <Header title="harkirat1"/>
//     //   <Header title="harkirat2"/> 
//     // </div>
//     // <>
//     //   <Header title=""></Header>
//     //   <Header title="harkirat2"/> 
//     // </>
//     //this is slightly better solution 
//     //doesnt introduce extra DOM element

    
//     <div>
//       <button onClick={updatetitle}>Update the title</button>
//       <Header title={title}></Header>
//       <Header title="harkirat2"/> 
//       <Header title="harkirat3"/> 
//       <Header title="harkirat4"/> 
//       <Header title="harkirat5"/> 
//     </div>
//   )
// }

// function Header({title}){ //or pass props and use it like props.title
//   return <div>my name is {title}</div>
// }

//here all components will get rerender 


    //MINIMIZING THE RERENDERS -----------------------------------------------------------------------------------------


// function App(){
//   return (
//     <div>
//       <HeaderWithButton/> 
//       <Header title="harkirat2"></Header>
//       <Header title="harkirat2"></Header>
//     </div>
//   )
// }

// function HeaderWithButton(){ //now only this will get rerender
//   const [title,setTitle]=useState("my name is harkirat")
//   function updatetitle(){
//     setTitle("my name is "+Math.random())
//   }
//   return <div>
//     <button onClick={updatetitle}>Update the title</button>
//     <Header title={title}></Header>
//   </div>
// }
// //       first                                  now
// //  APP (contains component/state variable    state variable is in the child 
// //       that is being used by one child      if child wants to rerender it will only rerender the child 
// //  )
// //  header (using that compoenent)
// //  header
// //  header
//  //now if child rerenders the component APP 
//  //App will also have to rerender it and so 
//  //other components as well 

// function Header({title}){
//   return <div>{title}</div>
// }


//-------------------------------KEYS-----------------------------
// let counter=4;
// function App(){
//   const [todos,setTodos]=useState([{
//     id:1,
//     title:"go to gym",
//     description:"go to gym today"
//   },{
//     id:2,
//     title:"go to school",
//     description:"go to school today"
//   },{
//     id:3,
//     title:"go to gym",
//     description:"go to gym today"
//   }])

//   function addtodo(){
//     setTodos([...todos,{
//       id:counter++,
//       title:Math.random(),
//       description:Math.random()
//     }])
//   }
//   return (
//     <div>
//       <button onClick={addtodo}>Add a todo</button>
//       {  
//         todos.map(function(todo){
//           return <Todo key={todo.id} title={todo.title} description={todo.description} />
//         })  
//       }
//     </div>
//   )
// }


// function Todo({title,description}){
//   return <div>
//     <h1>{title}</h1>
//     <h5>{description}</h5>
//   </div>
// }

//----------------------------wrapper components------------------------

function App(){
  // return(
  //   <div>
  //     <CardWrapper innerComponent={<TextComponent/>}/>
  //   </div>
  // )

  return (
    <div>
      <CardWrapper>
        <div>
          hi there
        </div>
      </CardWrapper>

      <CardWrapper>
        <TextComponent/>
      </CardWrapper>
    </div>
  )
}
function CardWrapper({children}){
  return <div style={{border: "2px solid black",padding:"20px"}}>
    {children}
  </div>
}
function TextComponent(){
  return <div>
    hi there
  </div>
}

// function CardWrapper({innerComponent}){
//   return <div style={{border: "2px solid black",padding:"20px"}}>
//     {innerComponent}
//   </div>
// }
// function TextComponent(){
//   return <div>
//     hi there
//   </div>
// }

export default App
