import React from "react";

function ProductDetailImage({ ...props }) {
  return <img src={props.image} alt="product-image" className="w-[260px]" />;
}

export default ProductDetailImage;
