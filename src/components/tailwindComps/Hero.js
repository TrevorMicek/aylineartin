
import React from 'react'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ChevronRightIcon } from '@heroicons/react/solid'
import { Link } from "gatsby"

import BG from '../../images/header2/header.png'
import available from '../../images/available/available.png'
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
                  <Link to={item.href} key={item.name} className="  text-black hover:text-red-700" style={{fontSize: "10px"}}>
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





        <div className="overflow-hidden   bg-black mx-auto flex justify-around flex-row items-end">

              <img src={available} width="100px" height="100px" className="w-28 ml-3 sm:w-40 md:w-52 lg:w-60" />
              <div className="bg-purple relative -left-6 h-8 my-auto flex space-x-3 items-end  justify-center">

<a href="https://www.amazon.com/music/player/albums/B0B5ZF67NM?ref=sr_1_1&s=dmusic&keywords=heaven+in+hell+ayline+artin&crid=HA4KADOMN0VJ&sprefix=heaven+in+hell+ayline+artin%2Cdigital-music%2C119&qid=1657776156&sr=1-1"><img src={yt} width="40px" height="20px" className="my-auto w-9 sm:w-14 md:w-20" /></a>
                <a href="https://open.spotify.com/album/5oj4ROdwOdmoPyd140nxCa"><img src={spotify} width="40px" height="20px" className="my-auto w-12 sm:w-14 md:w-20" /></a>
                <a href="https://music.apple.com/us/album/heaven-in-hell-single/1633671388"><img src={apple} width="40px" height="20px" className="my-auto bg-white w-12 sm:w-14 md:w-20" /></a>

            </div>


                    <div className='w-42'></div>
          </div>
      </main>
    </div>
  )
}
