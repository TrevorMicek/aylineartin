
import React from 'react'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'
import { Link } from "gatsby"

import BG from '../../images/header2/darkHeader.jpg'
import available from '../../images/available/available.png'
import cd from '../../images/header2/newHeader.jpg'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
/*
<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=1">
</iframe>

 <div className="w-36 relative right-12 xxs:right-18">
            <iframe src="https://open.spotify.com/embed/album/5oj4ROdwOdmoPyd140nxCa?utm_source=generator" width="225" height="160" frameborder="0" allowtransparency="true" className="-mb-7 w-60 overflow-hidden sm:-ml-5 sm:w-72 md:w-80 lg:-ml-14 lg:w-96"></iframe>
            </div>
*/

export default function Example() {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Music', href: '/#music' },
    { name: 'Contact', href: '/#contact' }
  ]
  return (
    <div className="relative " style={{gridColumn:"span 5", gridRowStart:"header", gridRowEnd:"main"}}>



<Popover as="header" className="z-10 absolute -top-2 right-0 border-solid ">
        <div className="bg-transparent pt-6">
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">

              <div className="space-x-4 -mt-1 mr-2  whitespace-nowrap md:flex md:absolute md:right-10">
                {navigation.map((item) => (
                  <Link to={item.href} key={item.name} className="  text-white hover:text-red-700" style={{fontSize: "10px"}}>
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

          </nav>
        </div>


      </Popover>

      <main className="lg:relative bg-black">


        <img
            className=" relative bg-fixed z-0 inset-0 w-full h-full object-cover"
            src={BG}
            alt="album cover, lady in red dress. Ayline Artin"
          />





        <div className="overflow-hidden bg-black mx-auto flex justify-around flex-row items-start">

              <img src={available} width="100px" height="100px" className="w-28  ml-3 sm:w-40 md:w-52 lg:w-60" />



                    <div className='w-42 mt-3'><img src={cd} width="100px" height="100px" className="cursor-pointer" /></div>
          </div>
      </main>
    </div>
  )
}
