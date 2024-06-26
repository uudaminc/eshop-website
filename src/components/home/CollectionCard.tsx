import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface CollectionCardProps {
    name: string, 
    href: string,
    imageSrc: string,
    imageAlt: string
}

const CollectionCard = ({collection} : {collection: CollectionCardProps}) => {
  return (
    <div
    key={collection.name}
    className="group relative h-96 rounded-lg bg-white shadow-xl sm:aspect-h-5 sm:aspect-w-4 sm:h-auto"
  >
    <div>
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden rounded-lg"
      >
        <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
          <Image
            width={700}
            height={200}
            src={collection.imageSrc}
            alt={collection.imageAlt}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
      </div>
      <div className="absolute inset-0 flex items-end rounded-lg p-6">
        <div>
          <p aria-hidden="true" className="text-sm text-white">
            Shop the collection
          </p>
          <h3 className="mt-1 font-semibold text-white">
            <Link href={collection.href}>
              <span className="absolute inset-0" />
              {collection.name}
            </Link>
          </h3>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CollectionCard