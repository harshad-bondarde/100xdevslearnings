import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { CreateTodo } from './components/Createtodo'
import './App.css'
import { Todos } from './components/Todos'

function App() {
  // const [count, setCount] = useState(0)
  const [todos,setTodos]=useState([]);

  fetch("http://localhost:3000/todos")
  .then(async function(res){
    const j=await res.json();
    setTodos(j.todos)      //this will rerender control will reach at  line 10 so loooop
  }).catch(function(error){
    console.log(error)
  })

  return (
      <div>
        <CreateTodo />
        <Todos todos={todos} />
      </div>
  )
}

export default App
