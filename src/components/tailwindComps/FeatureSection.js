import React, {useState} from 'react'


import about from '../../images/3_About/about.png'
import portrait from '../../images/about.jpg'


export default function Example() {

  const [learnMore, setLearnMore] = useState(false)
  const LearnSection = () => {
    return (
      <>
      {learnMore ?  <p className="-mt-5 w-44 text-left text-gray-50 font-serif text-xs font-thin lg:mx-auto sm:w-60 md:w-72">
          Ayline (eye-lean) meaning “the one that belongs to the moon”, captivates with her bluesy, rock ’n soul infused vibe. Her music will draw you in and steal your heart. Ayline’s connection to the music and lyrics she writes is undeniable, and honors her journey as a woman and an artist. She has performed at iconic venues including The Dolby, The Saban and The Rose Theater, and has been fortunate to grace the stage at Palm Springs Pride Festival and Hermosa Beach Pride Festival. Ayline is equally passionate about spreading love and bringing awareness to the Armenian Genocide by performing at the El Rey Theater, Alex Theater, and the Beverly Hilton. Ayline’s driving force behind the music she writes, records and performs is LOVE. Spreading the message of love, faith and gratitude is what makes Ayline’s music so special. It can be felt in every note and lyric she sings.  Her soulful storytelling will pull at your heartstrings and leave you wanting more.
          </p>
      :
      <>
      <p className="-mt-5 w-44 text-left text-gray-50 font-serif text-xs font-thin lg:mx-auto sm:w-60 md:w-72">
      Ayline (eye-lean) meaning “the one that belongs to the moon”, captivates with her bluesy, rock ’n soul infused vibe. Her music will draw you in and steal your heart. Ayline’s connection to the music and lyrics she writes is undeniable, and honors her journey as a woman and an artist.
      </p>
      <div className="flex flex-row justify-between text-sm cursor-pointer text-gray-400 border-b-2 border-solid border-gray-600 w-32 ml-4" onClick={()=>setLearnMore(true)}>Learn More...<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M15.707 4.293a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L10 8.586l4.293-4.293a1 1 0 011.414 0zm0 6a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L10 14.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg></div>
                </>
  }
      </>
    )
  }
  return (
    <div className="-mt-14 py-12 bg-black" style={{gridColumn:"span 7", gridRowStart:"first", gridRowEnd:"second"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-x-8 flex justify-center justify-around flex-row lg:text-center">
        <span className="w-40 text-white">
            <img src={portrait} width="300px" height="400px" />
          </span>
          <span>
          <img src={about} width="100px" height="100px" className="w-36 mt-8" />
          <LearnSection />
          </span>

        </div>

      </div>
    </div>
  )
}
