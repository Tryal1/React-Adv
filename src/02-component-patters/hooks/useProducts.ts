import { useState } from "react"

export const useProduct = () => {
    const [counter,setCounter] = useState(0)
    const increasBy = (value: number) =>{
        // Si es menor a 0 no deja q pase
        setCounter(prev=>Math.max(prev+value, 0),)
    }
    return{
        counter,
        increasBy
    }

}