
import { Link } from 'gatsby'
import React, {useState} from 'react'

import form from '../../images/4_Music/Form.png'
import music from '../../images/4_Music/Music.png'
import bg from '../../images/4_Music/musicBG.jpg'
export default function Example() {
  const [learnMore, setLearnMore] = useState(false)
  const LearnSection = () => {
    return (
      <>
      {learnMore ?  <p className="-mt-7  w-full max-w-64 relative z-10 text-left text-gray-50 text-sm font-thin ">
      Ayline’s music is far from expected. She brings an exciting vigor to the scene while keeping her roots true to the soulful blues that she grew up listening to and playing on her old upright piano; which she still sits at to write her music. With an emotionally piercing rock ’n roll voice that can effortlessly shift to a sensual ballad, nothing is predictable about her artistry. Her depth of emotion and passion for what she creates burns through each track like a wildfire. It is no surprise the immense talent that surrounds Ayline in her band full of music legends. Percussionist, Oliver C. Brown, original member of KC and the Sunshine Band, Mick Fleetwood and Fleetwood Mac infuses a high energy to her music and on stage. Nils, a renowned producer and her lead guitarist, holds 6 #1 contemporary jazz records. Artin’s drummer, Eric Valentine, has played on more than 20 #1 singles in various genres. Her bassist Derrick Elliot, brings a unique tranquil sound to the songs. The band is rounded out by her keyboardist, Adam Peri, who adds a sensual touch to Ayline’s rock ballads. “Heaven in Hell”, an edgy hard hitting rock hit with an infectious hook, features an intoxicating percussion intro by Oliver C. Brown, and an electrifying guitar (rhythm) that electrifies the track. The song is about the dangers of being in love with one person but being tempted by a chemistry with someone else.
          </p>
      :
      <>
      <p className="-mt-7 w-full max-w-64 relative z-10 text-left text-gray-50 text-sm font-thin ">
      Ayline’s music is far from expected. She brings an exciting vigor to the scene while keeping her roots true to the soulful blues that she grew up listening to and playing on her old upright piano; which she still sits at to write her music. With an emotionally piercing rock ’n roll voice that can effortlessly shift to a sensual ballad, nothing is predictable about her artistry.
      </p>

                </>
  }
      </>
    )
  }
  return (
    <div id="music" className={`relative bg-black z-0 ${learnMore ? 'h-screen mb-56' : 'h-96'} bg-black sm:max-h-96`} style={{gridColumn:"span 7", gridRowStart:"third", gridRowEnd:"fourth", zIndex:"22"}}>
      <span className="absolute h-full top-0 right-0 w-5/12 max-h-60 z-0 text-white lg:w-5/12 lg:right-40">

            <img
              className="relative object-cover z-0 mb-20 border-2 h-fit"
              src={bg}
              alt=""
              width={1310}
              height={873}
            />


          </span>
      <div className="max-w-2xl mx-auto px-4 bg-black  lg:pt-10">

        <div className="  px-6 flex flex-col lg:text-center">

          <span className='w-full flex justify-start'>

          <img src={music} width="100px" height="100px" className="relative  mr-0 z-0 w-36 mt-6 sm:w-40  lg:72" loading="lazy" />

          </span>
          <LearnSection />
        </div>

      </div>

    </div>
  )
}
