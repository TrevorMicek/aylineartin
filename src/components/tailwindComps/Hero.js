
import React from 'react'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'
import { Link } from "gatsby"

import BG from '../../images/header/PNG/Banner.png'
import available from '../../images/header/PNG/available.png'
import yt from '../../images/pics/PNG/youtube.png'
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
    { name: 'About Me', href: '/' },
    { name: 'Music', href: '/#music' },
    { name: 'Contact Me', href: '/#contact' }
  ]
  return (
    <div className="relative " style={{gridColumn:"span 5", gridRowStart:"header", gridRowEnd:"main"}}>

<Popover as="header" className="z-10 absolute top-3 right-6 border-solid ">
        <div className="bg-transparent pt-6">
          <nav
            className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">

              <div className="space-x-4 whitespace-nowrap md:flex md:absolute md:right-10">
                {navigation.map((item) => (
                  <Link to={item.href} key={item.name} className="text-xs font-xs text-black hover:text-red-700">
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




        <div className=" -mt-6 bg-gray-100 mx-auto flex justify-around flex-row">
            <div className="">
              <img src={available} width="100px" height="100px" className="w-44 mt-8" />
              <div className="-mt-4 flex flew-row space-x-4">
                <img src={yt} width="55px" height="50px" />
                <img src={spotify} width="70px" height="50px" />
                <img src={apple} width="60px" height="50px" />
              </div>
            </div>
            <div className="">
            <iframe src="https://open.spotify.com/embed/user/spotify/playlist/37i9dQZF1DWWvHBEQLnV1N" width="350" height="80" frameborder="0" allowtransparency="true" className="mt-12"></iframe>
            </div>

          </div>
      </main>
    </div>
  )
}
