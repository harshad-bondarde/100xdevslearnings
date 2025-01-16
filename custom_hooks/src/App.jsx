import { useState,useEffect } from 'react'

function useTodos(){
  const [todos,setTodos]=useState([])

  useEffect(()=>{
    axios.get("")
      .then((res)=>{
        setTodos(res.data.todos)
      })
  },[])

  return todos;
}

function App() {
  const todos=useTodos()

  return (
    <div>
    {todos}    
    </div>
  )
}

export default App
