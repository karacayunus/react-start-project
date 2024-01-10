const ProductInfo = (props) => {
  return (
    <div className="product-info">
      <span className="ad">pcgenetik.com</span>
      {props.children}
    </div>
  );
};

export default ProductInfo;
