"use client";
import CartProductCardHeading from "../../atoms/Cart/CartProductCardHeading";
import CartProductCardImage from "../../atoms/Cart/CartProductCardImage";
import AddtoCartButton from "./AddtoCartButton";
import AddtoWatchlistButton from "./AddtoWatchlistButton";
import AddtoCartButtonSignIn from "./AddtoCartButtonSignIn";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import MoreDetailsButton from "./MoreDetailsButton";

function ProductCardImage({ ...props }) {
  const { isSignedIn } = useUser();

  const { id, title, image, price, description, color } = props;

  const product: any = {
    id,
    title,
    image,
    price,
    description,
    color,
  };

  return (
    <div className="cardImageDiv font-poppins">
      <div className="overflow-hidden">
        <CartProductCardHeading {...{ title }} />
      </div>
      <div className="flex gap-2 justify-center items-center">
        <CartProductCardImage {...{ image }} />
        <div className="flex flex-col gap-3 mt-3">
          <MoreDetailsButton {...{id}} />
          {isSignedIn && <AddtoWatchlistButton {...{ product: product }} />}
          {isSignedIn === false ? (
            <AddtoCartButtonSignIn />
          ) : (
            <AddtoCartButton {...{ product: product }} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCardImage;
