import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButton,
} from "../components";

import "../styles/custom-styles.css";

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
        <ProductCard product={product} className="bg-dark">
          <ProductCard.Image className="custom-img" />
          <ProductCard.Title className="text-white" title="Cambio" />
          <ProductCard.Buttons className="custom-button" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark">
          <ProductImage className="custom-img" />
          <ProductTitle className="text-white" />
          <ProductButton className="custom-button" />
        </ProductCard>

        <ProductCard product={product} style={{backgroundColor:'#70D1F8'}}>
          <ProductImage style={{boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'}}/>
          <ProductTitle style={{fontWeight:'bold'}}/>
          <ProductButton style={{display:'flex',justifyContent:'end'}}/>
        </ProductCard>
      </div>
    </div>
  );
};
