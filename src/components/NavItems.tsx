"use client";

import { classNames } from "@/utils/utils";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const userNavigation = [
  { name: "Your Order", href: "/user/1e321/my-orders" },
  { name: "Settings", href: "/user/1e321/settings" },
  { name: "Sign out", href: "#" },
];

const NavItems = () => {
  return (
    <div className="flex flex-1 items-center justify-end">
      <div className="flex items-center lg:ml-8">
        <Link
          href="/sign-in"
          className="hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block"
        >
          {" "}
          <button
            type="button"
            className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  "
          >
            Sign In
          </button>
        </Link>

        <Menu as="div" className="relative ml-3">
          <div>
            <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Open user menu</span>
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </MenuButton>
          </div>
          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
          >
            {userNavigation.map((item) => (
              <MenuItem key={item.name}>
                {({ focus }) => (
                  <Link
                    href={item.href}
                    className={classNames(
                      focus ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </MenuItem>
            ))}
          </MenuItems>
        </Menu>
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
