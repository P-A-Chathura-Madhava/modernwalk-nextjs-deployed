import { getWomensProducts } from "@/services/productService";
import SubHeading from "../components/atoms/HomePage/SubHeading";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import WomensProductList from "../components/molecules/WomensProducts";

async function WomensProductsSection() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["womensProductsList"],
    queryFn: getWomensProducts,
  });

  return (
    <section className="container mx-auto mt-2 px-60 font-poppins">
      <SubHeading {...{ title: "Women's Clothing" }} />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <WomensProductList />
      </HydrationBoundary>
    </section>
  );
}

export async function generateStaticParams() {
  const womensProducts: Promise<any> = getWomensProducts();
  const products = await womensProducts;

  return products.map((product: any) => ({
    productId: product.id.toString(),
  }));
}

export default WomensProductsSection;
