import React, { useState, useEffect } from "react"

import products from './products'
const productItem = [
  {
    id: 1,
    name: 'Organize Basic Set (Walnut)',
    price: '$149',
    rating: 4.5,
    reviewCount: 38,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg',
    imageAlt: 'TODO',
    href: '#',
  }
]

export default (props) => {



	useEffect(() => {
		window.scrollTo(0,0)
	}, [])








const Reviews = () => {


	return (
	<div className="py-2 w-32 flex flex-row items-center justify-start">
   <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" stroke-width="1.5" stroke="currentColor" className="mx-auto h-5 w-5">
		<defs>
		  <linearGradient id="grad1">
			<stop offset="50%" stop-color="rgb(251 191 36)" />
			<stop offset="50%" stop-color="rgb(251 191 36)" />
		  </linearGradient>
		</defs>
		<path fill="url(#grad1)" d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
	  l11.547-1.2L16.026,0.6L20.388,10.918z"/>
	  </svg>
	  <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" stroke-width="1.5" stroke="currentColor" className="mx-auto h-5 w-5">
		<defs>
		  <linearGradient id="grad2">
			<stop offset="50%" stop-color="rgb(251 191 36)" />
			<stop offset="50%" stop-color="rgb(251 191 36)" />
		  </linearGradient>
		</defs>
		<path fill="url(#grad2)" d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
	  l11.547-1.2L16.026,0.6L20.388,10.918z"/>
	  </svg>
	  <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" stroke-width="1.5" stroke="currentColor" className="mx-auto h-5 w-5">
		<defs>
		  <linearGradient id="grad3">
			<stop offset="50%" stop-color="rgb(251 191 36)" />
			<stop offset="50%" stop-color="rgb(251 191 36)" />
		  </linearGradient>
		</defs>
		<path fill="url(#grad3)" d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
	  l11.547-1.2L16.026,0.6L20.388,10.918z"/>
	  </svg>
	  <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" stroke-width="1.5" stroke="currentColor" className="mx-auto h-5 w-5">
		<defs>
		  <linearGradient id="grad4">
			<stop offset="50%" stop-color="rgb(251 191 36)" />
			<stop offset="50%" stop-color="rgb(251 191 36)" />
		  </linearGradient>
		</defs>
		<path fill="url(#grad4)" d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
	  l11.547-1.2L16.026,0.6L20.388,10.918z"/>
	  </svg>
	  <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" stroke-width="1.5" stroke="currentColor" className="mx-auto h-5 w-5">
		<defs>
		  <linearGradient id="grad5">
			<stop offset="50%" stop-color="rgb(251 191 36)" />
			<stop offset="50%" stop-color="white" />
		  </linearGradient>
		</defs>
		<path fill="url(#grad5)" d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,12.118
	  l11.547-1.2L16.026,0.6L20.388,10.918z"/>
	  </svg>


  </div>
  )
	}
	function classNames(...classes) {
		return classes.filter(Boolean).join(' ')
	  }






	return (
		<div className="bg-black -mt-6" style={{gridColumn:"span 7", gridRowStart:"first", gridRowEnd:"second"}}>
			<span className="flex flex-col justify-center">
<iframe className="mx-auto mt-10" style={{border: 0, width: '350px', height: '670px'}}src="https://bandcamp.com/EmbeddedPlayer/album=3336405295/size=large/bgcol=333333/linkcol=e32c14/transparent=true/" seamless><a href="https://aylineartin.bandcamp.com/album/heaven-in-hell-3">Heaven In Hell by Ayline Artin</a></iframe>
<button className="w-52 mx-auto mb-4 bg-red text-black px-2 py-2 text-sm "><a href="https://aylineartin.bandcamp.com/album/heaven-in-hell-3">Pre-Order Digital Album</a></button>
		</span>
		</div>
	)
}