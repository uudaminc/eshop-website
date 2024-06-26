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
}

const Filters: React.FC<FiltersProps> = ({
  mobileFiltersOpen,
  setMobileFiltersOpen,
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

      <div className="hidden lg:block">
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
