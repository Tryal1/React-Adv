import { createContext, CSSProperties, ReactElement } from 'react';
import { useProduct } from '../hooks/useProducts';
import { Product, ProductContextProps } from '../interfaces/interfaces';
import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?:string;
    style?: CSSProperties;
}
  

export const ProductCard = ({ children, product,className,style }: Props ) => {

    const { counter, increasBy } = useProduct();

    return (
        <Provider value={{
            counter,
            increasBy,
            product
        }}>
            <div style={style} className={ `${styles.productCard} ${className}` }>
                { children }
            </div>
        </Provider>
    )
}
