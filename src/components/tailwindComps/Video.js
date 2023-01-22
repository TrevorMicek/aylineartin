import React, {useState, useEffect} from 'react'
import Ticker from 'react-ticker'

import yt from '../../images/pics/PNG/youtube.png'
import spotify from '../../images/pics/PNG/spotify.png'
import apple from '../../images/pics/PNG/applemusic.png'

import background from '../../images/5_PerformedAt/PNG/Background.png'
import performed from '../../images/5_Performed/PNG/Performed.png'
const CityScroll = () => {
  const [tickerSpeed, setTickerSpeed] = useState(1000);

  useEffect(() => {

    setTimeout(() => {
      setTickerSpeed(9)
    }, 1500);


}, [])
    return (
    <Ticker speed={tickerSpeed}>
        {({ index }) => (
          <>
            <p className="min-w-4xl whitespace-nowrap pt-0 my-auto tracking-widest text-white text-center text-base" >
              <span className="mr-16">The Troubadour LA</span>
              <span className="mr-16">The Roxy</span>
              <span className="mr-16">The Viper Room</span>
              <span className="mr-16">The Hotel Cafe</span>
              <span className="mr-16 ">The Mint LA</span>
              <span className="mr-16 ">El Rey Theater</span>
            </p>
            </>
        )}
    </Ticker>
)
}

export default function Example() {

return (
  <div className="bg-black" style={{gridColumn:"span 7", gridRowStart:"first", gridRowEnd:"second", position: 'relative', zIndex:'12', top: '0vh', zIndex: '21'}}>
     <div className="mx-auto  bg-black flex flex-col lg:flex-row lg:space-x-4 ">
     <iframe width="560" height="315" src="https://www.youtube.com/embed/DGu5UvYpZzE?autoplay=1&mute=1&start=2" className="mx-auto w-full sm:h-screen lg:mb-0" title="YouTube video promo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     <iframe width="560" height="315" src="https://www.youtube.com/embed/ueWI3I8Nx4Y?mute=1&start=2" className="mx-auto w-full sm:h-screen lg:mb-0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

</div>

    </div>
)
}