import React from "react";
import { FaArrowLeft } from "react-icons/fa";

function BackToMensProductsButton() {
  return (
    <h4 className="text-blue-600 font-bold hover:underline cursor-pointer my-2 mt-10 flex gap-2 items-center w-[220px]">
      <FaArrowLeft />
      Back to Men&apos;s Products
    </h4>
  );
}

export default BackToMensProductsButton;
