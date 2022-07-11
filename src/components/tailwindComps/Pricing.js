
import React from 'react'

/* This example requires Tailwind CSS v2.0+ */
import boxTwo from '../../images/boxTwo.webp'
import boxThree from '../../images/boxThree.webp'
import boxFour from '../../images/boxFour.webp'
import boxFive from '../../images/boxFive.webp'
import boxSix from '../../images/boxSix.webp'

import form from '../../images/music/PNG/Form.png'
import music from '../../images/music/PNG/Music.png'

export default function Example() {
  return (
    <div className=" -mt-14 bg-white" style={{gridColumn:"span 7", gridRowStart:"third", gridRowEnd:"fourth"}}>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div className="ml-8 overflow-hidden  -mt-4 flex justify-center justify-between flex-row lg:text-center">

          <span>
          <img src={music} width="100px" height="100px" className="w-36 mt-8" />
          <p className="-mt-12 w-44 text-left text-gray-900 font-serif text-xs font-thin lg:mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          </span>
          <span className=" w-44 h-60 relative -right-3 overflow-hidden  text-white">
            <img src={form} width="300px" height="400px"  />
          </span>
        </div>

      </div>
      <div className="mx-auto">
      <iframe width="350" height="315"
src="https://www.youtube.com/embed/dRnqcr3FGvs?controls=1"
className="mx-auto">
</iframe>
</div>
    </div>
  )
}
