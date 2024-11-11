"use client";
import { useEffect } from "react";
import CartItem from "@/ui-core/components/molecules/Cart/CartItem";
import CartFooter from "@/ui-core/layouts/CartFooter";
import CartHeading from "@/ui-core/components/atoms/Cart/CartHeading";
import CartTableHeading from "@/ui-core/components/atoms/Cart/CartTableHeading";
import { useCartContext } from "@/context/CartContext";
import CartProductsCount from "@/ui-core/components/atoms/Cart/CartProductsCount";

function CartDetailsPage() {
  const { cart, calculateTotalAmount, totalAmount } = useCartContext();
  const cartItemCount = cart?.length;

  useEffect(() => {
    calculateTotalAmount();
  }, []);

  return (
    <div className="font-poppins bg-white">
      <div className="container mx-auto mt-2 px-60">
        <div className="flex justify-between">
          <div className="w-[72%]">
            <CartHeading {...{ title: "Cart" }} />
            <div className="h-64 overflow-scroll overflow-x-hidden scroll-auto">
              <div className="flex">
                <CartTableHeading
                  {...{ width: "60", title: "Product Details" }}
                />
                <CartTableHeading {...{ width: "20", title: "Quantity" }} />
                <CartTableHeading {...{ width: "20", title: "Price" }} />
              </div>

              {/* Cart Item */}
              {cart.map((item: any, index: number) => {
                return <CartItem key={index} {...{ item: item }} />;
              })}
            </div>
          </div>
          <div className="w-[20%]">
            <CartHeading {...{ title: "Order Summary" }} />
            <div className="flex justify-between">
              <CartTableHeading {...{ title: "ITEMS" }} />
              <CartProductsCount {...{ cartItemCount: cartItemCount }} />
            </div>
            <div className="flex justify-between">
              <h4 className="text-sm font-bold">Total Amount</h4>
              <h4 className="text-sm font-bold text-red-800">
                {totalAmount.toFixed(2)}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <CartFooter />
    </div>
  );
}

export default CartDetailsPage;
