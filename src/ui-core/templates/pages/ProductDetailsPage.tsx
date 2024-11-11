"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getProductDetail } from "@/services/productService";
import ProductDetailTitle from "@/ui-core/components/atoms/Product-Detail/ProductDetailTitle";
import ProductDetailCategory from "@/ui-core/components/atoms/Product-Detail/ProductDetailCategory";
import ProductDetailDescription from "@/ui-core/components/atoms/Product-Detail/ProductDetailDescription";
import ProductDetailPrice from "@/ui-core/components/atoms/Product-Detail/ProductDetailPrice";
import BuyNowButton from "@/ui-core/components/atoms/Product-Detail/BuyNowButton";
import AddToCartButton from "@/ui-core/components/atoms/Product-Detail/AddToCartButton";
import ProductDetailImage from "@/ui-core/components/atoms/Product-Detail/ProductDetailImage";
import BackToProductsButton from "@/ui-core/components/atoms/Product-Detail/BackToProductsButton";
import { useCartContext } from "@/context/CartContext";

function ProductDetailsPage({ ...props }) {
  const productId = props.id;
  const { data } = useQuery<any>({
    queryKey: ["product", props.id],
    queryFn: () => getProductDetail(productId),
  });



  return (
    <div className="container mx-auto mt-2 px-60 font-poppins">
      <div>
        <BackToProductsButton />
      </div>
      <div className="flex justify-between">
        <div className="w-[48%] h-[400px] border p-4 flex justify-center items-center">
          <ProductDetailImage {...{ image: data?.image }} />
        </div>
        <div className="w-[48%] h-[400px] p-4 flex flex-col gap-2">
          <ProductDetailTitle {...{ title: data?.title }} />
          <ProductDetailCategory {...{ category: data?.category }} />
          <ProductDetailDescription {...{ description: data?.description }} />
          <ProductDetailPrice {...{ price: data?.price }} />
          <div className="flex flex-col gap-2 mt-4">
            <BuyNowButton />
            <AddToCartButton {...{data: data}} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
