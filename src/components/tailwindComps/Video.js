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
  <div className="" style={{gridColumn:"span 7", gridRowStart:"first", gridRowEnd:"second", position: 'relative', zIndex:'12', top: '-3vh', zIndex: '21'}}>
     <div className="mx-auto">
      <iframe width="350" height="600"

src="https://res.cloudinary.com/websites-by-trevor/video/upload/v1657736170/so_2/trailer_gef7mv.mp4"
autoplay
className="mx-auto w-full">
</iframe>
</div>
    </div>
)
}