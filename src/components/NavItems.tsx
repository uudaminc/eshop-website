"use client";

import { SignedIn, SignedOut, UserButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import CartModule from "./cart/CartModule";

const NavItems = () => {
  return (
    <div className="flex flex-1 items-center justify-end">
      <div className="flex items-center lg:ml-8">
        <SignedOut>
          <Link
            href="/sign-in"
            className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block"
          >
            <button
              type="button"
              className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  "
            >
              Sign In
            </button>
          </Link>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>

        {/* Cart */}
        <CartModule />
      </div>
    </div>
  );
};

export default NavItems;
