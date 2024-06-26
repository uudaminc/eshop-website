import { classNames } from "@/utils/utils";
import { Radio, RadioGroup } from "@headlessui/react";
import { HeartIcon } from "@heroicons/react/24/outline";
import React from "react";

type Color = {
  name: string;
  bgColor: string;
  selectedColor: string;
};

interface ProductFormProps {
  product: {
    name: string;
    price: string;
    rating: number;
    images: {
      id: string;
      name: string;
      src: string;
      alt: string;
    }[];

    colors: Color[];
    description: string;
    details: {
      name: string;
      items: string[];
    }[];
  };
  selectedColor: Color;
  setSelectedColor: React.Dispatch<React.SetStateAction<Color>>;
}
const ProductForm: React.FC<ProductFormProps> = ({
  product,
  selectedColor,
  setSelectedColor,
}) => {
  return (
    <form className="mt-6">
      {/* Colors */}
      <div>
        <h3 className="text-sm text-gray-600">Color</h3>

        <fieldset aria-label="Choose a color" className="mt-2">
          <RadioGroup
            value={selectedColor}
            onChange={setSelectedColor}
            className="flex items-center space-x-3"
          >
            {product.colors.map((color) => (
              <Radio
                key={color.name}
                value={color}
                aria-label={color.name}
                className={({ focus, checked }) =>
                  classNames(
                    color.selectedColor,
                    focus && checked ? "ring ring-offset-1" : "",
                    !focus && checked ? "ring-2" : "",
                    "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                  )
                }
              >
                <span
                  aria-hidden="true"
                  className={classNames(
                    color.bgColor,
                    "h-8 w-8 rounded-full border border-black border-opacity-10"
                  )}
                />
              </Radio>
            ))}
          </RadioGroup>
        </fieldset>
      </div>

      <div className="mt-10 flex">
        <button
          type="submit"
          className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
        >
          Add to bag
        </button>

        <button
          type="button"
          className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
        >
          <HeartIcon className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
          <span className="sr-only">Add to favorites</span>
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
