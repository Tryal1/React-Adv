import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButton,
} from "../components";
import { products } from "../data/product";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <ProductCard
        product={product}
        key={product.id}
        initialValue={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ count, isMaxReached, maxCount, product, increasBy, reset }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButton />
          </>
        )}
      </ProductCard>
    </div>
  );
};
