
import React from 'react'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'
import { Link } from "gatsby"

import BG from '../../images/header2/header.png'
import available from '../../images/available/available.png'
import amazon from '../../images/download.jpeg'
import spotify from '../../images/pics/PNG/spotify.png'
import apple from '../../images/pics/PNG/applemusic.png'




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
    { name: 'About Me', href: '/#about' },
    { name: 'Music', href: '/#music' },
    { name: 'Contact Me', href: '/#contact' }
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

              <div className="space-x-3 whitespace-nowrap md:flex md:absolute md:right-10">
                {navigation.map((item) => (
                  <Link to={item.href} key={item.name} className=" text-xs  text-black hover:text-red-700">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

          </nav>
        </div>


      </Popover>

      <main className="lg:relative">


          <img
            className="relative z-0 inset-0 w-full h-full object-cover"
            src={BG}
            alt="album cover, lady in red dress. Ayline Artin"
          />




        <div className=" -mt-6 -mb-10 bg-black mx-auto flex justify-around flex-row">
            <div className="">
              <img src={available} width="100px" height="100px" className="w-28 mt-8 sm:w-40 md:w-52 lg:w-60" />
              <div className="-mt-4 w-44 flex flew-row space-x-4">
                <img src={amazon} width="50px" height="30px" />
                <img src={spotify} width="100px" height="40px" />
                <img src={apple} width="100px" height="40px" className="bg-white" />
              </div>
            </div>
            <div className="w-44 relative right-14">
            <iframe src="https://open.spotify.com/embed/artist/0HTVSskXDPfVh6urnLsK9J" width="225" height="80" frameborder="0" allowtransparency="true" className="mt-12 sm:w-64 md:w-72 lg:w-80"></iframe>
            </div>

          </div>
      </main>
    </div>
  )
}
