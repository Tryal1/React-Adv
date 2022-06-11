import { Props as ProductButtonProps} from '../components/ProductButton';
import { Props as ProductCardProps, } from '../components/ProductCard';
import { Props as ProductImageProps} from '../components/ProductImage';
import { Props as ProductTitleProps} from "../components/ProductTitle";

// importamos las propiedades de todo los componentes por que si tenemos varios componenetes
// no tenemos que modificar cada uno

// tambien importamos las props de cada componente para asi cada vez que
// agregamos unaprop no la tengamos que modificar

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increasBy: (value: number) => void;
  product: Product;
}

// aca declaramos las importaciones de cada uno product
// ejemplo titulo importamos las propiedades del componentes
// 
export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps ):JSX.Element,
  Title: (Props:ProductTitleProps) => JSX.Element,
  Image: (Props: ProductImageProps) => JSX.Element,
  Buttons: (Props:ProductButtonProps) => JSX.Element
}

export interface onChangeArgs{
  product:Product;
  count: number
}

// Creaamos una nueva interface que contiene las props de Product
export interface ProductInCart extends Product {
  count: number;
}