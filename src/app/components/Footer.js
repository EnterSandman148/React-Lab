import React from 'react'
import { BeakerIcon, GlobeEuropeAfricaIcon } from '@heroicons/react/24/solid'

export default function Footer() {
  return (
    <>
      <div className="flex justify-center items-center py-5 px-20 bg-gray-800">
        <h1 className=" text-gray-50 font-semibold px-5">© 2023 All rights reserved </h1>
        <GlobeEuropeAfricaIcon className="h-12 w-12 text-emerald-600" />
        <h1 className=" text-gray-50 font-semibold px-5"> Built with love by Anthony DeLuca</h1>
      </div>
    </>
  )
}
