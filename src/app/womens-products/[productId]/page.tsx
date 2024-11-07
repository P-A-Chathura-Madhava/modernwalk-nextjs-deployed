import { getProductDetail } from "@/services/productService";
import ProductDetailsPage from "@/ui-core/templates/pages/ProductDetailsPage";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import React from "react";

async function page({ params }: { params: { productId: string } }) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["product", params.productId],
    queryFn: () => getProductDetail(params.productId),
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ProductDetailsPage {...{ id: params.productId }} />
      </HydrationBoundary>
    </div>
  );
}

export default page;
