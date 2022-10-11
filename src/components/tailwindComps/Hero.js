
import React from 'react'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'
import { Link } from "gatsby"

import yt from '../../images/pics/PNG/youtube.png'
import spotify from '../../images/pics/PNG/spotify.png'
import apple from '../../images/pics/PNG/applemusic.png'


import BG from '../../images/header2/darkHeader.jpg'
import available from '../../images/available/available.png'
import cd from '../../images/header2/newHeader.jpg'
import wings from '../../images/GoldenWings.jpg'
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
            className="relative max-w-7xl mx-auto flex flex-col items-end justify-between px-4 sm:px-6"
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
                   <img src={logo} className="relative mr-5" width="40px" height="40px" />
          </nav>
        </div>


      </Popover>

      <main className="lg:relative bg-black">


        <img
            className=" relative mb-0 pb-0 bg-fixed z-0 inset-0 w-full h-full object-cover"
            src={BG}
            alt="album cover, lady in red dress. Ayline Artin"
          />




<div className="bg-gold w-full relative h-8 my-auto flex space-x-3 items-center  justify-center lg:h-12">

<a href="https://www.youtube.com/channel/UCaiYtF8uwCq7c46N4_Sajbg"><img src={yt} width="40px" height="20px" className="my-auto w-9 sm:w-14 md:w-20" /></a>
                <a href="https://open.spotify.com/album/5oj4ROdwOdmoPyd140nxCa"><img src={spotify} width="40px" height="20px" className="my-auto w-12 sm:w-14 md:w-20" /></a>
                <a href="https://music.apple.com/us/album/heaven-in-hell-single/1633671388"><img src={apple} width="40px" height="20px" className="my-auto w-12 sm:w-14 md:w-20" /></a>

            </div>
        <div className="relative h-52 overflow-hidden bg-black mx-auto flex justify-center flex-row items-start lg:justify-center lg:space-x-32">

              <img src={available} width="100px" height="100px" className="w-52  ml-3 sm:w-40 md:w-52 lg:w-60" />



                  <div className="relative top-24 right-5 flex flex-col">
                    <div className='w-24  relative'><img src={cd} width="75px" height="75px" className="cursor-pointer w-16" /></div>
                    <button
								className=" relative bg-gold -top-4 py-1 w-16 text-black text-xs"

							>
								<Link to="/store/#heaven-single">Buy Now</Link>
							</button>
                  </div>
                  <div className="relative top-24 right-10 flex flex-col">
                    <div className='w-24  relative'><img src={wings} width="75px" height="75px" className="cursor-pointer w-16" /></div>
                    <button
								className=" relative bg-gold -top-4 py-1 w-16 text-black text-xs"

							>
								<Link to="/store/#golden-wings-single">Buy Now</Link>
							</button>
                  </div>
          </div>
      </main>
    </div>
  )
}
