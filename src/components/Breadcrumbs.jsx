import React from 'react'
import { Link } from 'react-router-dom'

export default function Breadcrumbs() {
  return (
    <div className="flex justify-between py-5 px-2 md:px-10 bg-[#151E45]">
      <div className='order-first'>
        <ul>
          <li className='inline-block cursor-pointer text-[#61DAFF]'>
            <Link to="/" className='mr-2'>Home</Link>/
          </li>
          <li className='inline-block text-white'>
            <Link to="/" className='mx-2'>New user registration</Link>/
          </li>
          <li className='inline-block text-white'><span className='mx-2'>Terms and conditions</span></li>
        </ul>
      </div>
      <div className='order-last'>
      <Link to="/" className='text-white underline cursor-pointer'>Help</Link>
      </div>
    </div>
  )
}
