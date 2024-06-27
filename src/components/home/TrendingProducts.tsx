import Image from "next/image";
import React from "react";
import Link from "next/link";
import TrendingProductsCard from "./TrendingProductsCard";

const trendingProducts = [
  {
    id: "1",
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75",
    href: "/products/1232ew32",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
  },
  {
    id: "2",
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75",
    href: "/products/1232ew32",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
    imageAlt: "Hand stitched, orange leather long wallet.",
  },
  // More products...
];

const TrendingProducts = () => {
  return (
    <section aria-labelledby="trending-heading">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:pt-32">
        <div className="md:flex md:items-center md:justify-between">
          <h2
            id="favorites-heading"
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            Trending Products
          </h2>
          <Link
            href="/products"
            className="hidden text-sm font-medium text-indigo-600 hover:text-indigo-500 md:block"
          >
            Shop the collection
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-0 lg:gap-x-8">
          {trendingProducts.map((product) => (
            <TrendingProductsCard product={product} key={product.id} />
          ))}
        </div>

        <div className="mt-8 text-sm md:hidden">
          <Link
            href="/products"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Shop the collection
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrendingProducts;
