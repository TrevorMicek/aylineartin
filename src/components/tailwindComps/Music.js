
import { Link } from 'gatsby'
import React, {useState} from 'react'

import form from '../../images/4_Music/Form.png'
import music from '../../images/4_Music/Music.png'
import bg from '../../images/4_Music/background.png'
export default function Example() {
  const [learnMore, setLearnMore] = useState(false)
  const LearnSection = () => {
    return (
      <>

      <p className="-mt-7 w-full max-w-64 relative z-10 text-left text-gray-50 text-sm font-thin ">
      Ayline’s music is far from expected. She brings an exciting vigor to the scene while keeping her roots true to the soulful blues that she grew up listening to and playing on her old upright piano; which she still sits at to write her music. With an emotionally piercing rock ’n roll voice that can effortlessly shift to a sensual ballad, nothing is predictable about her artistry.
      </p>
      <Link to="/about">
      <div className="relative -top-3 z-10 mb-5 flex flex-row justify-between text-sm cursor-pointer text-gray-400 border-b-2 border-solid border-gray-300 w-32" >Learn More...
            </div>
                </Link>

      </>
    )
  }
  return (
    <div id="music" className="relative overflow-hidden max-h-96 pb-0  h-screen bg-black sm:max-h-96" style={{gridColumn:"span 7", gridRowStart:"third", gridRowEnd:"fourth", zIndex:"22", marginBottom: "2.35rem"}}>
      <span className="absolute h-full max-h-72 z-0 text-white ">

            <img
              className="relative object-cover h-96  border-2"
              src={bg}
              alt=""
              width={1310}
              height={873}
            />


          </span>
      <div className="max-w-7xl mx-auto px-4 bg-black">
        <div className="  px-6 flex flex-col lg:text-center">

          <span className='w-full flex justify-start'>

          <img src={music} width="100px" height="100px" className="relative  mr-0 z-10 w-36 mt-6 sm:w-40  lg:72" loading="lazy" />

          </span>
          <LearnSection />
        </div>

      </div>

    </div>
  )
}
