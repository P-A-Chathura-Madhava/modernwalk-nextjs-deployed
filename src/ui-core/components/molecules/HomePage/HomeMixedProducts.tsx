"use client";
import { useQuery } from "@tanstack/react-query";
import { ProductProp } from "../../types/ProductProp";
import ProductCard from "../ProductCard/ProductCard";
import { getMixedProducts } from "@/services/productService";

function HomeMixedProducts() {
  const { data } = useQuery<any>({
    queryKey: ["allProducts"],
    queryFn: getMixedProducts,
  });
  console.log(data);

  return (
    <div className="flex justify-between align-middle font-poppins">
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

export default HomeMixedProducts;
