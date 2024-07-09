"use client";

import { getLoggedInUser, logOutAccount } from "@/lib/actions/user.actions";
import { classNames } from "@/utils/utils";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

type User = {
  $createdAt: string;
  $id: string;
  $updatedAt: string;
  accessedAt: string;
  email: string;
  emailVerification: boolean;
  labels: any[]; // Adjust type if needed
  mfa: boolean;
  name: string;
  passwordUpdate: string;
  phone: string;
  phoneVerification: boolean;
  prefs: Record<string, any>; // Adjust type if needed
  registration: string;
  status: boolean;
  targets: {
    $createdAt: string;
    $id: string;
    $updatedAt: string;
    identifier: string;
    name: string;
    providerId: string | null;
    providerType: string;
    userId: string;
  }[];
};

const NavItems = () => {
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);
  const router = useRouter();
  useEffect(() => {
    const fetchLoggedInUser = async () => {
      const user = await getLoggedInUser();
      setLoggedInUser(user);
    };

    fetchLoggedInUser();
  }, []);

  const handleLogOut = async () => {
    const loggedOut = await logOutAccount();

    if (loggedOut) router.push("/");
  };
  console.log(loggedInUser);
  return (
    <div className="flex flex-1 items-center justify-end">
      <div className="flex items-center lg:ml-8">
        {!loggedInUser ? (
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
        ) : (
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
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="px-4 py-3">
                <p className="text-sm">Signed in as</p>
                <p className="truncate text-sm font-medium text-gray-900">
                  {loggedInUser.email}
                </p>
              </div>
              <div className="py-1">
                <MenuItem>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    Account settings
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    href="/user/1e321/my-orders"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    My Orders
                  </Link>
                </MenuItem>
              </div>
              <div className="py-1">
                <MenuItem>
                  <button
                    onClick={() => handleLogOut()}
                    type="submit"
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                  >
                    Sign out
                  </button>
                </MenuItem>
              </div>
            </MenuItems>
          </Menu>
        )}

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
