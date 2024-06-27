"use client";

import { classNames } from "@/utils/utils";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import React from "react";

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
    { name: "Stores", href: "/products" },
  ],
};

const NavMenus = () => {
  return (
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
                          <div key={item.name} className="group relative">
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
  );
};

export default NavMenus;
