import Image from "next/image";
import Link from "next/link";
import React from "react";
interface ProductCardProps {
  Name: string;
  Price: string;
  Width: string;
  Height: string;
  Depth: string;
  Color: string;
  Style: string;
  Location: string;
  Type: string;
  Finish: string;
  DrawerCount: number;
  Store: string;
  Brand: string;
  Assembled: string;
  Description: string;
  ObjectId: string;
}

const ProductCards = ({ product }: { product: ProductCardProps }) => {
  console.log(product);
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-96">
        <Image
          width={500}
          height={300}
          src="https://www.bhg.com/thmb/wU3_5qwu-lu4NioJtzSrE9kOGQU=/8026x0/filters:no_upscale():strip_icc()/20190521_meredith_002-2ad3962f1e604e499b8ce59ebe6481c6.jpg"
          alt="Picture"
          className="h-full w-full object-cover object-center sm:h-full sm:w-full"
        />
      </div>
      <div className="flex flex-1 flex-col space-y-2 p-4">
        <h3 className="text-sm font-medium text-gray-900">
          <Link href={`/products/${product?.ObjectId}`}>
            <span aria-hidden="true" className="absolute inset-0" />
            {product.Name.length >= 70
            ? product?.Name.slice(0, 70) + "..."
            : product?.Name}
          </Link>
        </h3>
        <p className="text-sm text-gray-500">
          {product.Description.length >= 80
            ? product?.Description.slice(0, 80) + "..."
            : product?.Description }
        </p>
        <div className="flex flex-1 flex-col justify-end">
          <p className="text-sm italic text-gray-500">{product.Finish }</p>
          <p className="text-base font-medium text-gray-900">
            {product?.Price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
