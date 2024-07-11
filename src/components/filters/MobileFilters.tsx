import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

interface FilterOption {
  value: string;
  label: string;
}

interface MobileFiltersProps {
  mobileFiltersOpen: boolean;
  setMobileFiltersOpen: (value: boolean) => void;
  filters: {
    id: string;
    name: string;
    options: FilterOption[];
  }[];
}

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const MobileFilters: React.FC<MobileFiltersProps> = ({
  mobileFiltersOpen,
  setMobileFiltersOpen,
  filters,
}) => {
  return (
    <Dialog
      className="relative z-40 lg:hidden"
      open={mobileFiltersOpen}
      onClose={setMobileFiltersOpen}
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 z-40 flex">
        <DialogPanel
          transition
          className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
        >
          <div className="flex items-center justify-between px-4">
            <h2 className="text-lg font-medium text-gray-900">Filters</h2>
            <button
              type="button"
              className="relative -mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
              onClick={() => setMobileFiltersOpen(false)}
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Filters */}
          <form className="mt-4">
            {filters.map((section) => (
              <Disclosure
                as="div"
                key={section.name}
                className="border-t border-gray-200 pb-4 pt-4"
              >
                {({ open }) => (
                  <fieldset>
                    <legend className="w-full px-2">
                      <DisclosureButton className="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                        <span className="text-sm font-medium text-gray-900">
                          {section.name}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          <ChevronDownIcon
                            className={classNames(
                              open ? "-rotate-180" : "rotate-0",
                              "h-5 w-5 transform"
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </DisclosureButton>
                    </legend>
                    <DisclosurePanel className="px-4 pb-2 pt-4">
                      <div className="space-y-6">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                              id={`${section.id}-${optionIdx}-mobile`}
                              name={`${section.id}[]`}
                              defaultValue={option.value}
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label
                              htmlFor={`${section.id}-${optionIdx}-mobile`}
                              className="ml-3 text-sm text-gray-500"
                            >
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </fieldset>
                )}
              </Disclosure>
            ))}
          </form>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default MobileFilters;
