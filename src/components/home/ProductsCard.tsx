import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
  id: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  name: string;
  price: string;
  color: string;
}

const ProductsCard = ({ product }: { product: ProductCardProps }) => {
  return (
    <div key={product.id} className="group relative">
      <div className="h-56 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:h-72 xl:h-80">
        <Image
          width={300}
          height={100}
          src={product.imageSrc}
          alt={product.imageAlt}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">
        <Link href={product.href}>
          <span className="absolute inset-0" />
          {product.name}
        </Link>
      </h3>
      <p className="mt-1 text-sm text-gray-500">{product.color}</p>
      <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
    </div>
  );
};

export default ProductsCard;
