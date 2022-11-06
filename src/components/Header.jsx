import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/images/logo.png'
import PassportsLogo from '../assets/images/passports-logo.png'
import Breadcrumbs from './Breadcrumbs'


export default function Header() {
  return (
    <header className="top-0 z-50"> 
      <div className="flex py-5 px-2 md:px-10 bg-blue-900">  
        <div className="w-1/2 relative items-center h-10 lg:h-12 cursor-pointer my-auto">
          <Link to="/">
            <img src={Logo} alt="" className='h-[100%]' />
          </Link>
        </div>
        <div className="w-1/2 h-10 lg:h-12 flex items-center space-x-4 justify-end text-gray-500">
          <img src={PassportsLogo} alt="" className='h-[100%]' />
        </div>
      </div>  

      <Breadcrumbs />
    
    </header>
  )
}
