import React from "react";

function ProductDetailCategory({ ...props }) {
  return <h4 className="text-sm text-gray-600">{props.category}</h4>;
}

export default ProductDetailCategory;
