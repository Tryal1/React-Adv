import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const useProduct = ({ onChange,product,value=0 }: useProductArgs) => {
  const [counter, setCounter] = useState(value);

  const isControlled = useRef(!!onChange)

  const increasBy = (value: number) => {

    if(isControlled.current){
      return onChange!({count:value,product});
    }

    const newValue = Math.max(counter + value, 0)
    // Si es menor a 0 no deja q pase y asigna 0
    setCounter(newValue);
    // es como un if o ?
    onChange && onChange({count:newValue,product});
  };

  useEffect(()=>{
    setCounter(value);
  },[value])

  return {
    counter,
    increasBy,
  };
};
