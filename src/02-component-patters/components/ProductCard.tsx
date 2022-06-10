import { useProduct } from "../hooks/useProducts";
import { createContext } from "react";
import { ProductContextProps, ProductCardProps } from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";
import { ProductTitle } from './ProductTitle';
import { ProductImage } from "./ProductImage";
import { ProductButton } from './ProductButton';



export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, increasBy } = useProduct();

  return (
    <Provider value={{ counter, increasBy, product }}>
      <div className={styles.productCard}>
        {children}
        {/* <ProductImage />

      <ProductTitle title={product.title} />

      <ProductButton counter={counter} increasBy={increasBy}/> */}
      </div>
    </Provider>
  );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Button = ProductButton;
