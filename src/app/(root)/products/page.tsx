"use client";

import {useEffect, useState } from "react";
import ProductCards from "@/components/product/ProductCards";
import Breadcrumb from "@/components/Breadcrumb";
import Filters from "@/components/filters/Filters";
import MobileFilters from "@/components/filters/MobileFilters";
import { index } from "@/utils/algolia";
import { Product } from "@/types";
const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "White", label: "White" },
      { value: "Gray", label: "Gray" },
      { value: "Oak", label: "Oak" },
      { value: "Cognac", label: "Cognac" },
      { value: "Brown", label: "Brown" },
      { value: "Java", label: "Java" },
    ],
  },
  {
    id: "type",
    name: "Type",
    options: [
      { value: "Sink base", label: "Sink base" },
      { value: "Base", label: "Base" },
      { value: "Wall", label: "Wall" },
    ],
  },
  {
    id: "finish",
    name: "Finish",
    options: [
      { value: "Alpine White", label: "Alpine White" },
      { value: "Dove Gray", label: "Dove Gray" },
      { value: "Satin White", label: "Satin White" },
      { value: "Medium Oak", label: "Medium Oak" }, 
      { value: "Cognac", label: "Cognac" },
      { value: "Natural Hickory", label: "Natural Hickory" },
      { value: "Brindle", label: "Brindle" },
      { value: "Java", label: "Java" },

    ],
  },
  {
    id: "style",
    name: "Style",
    options: [
      { value: "Shaker", label: "Shaker" },
      { value: "Raised Panel", label: "Raised Panel" },
   

    ],
  },
];


export default function ProductsPage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string[] }>({});
  const [updatedFilters, setUpdatedFilters] = useState<{
    [key: string]: string[];
  }>({});
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
    console.log(selectedFilters)
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
      } catch (error) {
        console.error("Algolia search error:", error);
      }
    }
    performSearch();
  }, [inputValue, currentPage, selectedFilters]);


  const applyFilters = () => {
    let filteredHits = hits;
    Object.keys(updatedFilters).forEach((filterKey) => {
      const filterValues = updatedFilters[filterKey];
  
      filteredHits = filteredHits.filter((hit) => {
        const product = hit as Product;
  
        return (
          typeof product[filterKey as keyof Product] === 'string' &&
          filterValues.includes(product[filterKey as keyof Product] as string)
        );
      });
    });
  
    setHits(filteredHits);
  };

  useEffect(() => {
    applyFilters();
  }, [updatedFilters, hits]);

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
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
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
                  <ProductCards product={product} key={product.objectId} />
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
