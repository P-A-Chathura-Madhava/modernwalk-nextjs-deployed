import { useQuery } from "@tanstack/react-query";
import { getProductDetail } from "@/services/productService";
import { ProductType } from "./types/ProductType";

const useGetAProduct = (productId: string) => {
  return useQuery<ProductType>({
    queryKey: ["product", productId],
    queryFn: () => getProductDetail(productId),
  });
};

export default useGetAProduct;
