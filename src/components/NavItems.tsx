"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import CartModule from "./cart/CartModule";
function Bag() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
      />
    </svg>
  );
}
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
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Link
                label="My orders"
                labelIcon={<Bag />}
                href="/my-orders"
              />
            </UserButton.MenuItems>
          </UserButton>
        </SignedIn>

        {/* Cart */}
        <CartModule />
      </div>
    </div>
  );
};

export default NavItems;
