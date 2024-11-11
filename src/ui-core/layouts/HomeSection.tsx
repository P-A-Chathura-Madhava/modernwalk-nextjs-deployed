import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import SubHeading from "../components/atoms/HomePage/SubHeading";
import CategoriesRaw from "../components/molecules/HomePage/CategoriesRaw";
import { getMixedProducts } from "@/services/productService";
import HomeMixedProducts from "../components/molecules/HomePage/HomeMixedProducts";

export const revalidate = 10;

async function HomeSection() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["allProducts"],
    queryFn: getMixedProducts,
  });

  return (
    <section className="container mx-auto mt-2 px-60 font-poppins">
      <SubHeading {...{ title: "Flash Sale" }} />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <HomeMixedProducts />
      </HydrationBoundary>
      <div className="mt-7"></div>
      <SubHeading {...{ title: "Categories" }} />
      <CategoriesRaw />
    </section>
  );
}

export default HomeSection;
