import React from "react";

function ProductDetailDescription({ ...props }) {
  return <p className="text-justify">{props.description}</p>;
}

export default ProductDetailDescription;
