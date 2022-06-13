import { useEffect, useRef, useState } from "react";
import { InitialValue, onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValue?: InitialValue;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValue,
}: useProductArgs) => {
  const [counter, setCounter] = useState<number>(initialValue?.count || value);
  const isMounted = useRef(false);
  console.log(counter)
  const increasBy = (value: number) => {
    // Si es menor a 0 no deja q pase y asigna 0
    let newValue = Math.max(counter + value, 0);

    if (initialValue?.maxCount) {
      newValue = Math.min(newValue, initialValue?.maxCount);
    }

    setCounter(newValue);
    // es como un if o ?
    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValue?.count || value);
  }

  useEffect(() => {
    if (!isMounted.current) return;
    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    isMaxReached:!!initialValue?.count && initialValue?.maxCount === counter,
    maxCount:initialValue?.maxCount,
    increasBy,
    reset,
  };
};
