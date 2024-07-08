"use client";

import { classNames } from "@/utils/utils";
import { SignedIn, SignedOut, UserButton, useAuth } from "@clerk/nextjs";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const NavItems = () => {
  const { isLoaded, userId, sessionId } = useAuth();
  console.log(userId);
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
        <div className="ml-4 flow-root lg:ml-8">
          <Link href="/cart" className="group -m-2 flex items-center p-2">
            <ShoppingBagIcon
              className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
              aria-hidden="true"
            />
            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
              0
            </span>
            <span className="sr-only">items in cart, view bag</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavItems;
