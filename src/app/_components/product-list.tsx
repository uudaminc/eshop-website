import { StarIcon } from '@heroicons/react/20/solid'
import { Product } from '../_types/product';
import { InstantSearchNext } from 'react-instantsearch-nextjs';
import { Hits, SearchBox } from 'react-instantsearch';
import { liteClient as algoliasearch } from 'algoliasearch/lite';

const searchClient = algoliasearch("3GQT7AH79I", "6dc214dc903288245533ed99771cee99");

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function Hit({ hit } : { hit: Product }) {
    return (
        <div key={hit.id} className="group relative border-b border-r border-gray-200 p-4 sm:p-6">
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
            <img
                alt={hit.imageAlt}
                src={hit.imageSrc}
                className="h-full w-full object-cover object-center"
            />
            </div>
            <div className="pb-4 pt-10 text-center">
            <h3 className="text-sm font-medium text-gray-900">
                <a href={hit.href}>
                <span aria-hidden="true" className="absolute inset-0" />
                {hit.name}
                </a>
            </h3>
            <div className="mt-3 flex flex-col items-center">
                <p className="sr-only">{hit.rating} out of 5 stars</p>
                <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                    key={rating}
                    aria-hidden="true"
                    className={classNames(
                        hit.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0',
                    )}
                    />
                ))}
                </div>
                <p className="mt-1 text-sm text-gray-500">{hit.reviewCount} reviews</p>
            </div>
            <p className="mt-4 text-base font-medium text-gray-900">{hit.price}</p>
            </div>
        </div>
    );
}

export default function ProductList() {
  return (
    <>
    <InstantSearchNext searchClient={searchClient} indexName='instant_search'>
        <div className="bg-white">
        <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
            <SearchBox className="p-3 shadow-sm"/>
            <Hits hitComponent={Hit} classNames={{list: 'grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-4',
                item: 'relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden',
            }}/>
        </div>
        </div>
    </InstantSearchNext>
    </>
  )
}
