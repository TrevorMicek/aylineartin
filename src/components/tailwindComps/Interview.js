import React, {useState, useEffect} from 'react'
import Ticker from 'react-ticker'

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
  <div className="bg-black -mt-10" style={{gridColumn:"span 7", gridRowStart:"fourth", gridRowEnd:"fifth", position: 'relative', zIndex:'12', top: '0vh', zIndex: '21'}}>
     Interview
     <div className="mx-auto  bg-black">
      <iframe defer width="350" height="300"
      loading="lazy"
        src="https://www.youtube.com/embed/WVOmsnhkQOE"
        autoplay title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
className="mx-auto w-full">
</iframe>
</div>
    </div>
)
}