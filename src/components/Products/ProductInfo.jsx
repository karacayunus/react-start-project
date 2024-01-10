const ProductInfo = (props) => {
  return (
    <div className="product-info">
      <span className="ad">Futbolcu </span>
      {props.children}
    </div>
  );
};

export default ProductInfo;
