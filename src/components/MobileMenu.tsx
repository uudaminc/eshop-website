import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import React from "react";

interface MobileMenuProps {
  open: boolean;
  setOpen: (value: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ open, setOpen }) => {
  return (
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
      <a href="#" className="ml-2 p-2 text-gray-400 hover:text-gray-500">
        <span className="sr-only">Search</span>
        <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
      </a>
    </div>
  );
};

export default MobileMenu;
