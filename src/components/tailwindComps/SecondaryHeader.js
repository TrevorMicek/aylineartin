
import React from 'react'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'
import { Link } from "gatsby"

import BG from '../../images/album.png'
import available from '../../images/available/available.png'
import cd from '../../images/header2/newHeader.jpg'
import logo from '../../images/logo.png'


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
    { name: 'Store', href: '/store' },
    { name: 'Contact', href: '/#contact' }
  ]
  return (
    <div className="relative " style={{gridColumn:"span 5", gridRowStart:"header", gridRowEnd:"main"}}>



<Popover as="header" className="z-10 absolute -top-2 right-0 border-solid ">
        <div className="bg-transparent pt-6">
          <nav
            className="relative max-w-7xl flex flex-col items-end justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">

              <div className="space-x-4 -mt-1 mr-2  whitespace-nowrap md:pt-4 md:mr-6">
                {navigation.map((item) => (
                  <Link to={item.href} key={item.name} className="text-sm  text-white hover:text-gold lg:mt-6" >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <img src={logo} className="relative mx-auto" width="100px" height="100px" />
          </nav>
        </div>


      </Popover>

      <main className="lg:relative bg-black">


        <img
            className="pt-3  relative bg-fixed mx-auto z-0 inset-0 w-full object-cover"
            src={BG}
            alt="album cover, lady in red dress. Ayline Artin"
            width="300px"
            height="400px"
          />





      </main>
    </div>
  )
}
