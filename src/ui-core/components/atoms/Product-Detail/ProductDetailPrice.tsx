import React from "react";

function ProductDetailPrice({ ...props }) {
  return <h2 className="text-xl font-bold text-blue-800">{props.price}</h2>;
}

export default ProductDetailPrice;
