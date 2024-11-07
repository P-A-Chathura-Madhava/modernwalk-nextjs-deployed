import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import SubHeading from "../components/atoms/HomePage/SubHeading";
import { getMensProducts } from "@/services/productService";
import MensProductList from "../components/molecules/MensProductList";

async function MensProductsSection() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["mensProductsList"],
    queryFn: getMensProducts,
  });

  return (
    <section className="container mx-auto mt-2 px-60 font-poppins">
      <SubHeading {...{ title: "Men's Clothing" }} />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <MensProductList />
      </HydrationBoundary>
    </section>
  );
}

export default MensProductsSection;
