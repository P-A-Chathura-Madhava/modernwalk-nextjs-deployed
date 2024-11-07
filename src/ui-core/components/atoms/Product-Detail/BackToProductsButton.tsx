import { useRouter } from "next/navigation";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

function BackToProductsButton() {
  const router = useRouter();
  const backToProductsHandler = () => {
    router.back();
  }
  return (
    <h4 className="text-blue-600 font-bold hover:underline cursor-pointer my-2 mt-10 flex gap-2 items-center w-[220px]" onClick={backToProductsHandler}>
      <FaArrowLeft />
      Back to Products
    </h4>
  );
}

export default BackToProductsButton;
