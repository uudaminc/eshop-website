"use client";

import { ChangeEvent, Fragment, useEffect, useState } from "react";
import ProductCards from "@/components/product/ProductCards";
import Breadcrumb from "@/components/Breadcrumb";
import Filters from "@/components/filters/Filters";
import MobileFilters from "@/components/filters/MobileFilters";
import { index } from "@/utils/algolia";

import { useRouter } from "next/navigation";  
const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "beige", label: "Beige" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "All New Arrivals" },
      { value: "tees", label: "Tees" },
      { value: "crewnecks", label: "Crewnecks" },
      { value: "sweatshirts", label: "Sweatshirts" },
      { value: "pants-shorts", label: "Pants & Shorts" },
    ],
  },
  {
    id: "sizes",
    name: "Sizes",
    options: [
      { value: "xs", label: "XS" },
      { value: "s", label: "S" },
      { value: "m", label: "M" },
      { value: "l", label: "L" },
      { value: "xl", label: "XL" },
      { value: "2xl", label: "2XL" },
    ],
  },
];

interface Product{
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

export default function ProductsPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [totalItems, setTotalItems] = useState<number>(0);
  const hitsPerPage = 20;
  const [nbPages, setNbPages] = useState<number | undefined>(undefined);
  const pagesToShow = 5;
  const totalPages = nbPages || 1;
  const startPage = Math.max(0, currentPage - Math.floor(pagesToShow / 2));
  const endPage = Math.min(totalPages - 1, startPage + pagesToShow - 1);
  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );
  const [hits, setHits] = useState<Product[]>([]);

  useEffect(() => {
    async function performSearch() {
      try {
        const response = await index.search<Product>(inputValue, {
          hitsPerPage,
          page: currentPage,
        });
        // console.log(response.hits);
        setNbPages(response.nbPages);
        setTotalItems(response.nbHits);
        setHits(response.hits);
        // window.scrollTo(0, 0);
      } catch (error) {
        console.error("Algolia search error:", error);
      }
    }
    performSearch();
  }, [inputValue, currentPage]);

  return (
    <div className="bg-white">
      <div>

        <MobileFilters
          mobileFiltersOpen={mobileFiltersOpen}
          setMobileFiltersOpen={setMobileFiltersOpen}
          filters={filters}
        />

        <Breadcrumb />
        <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
          <div className="border-b border-gray-200 pb-10 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Granite kitchens
            </h1>
            <p className="mt-4 text-base text-gray-500">
              Checkout out the latest release of Basic Tees, new and improved
              with four openings!
            </p>
          </div>

          <div className="pb-24 pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            <Filters
              filters={filters}
              inputValue={inputValue}
              setInputValue={setInputValue}
              mobileFiltersOpen={mobileFiltersOpen}
              setMobileFiltersOpen={setMobileFiltersOpen}
            />

            <section
              aria-labelledby="product-heading"
              className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3"
            >
              <h2 id="product-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
                {hits.map((product) => (
                  <ProductCards product={product} key={product.ObjectId} />
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
