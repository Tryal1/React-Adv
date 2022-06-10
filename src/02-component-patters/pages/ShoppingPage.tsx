import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButton,
} from "../components";

const product = {
  id: "1",
  title: "Coffe Mug - Card",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product}>
          <h1>Hola Mundo</h1>
          <ProductCard.Image />
          <ProductCard.Title title={"Hola"} />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product}>
          <h1>Hola Mundo</h1>
          <ProductImage />
          <ProductTitle title={"Hola A"} />
          <ProductButton />
        </ProductCard>
      </div>
    </div>
  );
};
