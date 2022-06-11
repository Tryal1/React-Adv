import { Product } from "../interfaces/interfaces";

const product1 = {
    id: "1",
    title: "Coffe Mug - Card",
    img: "./coffee-mug.png",
  };
  
  const product2 = {
    id: "2",
    title: "Coffe Mug - Mme",
    img: "./coffee-mug2.png",
  };
  
  //un arreglo que luce con las prop de Product
export const products: Product[] = [product1, product2];