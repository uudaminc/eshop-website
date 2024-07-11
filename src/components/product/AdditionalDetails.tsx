import { classNames } from "@/utils/utils";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import React from "react";

type Color = {
  name: string;
  bgColor: string;
  selectedColor: string;
};

interface AdditionalDetailsProps {
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
}

const AdditionalDetails: React.FC<AdditionalDetailsProps> = ({ product }) => {
  return (
    <section aria-labelledby="details-heading" className="mt-12">
      <h2 id="details-heading" className="sr-only">
        Additional details
      </h2>

      <div className="divide-y divide-gray-200 border-t">
        {product.details.map((detail) => (
          <Disclosure as="div" key={detail.name}>
            {({ open }) => (
              <>
                <h3>
                  <DisclosureButton className="group relative flex w-full items-center justify-between py-6 text-left">
                    <span
                      className={classNames(
                        open ? "text-indigo-600" : "text-gray-900",
                        "text-sm font-medium"
                      )}
                    >
                      {detail.name}
                    </span>
                    <span className="ml-6 flex items-center">
                      {open ? (
                        <MinusIcon
                          className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                          aria-hidden="true"
                        />
                      ) : (
                        <PlusIcon
                          className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                      )}
                    </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel as="div" className="prose prose-sm pb-6">
                  <ul role="list">
                    {detail.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </DisclosurePanel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </section>
  );
};

export default AdditionalDetails;
