import { FiltersState } from "@/types";
import { PlusIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

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
  selectedFilters: FiltersState;
  setSelectedFilters: React.Dispatch<React.SetStateAction<FiltersState>>;
}

const Filters: React.FC<FiltersProps> = ({
  mobileFiltersOpen,
  setMobileFiltersOpen,
  setInputValue,
  filters,
  selectedFilters,
  setSelectedFilters,
}) => {
  const [updatedFilters, setUpdatedFilters] = useState<{
    [key: string]: string[];
  }>({});

  const handleFilterChange = (
    filterId: string,
    optionValue: string,
    isChecked: boolean
  ) => {
    // Make a copy of updatedFilters to modify
    const newFilters = { ...updatedFilters };

    if (isChecked) {
      if (!newFilters[filterId]) {
        newFilters[filterId] = [];
      }

      newFilters[filterId] = [...newFilters[filterId], optionValue];
    } else {
      newFilters[filterId] = newFilters[filterId].filter(
        (value: any) => value !== optionValue
      );
    }

    setUpdatedFilters(newFilters);

    if (isChecked) {
      setSelectedFilters({
        ...selectedFilters,
        [filterId]: [...(selectedFilters[filterId] || []), optionValue],
      });
    } else {
      setSelectedFilters({
        ...selectedFilters,
        [filterId]:
          selectedFilters[filterId]?.filter((value) => value !== optionValue) ||
          [],
      });
    }
  };

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
        <label
          htmlFor="search"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
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

      <form className="hidden lg:block">
        {filters.map((filter) => (
          <div key={filter.id} className="border-b border-gray-200 py-6">
            <h3 className="-my-3 flow-root">
              <button
                type="button"
                className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
              >
                <span className="font-medium text-gray-900">{filter.name}</span>
              </button>
            </h3>
            <div className="pt-6">
              <div className="space-y-4">
                {filter.options.map((option, optionIdx) => (
                  <div
                    key={option.value}
                    className="flex items-center text-base sm:text-sm"
                  >
                    <input
                      id={`filter-${filter.id}-${option.value}`}
                      name={`${filter.id}[]`}
                      defaultValue={option.value}
                      type="checkbox"
                      checked={selectedFilters[filter.id]?.includes(
                        option.value
                      )}
                      onChange={(e) =>
                        handleFilterChange(
                          filter.id,
                          option.value,
                          e.target.checked
                        )
                      }
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor={`filter-${filter.id}-${optionIdx}`}
                      className="ml-3 min-w-0 flex-1 text-gray-500"
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </form>
    </aside>
  );
};

export default Filters;
