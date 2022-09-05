import React, {useState} from 'react'

import { Link } from 'gatsby'
import about from '../../images/3_About/about.png'
import portrait from '../../images/3_About/Background.png'


export default function Example() {

  const [learnMore, setLearnMore] = useState(false)
  const LearnSection = () => {
    return (
      <div className='relative'>

      <p className="-mt-5 w-full relative z-10 text-left text-gray-50 text-sm font-thin sm:text-base">
      Ayline (eye-lean) meaning “the one that belongs to the moon”, captivates with her bluesy, rock ’n soul infused vibe. Her music will draw you in and steal your heart. Ayline’s connection to the music and lyrics she writes is undeniable, and honors her journey as a woman and an artist.
      </p>
      <Link to="/about">
      <div className="absolute top-36 mt-4 right-10  z-10 flex flex-row justify-between text-sm cursor-pointer text-gray-400 border-b-2 border-solid border-gray-600 w-32 ml-4 xs:top-24" >Learn More...</div>
                </Link>


      </div>
    )
  }
  return (
    <div id="about" className=" max-h-96 mb-6 -mt-24 pb-16 py-12 h-screen bg-black sm:max-h-96" style={{gridColumn:"span 7", gridRowStart:"second", gridRowEnd:"third"}}>
      <span className="absolute z-0  text-white ">
      <figure>
            <img
              className="w-full h border-2"
              src={portrait}
              alt=""
              width={1310}
              height={873}
            />

          </figure>
          </span>
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="  px-6 flex flex-col lg:text-center">

          <span className='w-full flex justify-end'>

          <img src={about} width="100px" height="100px" className="relative right-10 mr-0 z-10 w-36 mt-8 sm:w-52  lg:72" loading="lazy" />

          </span>
          <LearnSection />
        </div>

      </div>
    </div>
  )
}
