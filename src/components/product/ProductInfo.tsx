import { classNames } from "@/utils/utils";
import { StarIcon } from "@heroicons/react/20/solid";
import React from "react";
import ProductForm from "./ProductForm";
import AdditionalDetails from "./AdditionalDetails";

type Color = {
  name: string;
  bgColor: string;
  selectedColor: string;
};

interface ProductInfoProps {
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

const ProductInfo: React.FC<ProductInfoProps> = ({
  product,
  selectedColor,
  setSelectedColor,
}) => {
  return (
    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        {product.name}
      </h1>

      <div className="mt-3">
        <h2 className="sr-only">Product information</h2>
        <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>
      </div>

      {/* Reviews */}
      <div className="mt-3">
        <h3 className="sr-only">Reviews</h3>
        <div className="flex items-center">
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((rating) => (
              <StarIcon
                key={rating}
                className={classNames(
                  product.rating > rating ? "text-indigo-500" : "text-gray-300",
                  "h-5 w-5 flex-shrink-0"
                )}
                aria-hidden="true"
              />
            ))}
          </div>
          <p className="sr-only">{product.rating} out of 5 stars</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="sr-only">Description</h3>

        <div
          className="space-y-6 text-base text-gray-700"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
      </div>

      <ProductForm
        product={product}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />

    <AdditionalDetails product={product}/>
    </div>
  );
};

export default ProductInfo;
