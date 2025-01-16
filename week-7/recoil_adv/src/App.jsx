// //-------------------------Atom family-------------------------

import { atomFamily, RecoilRoot, useRecoilState, useRecoilStateLoadable } from "recoil";
import { todosAtomFamily } from "./atoms";

// import { RecoilRoot, useRecoilValue } from "recoil"
// import { todosAtomFamily } from "./atoms"

// //sometimes we need more than one atom for use case
// //ex todo
// function App() {
//   return (
//     <div>
//       <RecoilRoot>
//         <Todo id={1}/>
//         <br />
//         <Todo id={2}/>
//       </RecoilRoot>
//     </div>
//   )
// }

// function Todo({id}){

//   const todo=useRecoilValue(todosAtomFamily(id))
//   //if we update atom here the atom will update everywhere

//   return (
//     <>
//       {todo.title}
//       {todo.description}
//     </>
//   )
// }

// export default App


//---------------------------Selector familly------------------------------------

function App(){

  return <div>
    <RecoilRoot>
      <Todo id={1}/>
      <Todo id={2}/>
      <Todo id={2}/>
      <Todo id={2}/> 
    </RecoilRoot>
  </div>

  //if we call todo many times single assync call will hit the backend thats why we used selectorfamily 
}

function Todo({id}){
  // const [todo,setTodo]=useRecoilState(todosAtomFamily(id))
  //if assync call takes time too much we can use usestateloadable 
  const [todo,setTodo]=useRecoilStateLoadable(todosAtomFamily(id))
  if(todo.state=="loading"){
    return <>
      loading...
    </>
  }
  else if(todo.state=="hasValue"){
    return (
      <>
        {todo.contents.title}
        {todo.contents.description}
      </>
    )
  }
  else if(todo.state=="hasError"){
    return <div>error while loading </div>
  }
}

export default App