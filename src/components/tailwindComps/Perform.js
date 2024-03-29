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
  <div className="relative z-10  -mb-1 lg:h-52" style={{gridColumn:"span 7", gridRowStart:"fifth", gridRowEnd:"sixth", position: 'relative', zIndex:'12', top: '0vh', zIndex: '21'}}>

      <img src={background} width="400px" height="200px" className="w-screen  h-36 absolute z-20 left-0 lg:h-52" loading="lazy" />
    <div className="font-default h-36 -mb-1 py-0 ">
    <div className="max-w-7xl mx-auto text-center pt-3 lg:py-7">
    <div className="relative z-20 top-2">
          <h2 className="text-center mb-0 -mt-4 text-white text-xs leading-8 tracking-tight ">
            <img src={performed} width="150px" height="75px" className="mx-auto lg:h-16 lg:w-40" loading="lazy" />
          </h2>
            <div className="bg-black -mt-4 pt-3 h-12 my-auto lg:h-16 lg:pt-5">
            <CityScroll />
            </div>
        </div>


    </div>
  </div>
    </div>
)
}