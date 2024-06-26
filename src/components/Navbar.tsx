"use client";

import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "../../public/logo.svg";
import NavMenus from "./NavMenus";
import NavItems from "./NavItems";
import MobileMenu from "./MobileMenu";

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
              <NavMenus />
            </div>

            {/* Mobile menu and search (lg-) */}
            <MobileMenu open={open} setOpen={setOpen}/>

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

            <NavItems />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
