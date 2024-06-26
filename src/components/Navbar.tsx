"use client";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../../public/logo.svg";
import { classNames } from "@/utils/utils";

const navigation = {
  categories: [
    {
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
        {
          name: "Accessories",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg",
          imageAlt:
            "Model wearing minimalist watch with black wristband and white watch face.",
        },
        {
          name: "Carry",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg",
          imageAlt:
            "Model opening tan leather long wallet with credit card pockets and cash pouch.",
        },
      ],
    },
    {
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg",
          imageAlt:
            "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg",
          imageAlt: "Model wearing light heather gray t-shirt.",
        },
        {
          name: "Accessories",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg",
          imageAlt:
            "Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.",
        },
        {
          name: "Carry",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg",
          imageAlt:
            "Model putting folded cash into slim card holder olive leather wallet with hand stitching.",
        },
      ],
    },
  ],
  pages: [
    { name: "FAQs", href: "/faq" },
    { name: "Stores", href: "#" },
  ],
};

const userNavigation = [
  { name: "Your Order", href: "/user/1e321/my-orders" },
  { name: "Settings", href: "/user/1e321/settings" },
  { name: "Sign out", href: "#" },
];



const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative">
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo (lg+) */}
            <div className="hidden lg:flex lg:flex-1 lg:items-center">
              <Link href="/">
                <span className="sr-only">Your Company</span>
                <Image
                  width={8}
                  height={8}
                  src={Logo}
                  alt="Logo"
                  className="h-8 w-auto"
                />
              </Link>
            </div>

            <div className="hidden h-full lg:flex">
              {/* Flyout menus */}
              <PopoverGroup className="inset-x-0 bottom-0 px-4">
                <div className="flex h-full justify-center space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <PopoverButton
                              className={classNames(
                                open
                                  ? "text-indigo-600"
                                  : "text-gray-700 hover:text-gray-800",
                                "relative flex items-center justify-center text-sm font-medium transition-colors duration-200 ease-out"
                              )}
                            >
                              {category.name}
                              <span
                                className={classNames(
                                  open ? "bg-indigo-600" : "",
                                  "absolute inset-x-0 -bottom-px z-20 h-0.5 transition duration-200 ease-out"
                                )}
                                aria-hidden="true"
                              />
                            </PopoverButton>
                          </div>

                          <PopoverPanel
                            transition
                            className="absolute inset-x-0 top-full z-10 bg-white text-sm text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                          >
                            {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                            <div
                              className="absolute inset-0 top-1/2 bg-white shadow"
                              aria-hidden="true"
                            />
                            {/* Fake border when menu is open */}
                            <div
                              className="absolute inset-0 top-0 mx-auto h-px max-w-7xl px-8"
                              aria-hidden="true"
                            >
                              <div
                                className={classNames(
                                  open ? "bg-gray-200" : "bg-transparent",
                                  "h-px w-full transition-colors duration-200 ease-out"
                                )}
                              />
                            </div>

                            <div className="relative">
                              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                                  {category.featured.map((item) => (
                                    <div
                                      key={item.name}
                                      className="group relative"
                                    >
                                      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                        <img
                                          src={item.imageSrc}
                                          alt={item.imageAlt}
                                          className="object-cover object-center"
                                        />
                                      </div>
                                      <a
                                        href={item.href}
                                        className="mt-4 block font-medium text-gray-900"
                                      >
                                        <span
                                          className="absolute inset-0 z-10"
                                          aria-hidden="true"
                                        />
                                        {item.name}
                                      </a>
                                      <p aria-hidden="true" className="mt-1">
                                        Shop now
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </PopoverPanel>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </PopoverGroup>
            </div>

            {/* Mobile menu and search (lg-) */}
            <div className="flex flex-1 items-center lg:hidden">
              <button
                type="button"
                className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                onClick={() => setOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Search */}
              <a
                href="#"
                className="ml-2 p-2 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Search</span>
                <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>

            {/* Logo (lg-) */}
            <Link href="/" className="lg:hidden">
              <span className="sr-only">Your Company</span>
              <Image
                width={8}
                height={8}
                src={Logo}
                alt="Logo"
                className="h-8 w-auto"
              />
            </Link>

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
                  <Link
                    href="/cart"
                    className="group -m-2 flex items-center p-2"
                  >
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
