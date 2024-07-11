"use client";

import { SignedIn, SignedOut, UserButton, useAuth } from "@clerk/nextjs";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

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
        <Popover className="ml-4 flow-root text-sm lg:relative lg:ml-8 z-10">
          <PopoverButton className="group -m-2 flex items-center p-2">
            <ShoppingBagIcon
              aria-hidden="true"
              className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
            />
            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
              0
            </span>
            <span className="sr-only">items in cart, view bag</span>
          </PopoverButton>
          <PopoverPanel
            transition
            className="absolute inset-x-0 top-16 mt-px bg-white pb-6 shadow-lg transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in sm:px-2 lg:left-auto lg:right-0 lg:top-full lg:-mr-1.5 lg:mt-3 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5"
          >
            <h2 className="sr-only">Shopping Cart</h2>

            <form className="mx-auto max-w-2xl px-4">
              <ul role="list" className="divide-y divide-gray-200">
                {products.map((product) => (
                  <li key={product.id} className="flex items-center py-6">
                    <img
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      className="h-16 w-16 flex-none rounded-md border border-gray-200"
                    />
                    <div className="ml-4 flex-auto">
                      <h3 className="font-medium text-gray-900">
                        <Link href={product.href}>{product.name}</Link>
                      </h3>
                      <p className="text-gray-500">{product.color}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <button
                type="submit"
                className="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Checkout
              </button>

              <p className="mt-6 text-center">
                <Link
                  href="/cart"
                  className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  View Shopping Bag
                </Link>
              </p>
            </form>
          </PopoverPanel>
        </Popover>
      </div>
    </div>
  );
};

export default NavItems;
