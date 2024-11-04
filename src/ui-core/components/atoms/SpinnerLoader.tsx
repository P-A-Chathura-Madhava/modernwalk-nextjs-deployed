import React from "react";
import spinnerSvg from "@/images/Spinner.svg";
import Image from "next/image";

function SpinnerLoader() {
  return (
    <div className="flex justify-center items-center w-full pt-4">
      <Image src={spinnerSvg} alt="spinner-svg" />
    </div>
  );
}

export default SpinnerLoader;
