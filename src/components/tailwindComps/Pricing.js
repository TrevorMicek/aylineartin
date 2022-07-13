
import React from 'react'

/* This example requires Tailwind CSS v2.0+ */
import boxTwo from '../../images/boxTwo.webp'
import boxThree from '../../images/boxThree.webp'
import boxFour from '../../images/boxFour.webp'
import boxFive from '../../images/boxFive.webp'
import boxSix from '../../images/boxSix.webp'

import form from '../../images/4_Music/Form.png'
import music from '../../images/4_Music/Music.png'
export default function Example() {
  return (
    <div className=" -mt-14 bg-white" style={{gridColumn:"span 7", gridRowStart:"third", gridRowEnd:"fourth"}}>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div className="ml-8 overflow-hidden -mt-4 space-x-8 flex justify-center justify-around flex-row lg:text-center">

          <span>
          <img src={music} width="100px" height="100px" className="w-36 mt-8" />
          <p className="-mt-12 w-44 text-left text-gray-900 font-serif text-xs font-thin lg:mx-auto">
          Ayline’s music is far from expected. She brings an exciting vigor to the scene while keeping her roots true to the soulful blues that she grew up listening to and playing on her old upright piano; which she still sits at to write her music. With an emotionally piercing rock ’n roll voice that can effortlessly shift to a sensual ballad, nothing is predictable about her artistry. Her depth of emotion and passion for what she creates burns through each track like a wildfire. It is no surprise the immense talent that surrounds Ayline in her band full of music legends. Percussionist, Oliver C. Brown, original member of KC and the Sunshine Band, Mick Fleetwood and Fleetwood Mac infuses a high energy to her music and on stage. Nils, a renowned producer and her lead guitarist, holds 6 #1 contemporary jazz records. Artin’s drummer, Eric Valentine, has played on more than 20 #1 singles in various genres. Her bassist Derrick Elliot, brings a unique tranquil sound to the songs. The band is rounded out by her keyboardist, Adam Peri, who adds a sensual touch to Ayline’s rock ballads.  “Heaven in Hell”, an edgy hard hitting rock hit with an infectious hook, features an intoxicating percussion intro by Oliver C. Brown, and an electrifying guitar (rhythm) that electrifies the track. The song is about the dangers of being in love with one person but being tempted by a chemistry with someone else.
          </p>
          </span>
          <span className=" w-44 h-60 relative -right-3 overflow-hidden  text-white">
            <img src={form} width="300px" height="400px"  />
          </span>
        </div>

      </div>
      <div className="mx-auto">
      <iframe width="350" height="315"
      loading="lazy"
src="https://res.cloudinary.com/websites-by-trevor/video/upload/v1657736170/trailer_gef7mv.mp4"
autoplay
className="mx-auto w-full">
</iframe>
</div>
    </div>
  )
}
