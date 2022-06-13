import { createContext, CSSProperties, ReactElement } from "react";
import { useProduct } from "../hooks/useProducts";
import {
  Product,
  ProductContextProps,
  onChangeArgs,
  InitialValue,
  ProductCardHandlers,
} from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children?: (arg: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValue?: InitialValue;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValue,
}: Props) => {
  const { counter, increasBy, maxCount, isMaxReached, reset } = useProduct({
    onChange,
    product,
    value,
    initialValue,
  });

  return (
    <Provider
      value={{
        counter,
        increasBy,
        product,
        maxCount,
      }}
    >
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children &&
          children({
            count: counter,
            isMaxReached,
            maxCount: initialValue?.maxCount,
            product,
            increasBy,
            reset,
          })}
      </div>
    </Provider>
  );
};
