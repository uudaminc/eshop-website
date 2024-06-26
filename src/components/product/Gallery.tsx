import { classNames } from "@/utils/utils";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";
import React from "react";

interface GalleryProps {
  images: {
    id: string;
    name: string;
    src: string;
    alt: string;
  }[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <TabGroup className="flex flex-col-reverse">
      {/* Image selector */}
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <TabList className="grid grid-cols-4 gap-6">
          {images.map((image) => (
            <Tab
              key={image.id}
              className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
            >
              {({ selected }) => (
                <>
                  <span className="sr-only">{image.name}</span>
                  <span className="absolute inset-0 overflow-hidden rounded-md">
                    <Image
                      layout="fill"
                      src={image.src}
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </span>
                  <span
                    className={classNames(
                      selected ? "ring-indigo-500" : "ring-transparent",
                      "pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2"
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </Tab>
          ))}
        </TabList>
      </div>

      <TabPanels className="aspect-h-1 aspect-w-1 w-full">
        {images.map((image) => (
          <TabPanel key={image.id}>
            <Image
              layout="fill"
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover object-center sm:rounded-lg"
            />
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};

export default Gallery;
