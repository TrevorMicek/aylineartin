import React from 'react'


import bg from '../../images/newImg/Assets/8_Footer/background_5.png'
import logo from '../../images/newImg/Assets/8_Footer/ayline.png'
import spotify from '../../images/newImg/Assets/8_Footer/spotify.png'
import insta from '../../images/newImg/Assets/8_Footer/IG.png'
import yt from '../../images/newImg/Assets/8_Footer/Youtube.png'
import fb from '../../images/newImg/Assets/8_Footer/FB.png'
const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'Product', href: '/product' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Partnerships', href: 'https://partners.websitesbytrevor.com/' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' }
    ],
    social: [
      {
        name: 'Spotify',
        href: '#',
        icon: (props) => (
          <img src={spotify} width="25px" height="25px" />
        ),
      },
      {
        name: 'Instagram',
        href: '#',
        icon: (props) => (
          <img src={insta} width="25px" height="25px" />
        ),
      },
      {
        name: 'Youtube',
        href: '#',
        icon: (props) => (
          <img src={yt} width="25px" height="25px" />
        ),
      },
      {
        name: 'Facebook',
        href: '#',
        icon: (props) => (
          <img src={fb} width="25px" height="25px" />
        ),
      }
    ],
  }

  export default function Footer() {
    return (
      <footer className="-mt-8" style={{gridColumn: 'span 5'}}>
        <img src={bg} className="absolute z-0 " />
        <div className="relative z-10 max-w-7xl mx-auto pt-8 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="flex flex-row justify-center items-center space-x-1">
          <div className="border-r-2 h-14">
          <img src={logo} width="175px" height="100px" className="pr-3" />
          </div>
          <div className="pt-3 flex justify-center items-center space-x-1 px-3">
            {navigation.social.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>

          <p style={{height:'3.5rem', lineHeight:'3.5rem'}} className="text-white text-xs my-auto border-l-2 pl-3">queen of rock and roll</p>

          </div>
        </div>
      </footer>
    )
  }