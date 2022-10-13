import React, {useState} from 'react'

import { Link } from 'gatsby'
import about from '../../images/3_About/about.png'
import portrait from '../../images/newAbout.jpg'

export default function Example() {

  const [learnMore, setLearnMore] = useState(false)
  const LearnSection = () => {
    return (
      <>
      {learnMore ?  <p className="-mt-7  w-full max-w-64 relative z-10 text-left text-gray-50 text-sm font-thin ">
          Ayline (eye-lean) meaning “the one that belongs to the moon”, captivates with her bluesy, rock ’n soul infused vibe. Her music will draw you in and steal your heart. Ayline’s connection to the music and lyrics she writes is undeniable, and honors her journey as a woman and an artist. She has performed at iconic venues including The Dolby, The Saban and The Rose Theater, and has been fortunate to grace the stage at Palm Springs Pride Festival and Hermosa Beach Pride Festival. Ayline is equally passionate about spreading love and bringing awareness to the Armenian Genocide by performing at the El Rey Theater, Alex Theater, and the Beverly Hilton. Ayline’s driving force behind the music she writes, records and performs is LOVE. Spreading the message of love, faith and gratitude is what makes Ayline’s music so special. It can be felt in every note and lyric she sings.  Her soulful storytelling will pull at your heartstrings and leave you wanting more.
          </p>
      :
      <>
      <p className="-mt-7  w-full max-w-64 relative z-10 text-left text-gray-50 text-sm font-thin ">
      Ayline (eye-lean) meaning “the one that belongs to the moon”, captivates with her bluesy, rock ’n soul infused vibe. Her music will draw you in and steal your heart. Ayline’s connection to the music and lyrics she writes is undeniable, and honors her journey as a woman and an artist.
      </p>
      <div className="flex flex-row z-20 justify-between text-sm cursor-pointer text-gray-400 border-b-2 border-solid border-gray-600 w-32 ml-4" onClick={()=>setLearnMore(true)}>Learn More...<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg></div>
                </>
  }
      </>
    )
  }
  return (
    <div id="about" className="relative overflow-hidden max-h-96 pb-0  h-screen bg-black sm:max-h-96" style={{gridColumn:"span 7", gridRowStart:"second", gridRowEnd:"third"}}>
       <span className="absolute h-full left-0 w-72 max-h-72 z-0 text-white lg:w-5/12 lg:right-40">

<img
  className="relative object-cover   border-2 "
  src={portrait}
  alt=""
  width={1310}
  height={873}
/>


</span>
      <div className="max-w-2xl mx-auto px-4 lg:pt-10">
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
