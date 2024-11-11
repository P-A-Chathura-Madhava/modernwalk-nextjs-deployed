import { Button } from "@/components/ui/button";
import { useCartContext } from "@/context/CartContext";
import React from "react";

function AddToCartButton({...props}) {
  const {data} = props;
  const { addItemToCart } = useCartContext();

  const addToCartHandler = () => {    
    data.qty = 1;
    addItemToCart(data);
  };
  return (
    <Button className="bg-[#db5c12] hover:bg-[#f57224] transition-all duration-300" onClick={addToCartHandler}>
      Add to Cart
    </Button>
  );
}

export default AddToCartButton;
