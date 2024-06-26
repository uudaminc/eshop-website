import Image from "next/image";
import Link from "next/link";
import React from "react";
import CollectionCard from "./CollectionCard";

const collections = [
  {
    name: "Women's",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-collection-01.jpg",
    imageAlt: "Woman wearing a comfortable cotton t-shirt.",
  },
  {
    name: "Men's",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-collection-02.jpg",
    imageAlt: "Man wearing a comfortable and casual cotton t-shirt.",
  },
  {
    name: "Desk Accessories",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-04-collection-03.jpg",
    imageAlt:
      "Person sitting at a wooden desk with paper note organizer, pencil and tablet.",
  },
];

const Collections = () => {
  return (
    <section
      aria-labelledby="collection-heading"
      className="relative -mt-96 sm:mt-0"
    >
      <h2 id="collection-heading" className="sr-only">
        Collections
      </h2>
      <div className="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 sm:px-6 lg:gap-x-8 lg:px-8">
        {collections.map((collection) => (
          <CollectionCard collection={collection} key={collection.name} />
        ))}
      </div>
    </section>
  );
};

export default Collections;
