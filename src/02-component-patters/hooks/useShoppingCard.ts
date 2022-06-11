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

      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCard;

        return rest;
      }

      return {
        ...oldShoppingCard,
        [product.id]: { ...product, count },
      };
    });
  };
  return {
    shoppingCard,
    onProductCountChange,
  };
};
