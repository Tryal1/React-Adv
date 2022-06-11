import { Product, ProductInCart } from "../interfaces/interfaces";
import { useState } from "react";

export const useShoppingCard = () => {
  // el state maneja un objeto con una x cantidad de key y lucen como la interface ProductInCart
  const [shoppingCard, setShoppingCard] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCard((oldShoppingCard) => {
      // si el producto id sxiste es el ProductInCart si no el {...product,count: 0};
      const productInCart: ProductInCart = oldShoppingCard[product.id] || {
        ...product,
        count: 0,
      };

      // si el articulo existe o es mayor a 0
      if (Math.max(productInCart.count + count, 0)) {
        productInCart.count += count;
        return {
          ...oldShoppingCard,
          [product.id]: productInCart,
        };
      }
      //else lo borra

      const { [product.id]: toDelete, ...rest } = oldShoppingCard;
      return rest;

      // if (count === 0) {
      //   const { [product.id]: toDelete, ...rest } = oldShoppingCard;

      //   return rest;
      // }

      // return {
      //   ...oldShoppingCard,
      //   [product.id]: { ...product, count },
      // };
    });
  };
  return {
    shoppingCard,
    onProductCountChange,
  };
};
