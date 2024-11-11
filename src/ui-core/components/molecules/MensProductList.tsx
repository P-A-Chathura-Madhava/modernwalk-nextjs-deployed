"use client";
import { useQuery } from "@tanstack/react-query";
import { ProductProp } from "../types/ProductProp";
import ProductCard from "./ProductCard/ProductCard";
import { getMensProducts } from "@/services/productService";

function MensProductList() {
  const { data } = useQuery<any>({
    queryKey: ["mensProductsList"],
    queryFn: getMensProducts,
  });
  console.log(data);

  return (
    <div className="grid grid-cols-4 gap-10 mt-4 gap-y-8 font-poppins">
      {data &&
        data?.map((item: ProductProp, index: number) => {
          return (
            <ProductCard
              key={index}
              id={item?.id}
              title={item?.title}
              image={item?.image}
              price={item?.price}
              description={item?.description}
              category={item?.category}
            />
          );
        })}
    </div>
  );
}

export default MensProductList;
