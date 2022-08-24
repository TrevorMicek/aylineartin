import React, {useState, useEffect} from 'react'
import Ticker from 'react-ticker'

import follow from '../../images/newImg/Assets/7_Follow/button.png'
import feed from '../../images/newImg/Assets/7_Follow/Photobar.png'
import background from '../../images/newImg/Assets/5_PerformedAt/Background_1.png'
import performed from '../../images/newImg/Assets/5_PerformedAt/Performedat.png'
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
            <p className="min-w-4xl whitespace-nowrap pt-0 my-auto tracking-widest text-white text-center text-xs" >
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
  <div className="bg-insta" style={{gridColumn:"span 7", gridRowStart:"sixth", gridRowEnd:"seventh", position: 'relative', zIndex:'12', top: '0vh', zIndex: '21'}}>


    <div className="max-w-7xl mx-auto text-center pt-3">
    <div className="relative mx-4 mt-2 flex justify-center items-center sm:my-3 sm:mx-10">
        <img src={follow} width="150px" height="100px" className="absolute " />
    <img src={feed} width="300px" height="100px" className="h-20" />

        </div>


  </div>
    </div>
)
}