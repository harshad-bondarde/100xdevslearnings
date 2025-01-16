import { useMemo } from "react";
import { atom, selector } from "recoil";

export const countAtom=atom({
    key:"countatom",
    default:0
})

export const evenSelector=selector({
    key:"evenselector",
    get:(props)=>{
        const count=props.get(countAtom)
        return count%2==0
    }
    
    //just like usememo props.get(countAtom) insures evenselector depends on countAtom so whenever count Atom changes evenselector should rerneder

    // get:({get})=>{
    //     const count=get(countAtom)
    //     return count%2==0
    // }
})

// useMemo(()=>{

// },[count])