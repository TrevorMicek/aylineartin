import React from 'react'

/* This example requires Tailwind CSS v2.0+ */
import boxTwo from '../../images/boxTwo.webp'
import boxThree from '../../images/boxThree.webp'
import boxFour from '../../images/boxFour.webp'
import boxFive from '../../images/boxFive.webp'
import boxSix from '../../images/boxSix.webp'

const features = [
  {
    name: 'Competitive exchange rates',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: boxTwo,
  },
  {
    name: 'No hidden fees',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: boxThree,
  },
  {
    name: 'Transfers are instant',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: boxFour,
  },
  {
    name: 'Mobile notifications',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: boxFive,
  },
]

export default function Example() {
  return (
    <div className="py-12 bg-white" style={{gridColumn:"span 7", gridRowStart:"first", gridRowEnd:"second"}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue font-semibold tracking-wide uppercase">UVC box</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to clean
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
            accusamus quisquam.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative flex items-center justify-center">
                <dt>
                  <div className="relative flex items-center justify-center w-screen rounded-md bg-blue text-white">
                    <img src={feature.icon} height="100px" width="100px" className="mt-6 h-42 w-11/12" aria-hidden="true" />
                  </div>

                </dt>

              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
