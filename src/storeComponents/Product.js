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

			<div className=" mt-12 mb-20 w-72 mx-auto">





			{products &&
				products.map((product, i) => {
					const image = product.image
					return (

						<div className="">
			<div className="mx-auto overflow-hidden mb-10">
			  <h2 className="sr-only">Products</h2>
							{console.log(product)}
			  <div className=" border-2 border-gold rounded-md">

				  <div key={product.id} className="group relative">
					<div className="mx-auto rounded-lg overflow-hidden bg-gray-200 aspect-w-1 aspect-h-1 group-hover:opacity-75">
					{image ? (
								<img src={image} alt={`${product.title} product shot`} />
							) : 'no img'}
					</div>
					<div className="pt-10 pb-4 text-center">
					  <h3 className="text-sm mx-8 font-medium text-gray-200">
						<a href={product.href}>
						  <span aria-hidden="true" className="" />
						  {product.title}
						</a>
					  </h3>
					  <div className="mt-3 flex flex-col items-center">
						<p className="sr-only">{product.rating} out of 5 stars</p>
						<div className="flex items-center">
						<Reviews />
						</div>
						<p className="-mt-2 text-sm text-gray-200">104 reviews</p>
					  </div>
					  <p className="mt-4 text-base font-medium text-gray-200">{product.price}</p>
					  <button
								className="bg-gold mx-auto py-1 px-2 text-black text-base"

							>
								Buy Now
							</button>
					</div>

				  </div>


			  </div>
			</div>
		  </div>

					)
				})}
		</div>
		</div>
	)
}