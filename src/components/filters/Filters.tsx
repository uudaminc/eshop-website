import { PlusIcon } from "@heroicons/react/24/outline";
import React from "react";

interface FilterOption {
  value: string;
  label: string;
}

interface FiltersProps {
  mobileFiltersOpen: boolean;
  setMobileFiltersOpen: (value: boolean) => void;
  filters: {
    id: string;
    name: string;
    options: FilterOption[];
  }[];
  inputValue: string;
  setInputValue: (value: string) => void;
}

const Filters: React.FC<FiltersProps> = ({
  mobileFiltersOpen,
  setMobileFiltersOpen,
  setInputValue,
  filters
}) => {
  return (
    <aside>
      <h2 className="sr-only">Filters</h2>

      <button
        type="button"
        className="inline-flex items-center lg:hidden"
        onClick={() => setMobileFiltersOpen(true)}
      >
        <span className="text-sm font-medium text-gray-700">Filters</span>
        <PlusIcon
          className="ml-1 h-5 w-5 flex-shrink-0 text-gray-400"
          aria-hidden="true"
        />
      </button>
      <div>
      <label htmlFor="search" className="block text-sm font-medium leading-6 text-gray-900">
        Quick search
      </label>
      <div className="relative mt-2 flex items-center">
        <input
          id="search"
          onChange={(e) => setInputValue(e.target.value)}
          name="search"
          type="text"
          className="block w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <kbd className="inline-flex items-center rounded border border-gray-200 px-1 font-sans text-xs text-gray-400">
            ⌘K
          </kbd>
        </div>
      </div>
    </div> 

      <div className="hidden lg:block mt-10">
        <form className="space-y-10 divide-y divide-gray-200">
          {filters.map((section, sectionIdx) => (
            <div key={section.name} className={sectionIdx === 0 ? "" : "pt-10"}>
              <fieldset>
                <legend className="block text-sm font-medium text-gray-900">
                  {section.name}
                </legend>
                <div className="space-y-3 pt-6">
                  {section.options.map((option, optionIdx) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        id={`${section.id}-${optionIdx}`}
                        name={`${section.id}[]`}
                        defaultValue={option.value}
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor={`${section.id}-${optionIdx}`}
                        className="ml-3 text-sm text-gray-600"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
          ))}
        </form>
      </div>
    </aside>
  );
};

export default Filters;
