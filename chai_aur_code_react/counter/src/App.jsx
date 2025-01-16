import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Bg } from './bg_changer'
import { Hooks } from './hooks'

// function App() {
//   const [counter, setCounter] = useState(0)

//   const addValue=()=>{
//     setCounter(count+1);
//     setCounter(count+1);
//     setCounter(count+1);
//     setCounter(count+1); //When you call setCounter multiple times in a single synchronous event handler, React batches those updates, and only the last one takes effect, overriding the previous ones.

//     // setCounter((precounter)=> precounter+1)
//     // // setCounter((precounter)=>{ precounter+1})
//     // // setCounter((precounter)=>{ precounter+1})
//     // // setCounter((precounter)=>{ precounter+1}) //use functional form recieve previous counter state as input 

//   }

//   const removevalue=()=>{
//     setCounter(counter=>counter-1);
//   }

//   return (
//     <div>
//       <h2>counter value:{counter}</h2>
//       <button onClick={addValue}>Add value</button>
//       <button onClick={removevalue}>remove value</button>
//     </div>
//   )
// }

// export default App

function App(){

  return (
    <div>
      {/* <Bg/> */}
      <Hooks/>
    </div>
  )
}

export default App