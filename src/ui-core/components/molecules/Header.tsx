"use client";
import CompanyLogo from "../atoms/Navbar/CompanyLogo";
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { IoBookmarksOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

// Shadcn Drawer Component
import {
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "../../../components/ui/drawer";
import { Button } from "../../../components/ui/button";
import { useWatchlistContext } from "@/context/WatchlistContext";
import { useCartContext } from "@/context/CartContext";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import CartDetailsPage from "@/ui-core/templates/pages/CartDetailsPage";

function Header() {
  const { isSignedIn } = useUser();

  const { user } = useUser();
  const { watchlist } = useWatchlistContext();
  const { cart } = useCartContext();

  return (
    <div className="flex justify-between px-4 border-b-4 font-poppins">
      <Link href={"/"}>
        <CompanyLogo />
      </Link>
      <div className="flex items-center">
        <div className="flex gap-2 pr-4">
          <span>{user?.firstName}</span>
          <UserButton />
        </div>
        {!isSignedIn && (
          <SignInButton>
            <div className="w-20 h-full p-2 font-bold rounded-md hover:bg-slate-400 flex justify-center items-center transition-all duration-300 cursor-pointer">
              Sign In
            </div>
          </SignInButton>
        )}
        {isSignedIn && (
          <div>
            <Link
              className="flex items-center justify-center gap-1 p-2 transition-all duration-300 rounded-icon hover:bg-slate-200"
              href={"/watchlist"}
            >
              <IoBookmarksOutline className="text-xl" />({watchlist.length})
            </Link>
          </div>
        )}
        <div>
          <DrawerTrigger>
            <div className="flex items-center justify-center gap-1 p-2 transition-all duration-300 rounded-icon hover:bg-slate-200">
              <FaShoppingCart className="text-xl" />({cart.length})
            </div>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button
                  variant="outline"
                  className="flex items-center justify-center gap-2 font-bold font-poppins text-btn"
                >
                  <IoMdArrowRoundBack /> Return
                </Button>
              </DrawerClose>
            </DrawerFooter>
            {/* <CartDetails /> */}
            <CartDetailsPage />
          </DrawerContent>
        </div>
      </div>
    </div>
  );
}

export default Header;
