import React from "react";
// Drawer Component
import { DrawerContent } from "../../../components/ui/drawer";

// React Icons
import { IoMdArrowRoundBack } from "react-icons/io";
import CartDetailsPage from "@/ui-core/templates/pages/CartDetailsPage";

function CartDrawer() {
  return (
    <DrawerContent>
      <div className="bg-white"></div>
      {/* <CartDetails /> */}
      <CartDetailsPage />
    </DrawerContent>
  );
}

export default CartDrawer;
