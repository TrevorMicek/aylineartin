
import React from 'react'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'
import { Link } from "gatsby"

import BG from '../../images/newImg/Assets/1_Header/Header.png'
import available from '../../images/newImg/Assets/2_AvailableNow/available now.png'

import Logo from '../../images/newImg/Assets/1_Header/AylineArtin.png'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
/*
<iframe width="420" height="315"
src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=1">
</iframe>
*/
export default function Example() {
  const navigation = [
    { name: 'About me', href: '/#about' },
    { name: 'Music', href: '/#music' },
    { name: 'Performed at', href: '/#perform' },
    { name: 'Contact', href: '/#contact' }
  ]
  return (
    <div className="relative " style={{gridColumn:"span 5", gridRowStart:"header", gridRowEnd:"main"}}>



          <div className="bg-black">
          <nav
            className=" mx-auto flex items-center text-right justify-around px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex items-center justify-between flex-1">
              <div className=" h-16 w-auto flex items-center justify-between md:w-auto">
                <a href="/">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-9 w-auto mt-4"
                    src={Logo}
                    alt="coding logo"
                    width="200px"
                    height="200px"
                  />
                </a>

              </div>
              <div className="py-3 text-right space-x-3 flex flex-between md:flex md:absolute md:right-10">

                {navigation.map((item) => (
                  <Link to={item.href} key={item.name} className=" text-xs text-white hover:text-red-700">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

          </nav>
        </div>




      <main className="lg:relative">


        <img
            className=" relative bg-fixed z-0 inset-0 w-full h-full object-cover"
            src={BG}
            alt="album cover, lady in red dress. Ayline Artin"
          />





        <div className="overflow-hidden relative z-10 -mt-7 pt-3 -mb-28 h-40 bg-black mx-auto flex justify-around flex-row">

              <img src={available} width="400px" height="200px" className="h-20 sm:w-72 md:w-52 lg:w-60" />




          </div>
      </main>
    </div>
  )
}
