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
     <div className="mx-auto  bg-black">
     <iframe width="560" height="315" src="https://www.youtube.com/embed/ueWI3I8Nx4Y?autoplay=1&mute=1&start=2" className="mx-auto w-full sm:h-screen lg:mb-0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<div className="bg-gold w-full relative  h-8 my-auto flex space-x-3 items-center  justify-center lg:h-12">

<a href="https://www.youtube.com/channel/UCaiYtF8uwCq7c46N4_Sajbg"><img src={yt} width="40px" height="20px" className="my-auto w-9 sm:w-14 md:w-20" /></a>
                <a href="https://open.spotify.com/album/5oj4ROdwOdmoPyd140nxCa"><img src={spotify} width="40px" height="20px" className="my-auto w-12 sm:w-14 md:w-20" /></a>
                <a href="https://music.apple.com/us/album/heaven-in-hell-single/1633671388"><img src={apple} width="40px" height="20px" className="my-auto w-12 sm:w-14 md:w-20" /></a>

            </div>
    </div>
)
}