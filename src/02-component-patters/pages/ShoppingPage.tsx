import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButton,
} from "../components";
import "../styles/custom-styles.css";
import { products } from "../data/product";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <ProductCard
        product={product}
        className="bg-dark"
        key={product.id}
        initialValue={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ count, isMaxReached, maxCount, product, increasBy, reset }) => (
          <>
            <ProductImage className="custom-img" />
            <ProductTitle className="text-white" />
            <ProductButton className="custom-button" />

            <button onClick={reset}>Reset</button>

            <button onClick={() => increasBy(-2)}>-2</button>
            {!isMaxReached && <button onClick={() => increasBy(2)}>+2</button>}
            <span>{count} - {maxCount}</span>
          </>
        )}
      </ProductCard>
    </div>
  );
};
