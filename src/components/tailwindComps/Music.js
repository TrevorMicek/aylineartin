
import { Link } from 'gatsby'
import React, {useState} from 'react'

import form from '../../images/4_Music/Form.png'
import music from '../../images/4_Music/Music.png'
export default function Example() {
  const [learnMore, setLearnMore] = useState(false)
  const LearnSection = () => {
    return (
      <>

      <p className="w-52 relative 2 z-10 -mt-12 text-left text-gray-300 text-sm font-thin lg:mx-auto sm:text-sm md:text-base sm:w-60 md:w-72">
      Ayline’s music is far from expected. She brings an exciting vigor to the scene while keeping her roots true to the soulful blues that she grew up listening to and playing on her old upright piano; which she still sits at to write her music. With an emotionally piercing rock ’n roll voice that can effortlessly shift to a sensual ballad, nothing is predictable about her artistry.
      </p>
      <Link to="/about">
      <div className="mb-5 flex flex-row justify-between text-sm cursor-pointer text-gray-400 border-b-2 border-solid border-gray-300 w-32" >Learn More...
            </div>
                </Link>

      </>
    )
  }
  return (
    <div id="music" className="pt-12 -mt-14 pb-4 -mb-3 bg-black" style={{gridColumn:"span 7", gridRowStart:"third", gridRowEnd:"fourth", zIndex:"22"}}>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div className="ml-6  overflow-hidden relative -mt-4 space-x-4 flex justify-center justify-around flex-row lg:text-center">

          <span className="">
          <img src={music} width="100px" height="100px" className="w-36 mt-8  sm:w-52 md:w-64 lg:72" loading="lazy" />
          <LearnSection />
          </span>
<span className=" top-10  relative z-0 right-0 text-white min-w-52 sm:w-72 sm:h-72 md:w-48 md:h-72 lg:w-80">
            <img src={form} width="350px" height="300px" loading="lazy" className="min-w-52" />
          </span>
        </div>

      </div>

    </div>
  )
}
