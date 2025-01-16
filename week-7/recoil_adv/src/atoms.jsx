import { atomFamily, selectorFamily } from "recoil";
import { TODOS } from "./todos";
import axios from "axios"

//--------for atom family---------------------------------
//stores a function which returns a new atom to us
////-------------Individual State Management: Each todo in an atomFamily has its own state, meaning you can update, read, and manage the state of individual todos without affecting others. This fine-grained control is not possible with a simple find function that returns an object from an array.

// export const todosAtomFamily=atomFamily({ 
//     key:"todosAtomFamily",
//     default:id => { //this is a function now
//         return TODOS.find(x=>x.id===id)
//     }
// })
//the default value for an atom or an atomfamily cannot be an assynchronous functiion

//----------------for selector family------------
export const todosAtomFamily=atomFamily({ 
    key:"todosAtomFamily",
    default:selectorFamily({
        key:"todoSelectorFamily",
        get:(id)=>async({get})=>{
            await new Promise(r=>setTimeout(r,5000))
            const res=await axios.get("https://sum-server.100xdevs.com/todo?id="+id)
            return res.data.todo;
        }
    })
})


