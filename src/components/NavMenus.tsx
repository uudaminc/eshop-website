"use client";

import { classNames } from "@/utils/utils";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const navigation = {
  categories: [
    {
      name: "Cabinets",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://hips.hearstapps.com/hmg-prod/images/cabinets-6425ac903ed3e.png?crop=0.469xw:0.761xh;0,0.0349xh&resize=980:*",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Luxury",
          href: "#",
          imageSrc:
            "https://i.pinimg.com/736x/56/de/bb/56debb7c204931a171dd2f0bd084bea5.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
        {
          name: "Sales",
          href: "#",
          imageSrc:
            "https://www.granitetransformations.com/wp-content/uploads/2023/05/Trascenda-Statuario-Venice-Blush-A-scaled.jpg",
          imageAlt:
            "Model wearing minimalist watch with black wristband and white watch face.",
        },
        {
          name: "Granite",
          href: "#",
          imageSrc:
            "https://kitchenwarehouseltd.com/images/doors/swood/madison/mvintagepink/vintagepink_05.jpg",
          imageAlt:
            "Model opening tan leather long wallet with credit card pockets and cash pouch.",
        },
      ],
    },
    {
      name: "Kitchens",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://helpful-kitchen-tips.com/wp-content/uploads/2019/07/Black-Kitchen-Cabinets-1200x900.jpg",
          imageAlt:
            "Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://st.hzcdn.com/simgs/pictures/kitchens/kitchen-sink-claude-c-lapp-architects-llc-img~b461fd9708d5146b_16-7834-1-00b8c5b.jpg",
          imageAlt: "Model wearing light heather gray t-shirt.",
        },
        {
          name: "Accessories",
          href: "#",
          imageSrc:
            "https://publish.purewow.net/wp-content/uploads/sites/2/2022/04/oak-wood-cabinets-2-vert.jpg?fit=680%2C861",
          imageAlt:
            "Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.",
        },
        {
          name: "Carry",
          href: "#",
          imageSrc:
            "https://hips.hearstapps.com/hmg-prod/images/rutt-kitchen-distributors-levenson-kitchen-web-1676387822.jpg?crop=0.668xw:1.00xh;0,0&resize=980:*",
          imageAlt:
            "Model putting folded cash into slim card holder olive leather wallet with hand stitching.",
        },
      ],
    },
  ],
  pages: [
    { name: "FAQs", href: "/faq" },
    { name: "My Orders", href: "/user/1e23/my-orders" },
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
                  <div
                    className="absolute inset-0 top-1/2 bg-white shadow"
                    aria-hidden="true"
                  />

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
                            <Link
                              href={item.href}
                              className="mt-4 block font-medium text-gray-900"
                            >
                              <span
                                className="absolute inset-0 z-10"
                                aria-hidden="true"
                              />
                              {item.name}
                            </Link>
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
          <Link
            key={page.name}
            href={page.href}
            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
          >
            {page.name}
          </Link>
        ))}
      </div>
    </PopoverGroup>
  );
};

export default NavMenus;
