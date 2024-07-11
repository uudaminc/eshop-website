import Image from "next/image";
import Link from "next/link";
import React from "react";
import CollectionCard from "./CollectionCard";

const collections = [
  {
    name: "Granite",
    href: "/products",
    imageSrc:
      "https://hips.hearstapps.com/hmg-prod/images/hbx110123wh-kitchen-005-6613fbd4e2f90.jpg?crop=0.8785103785103785xw:1xh;center,top&resize=980:*",
    imageAlt: "Woman wearing a comfortable cotton t-shirt.",
  },
  {
    name: "Marble",
    href: "/products",
    imageSrc:
      "https://www.bhg.com/thmb/wU3_5qwu-lu4NioJtzSrE9kOGQU=/8026x0/filters:no_upscale():strip_icc()/20190521_meredith_002-2ad3962f1e604e499b8ce59ebe6481c6.jpg",
    imageAlt: "Man wearing a comfortable and casual cotton t-shirt.",
  },
  {
    name: "Modern",
    href: "/products",
    imageSrc:
      "https://signature.my/wp-content/uploads/2023/05/87-jpg.webp",
    imageAlt:
      "Person sitting at a wooden desk with paper note organizer, pencil and tablet.",
  },
];

const Collections = () => {
  return (
    <section
      aria-labelledby="collection-heading"
      className="relative -mt-96 sm:mt-0 "
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
