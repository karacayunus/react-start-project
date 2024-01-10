import ProductItem from "./ProductItem";
import { productData } from "../../productData";
import "./Products.css";

const Products = () => {
  return (
    <div className="product-wrapper">
      <h1>Products (Football Players)</h1>
      <div className="products">
        {productData.map((product) => (
          <ProductItem key={product.productName} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
