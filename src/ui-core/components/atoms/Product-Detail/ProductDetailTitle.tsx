import React from "react";

function ProductDetailTitle({ ...props }) {
  return <h2 className="text-2xl font-bold">{props.title}</h2>;
}

export default ProductDetailTitle;
