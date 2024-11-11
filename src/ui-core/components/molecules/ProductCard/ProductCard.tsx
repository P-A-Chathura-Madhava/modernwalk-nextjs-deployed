import Link from "next/link";
import ProductCardImage from "./ProductCardImage";
import ProductDetail from "./ProductDetail";
import { useRouter } from "next/navigation";

function ProductCard({ ...props }) {
  const { id, title, image, price, description, category } = props;
  const router = useRouter();

  const goToProductDetailsHandler = () => {
    router.push(`mens-products/${props.id}`);
  }

  return (
    <div
      className={`w-[170px] h-[224px] rounded-2xl shadow-black shadow-3xl cursor-pointer hover:shadow-4xl transition-all duration-300 pt-2 font-poppins`}
      onClick={goToProductDetailsHandler}
    >
      <ProductCardImage {...{ id, title, image, price, description }} />
      <ProductDetail {...{ price, description, category }} />
    </div>
  );
}

export default ProductCard;
