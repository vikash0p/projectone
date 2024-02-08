import Image from 'next/image'
import React from 'react'
import FormatPrice from '../HomeComp/FormatPrice'

export default function ProductGridViewCard({value}) {
  return (
      <div className="flex flex-col gap-2 bg-gray-100 p-4 max-w-sm " key={value.id}>
          <Image
              src={value.image}
              alt={value.name}
              width={500}
              height={500}
              className="object-contain w-full h-32"

          />
          <div className="w-full flex justify-between ">
              <h5 className="">{value.name} </h5>
              <FormatPrice price={value.price} />
          </div>
      </div>
  )
}
