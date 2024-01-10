import "./ProductItem.css";
import ProductInfo from "./ProductInfo";

const ProductItem = ({ product }) => {
  const { imageUrl, productName, productPrice } = product;

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={imageUrl} alt="" />
      </div>
      <div>
        <ProductInfo>
          <h2>{productName}</h2>
          <span>{productPrice}£</span>
        </ProductInfo>
      </div>
    </div>
  );
};

export default ProductItem;
