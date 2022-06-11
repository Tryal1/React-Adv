import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButton,
} from "../components";
import "../styles/custom-styles.css";
import { useShoppingCard } from "../hooks/useShoppingCard";
import { products } from "../data/product";

export const ShoppingPage = () => {
  const {  shoppingCard, onProductCountChange } = useShoppingCard();

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
        {products.map((product) => (
          <ProductCard
            product={product}
            className="bg-dark"
            key={product.id}
            onChange={(e) => onProductCountChange(e)}
            value={shoppingCard[product.id]?.count || 0}
          >
            <ProductImage className="custom-img" />
            <ProductTitle className="text-white" />
            <ProductButton className="custom-button" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-card">
        {Object.entries(shoppingCard).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            className="bg-dark"
            style={{ width: "100px" }}
            value={product.count}
            onChange={onProductCountChange}
          >
            <ProductImage className="custom-img" />
            <ProductButton
              className="custom-button"
              style={{ display: "flex", justifyContent: "center" }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
