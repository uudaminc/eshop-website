import { Bars3Icon, BellIcon, MagnifyingGlassIcon, StarIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { Product } from '../_types/product';
import { InstantSearchNext } from 'react-instantsearch-nextjs';
import { Hits, SearchBox } from 'react-instantsearch';
import { liteClient as algoliasearch } from 'algoliasearch/lite';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';

const searchClient = algoliasearch("3GQT7AH79I", "6dc214dc903288245533ed99771cee99");

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }
  const navigation = [
    { name: 'Marble', href: '#', current: true },
    { name: 'Quartz', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
  ]
  const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
  ]

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
        <Disclosure as="header" className="bg-white shadow">
            <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8">
                <div className="relative flex h-16 justify-between">
                    <div className="relative z-10 flex px-2 lg:px-0">
                        <div className="flex flex-shrink-0 items-center">
                            <img
                                alt="Your Company"
                                src="../graniteshop-logo.png"
                                className="h-8 w-auto"
                            />
                        </div>
                    </div>
                    <div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
                        <div className="w-full sm:max-w-xs">
                        <label htmlFor="search" className="sr-only">
                            Search
                        </label>
                        <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <MagnifyingGlassIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                            </div>
                            <SearchBox className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>
                </div>
                <div className="relative z-10 flex items-center lg:hidden">
                    {/* Mobile menu button */}
                    <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Open menu</span>
                        <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                        <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                    </DisclosureButton>
                </div>
                <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                    <button type="button" className="relative flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon aria-hidden="true" className="h-6 w-6" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative ml-4 flex-shrink-0">
                        <div>
                            <MenuButton className="relative flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                <span className="absolute -inset-1.5" />
                                <span className="sr-only">Open user menu</span>
                                <img alt="" src={user.imageUrl} className="h-8 w-8 rounded-full" />
                            </MenuButton>
                        </div>
                        <MenuItems transition className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in">
                            {userNavigation.map((item) => (
                            <MenuItem key={item.name}>
                                <a href={item.href} className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                                    {item.name}
                                </a>
                            </MenuItem>
                            ))}
                        </MenuItems>
                    </Menu>
                </div>
                </div>
                <nav aria-label="Global" className="hidden lg:flex lg:space-x-8 lg:py-2">
                {navigation.map((item) => (
                    <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                        item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                        'inline-flex items-center rounded-md px-3 py-2 text-sm font-medium',
                    )}
                    >
                    {item.name}
                    </a>
                ))}
                </nav>
            </div>
            <DisclosurePanel as="nav" aria-label="Global" className="lg:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                    <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                        item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-900 hover:bg-gray-50 hover:text-gray-900',
                        'block rounded-md px-3 py-2 text-base font-medium',
                    )}
                    >
                    {item.name}
                    </DisclosureButton>
                ))}
                </div>
                <div className="border-t border-gray-200 pb-3 pt-4">
                <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                    <img alt="" src={user.imageUrl} className="h-10 w-10 rounded-full" />
                    </div>
                    <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">{user.name}</div>
                    <div className="text-sm font-medium text-gray-500">{user.email}</div>
                    </div>
                    <button
                    type="button"
                    className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                    <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    >
                        {item.name}
                    </DisclosureButton>
                    ))}
                </div>
                </div>
            </DisclosurePanel>
        </Disclosure>

        <div className="bg-white">
            <div className="mx-auto max-w-7xl overflow-hidden sm:px-6 lg:px-8">
                <Hits hitComponent={Hit} classNames={{list: 'grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-4',
                    item: 'relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden',
                }}/>
            </div>
        </div>
    </InstantSearchNext>
    </>
  )
}
