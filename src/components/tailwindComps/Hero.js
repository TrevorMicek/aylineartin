
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
import comingSoon from '../../images/H&Halbum.jpg'
import album from '../../images/store.jpg'


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
                  <Link to={item.href} key={item.name} className="text-sm  text-white hover:text-red lg:mt-6" >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
                   <img src={logo} className="mt-3 relative mx-auto " width="75px" height="75px" />
          </nav>
        </div>


      </Popover>

      <main className="lg:relative bg-black">


        <img
            className="  relative mb-0 pb-0 bg-fixed z-0 inset-0 w-full h-full object-cover"
            src={BG}
            alt="album cover, lady in red dress. Ayline Artin"
          />




<div className="bg-gold w-full relative h-8 my-auto flex space-x-3 items-center  justify-center lg:h-12">

<a href="https://www.youtube.com/channel/UCaiYtF8uwCq7c46N4_Sajbg"><img src={yt} width="40px" height="20px" className="my-auto w-9 sm:w-14 md:w-20" /></a>
                <a href="https://open.spotify.com/album/5oj4ROdwOdmoPyd140nxCa"><img src={spotify} width="40px" height="20px" className="my-auto w-12 sm:w-14 md:w-20" /></a>
                <a href="https://music.apple.com/us/album/heaven-in-hell-single/1633671388"><img src={apple} width="40px" height="20px" className="my-auto w-12 sm:w-14 md:w-20" /></a>

            </div>
        <div className=" relative h-screen overflow-hidden bg-black mx-auto flex justify-center flex-row  items-start sm:h-screen lg:justify-center lg:space-x-32">
        <div className="relative  sm:right-5 flex flex-row space-x-2 ">

              <img src={available} width="100px" height="100px" className="w-36  relative left-6 sm:w-40 md:w-52 lg:w-60" />



                    <span className="relative top-36 w-32  right-24 sm:right-8  ">
                      <span className="flex flex-row justify-start sm:flex-col ">
                      <a href="https://open.spotify.com/album/5oj4ROdwOdmoPyd140nxCa" className="cursor-pointer min-w-16 w-16 sm:w-32">
                      <img src={cd} width="75px" height="75px" className="cursor-pointer min-w-16 w-16 sm:w-32" />
                      </a>
                      <a href="https://open.spotify.com/album/5oj4ROdwOdmoPyd140nxCa" className="cursor-pointer min-w-16 w-16 sm:w-32">
                      <img src={wings} width="75px" height="75px" className="cursor-pointer min-w-16 w-16 sm:w-32 " />\
                      </a>
                     </span>
                      <button className="mb-4 bg-gold text-black px-2 py-1 text-lg"><a href="https://open.spotify.com/album/5oj4ROdwOdmoPyd140nxCa">Singles</a></button>
                    </span>
                  </div>
                  <div className="relative top-10 right-0 mx-auto">
                  <p className="text-gold text-2xl font-medium font-[`Work_Sans`]">Coming Soon...11/18/22</p>



                  <div className="relative  flex flex-col">
                  <div className=' mx-auto relative'> <span>
                      <img src={album} width="75px" height="75px" className="cursor-pointer w-16 sm:w-32 mt-5" />
                      <button className=" mb-4 bg-gold text-black px-1 text-sm "><a href="https://aylineartin.bandcamp.com/album/heaven-in-hell-3">Pre-Order<br /> Digital Album</a></button>
                    </span></div>

                  </div>
                  <iframe className="w-32 relative right-10 top-10" style={{border: 0, width: '400px', height: '472px'}} src="https://bandcamp.com/EmbeddedPlayer/album=3336405295/size=large/bgcol=333333/linkcol=e32c14/artwork=small/transparent=true/" seamless><a href="https://aylineartin.bandcamp.com/album/heaven-in-hell-3">Heaven In Hell by Ayline Artin</a></iframe>
                  </div>



          </div>
      </main>
    </div>
  )
}
