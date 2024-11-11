import SpinnerLoader from "@/ui-core/components/atoms/SpinnerLoader";
import React from "react";

function loading() {
  return (
    <div className="flex justify-center items-center">
      <SpinnerLoader />
    </div>
  );
}

export default loading;
