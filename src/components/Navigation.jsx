import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  const menuLinks = [
    {name: 'Terms And Conditions', link: ''},
    {name: 'Account Details', link: 'account-details'}
  ]
  return (
    <div className="flex flex-col pt-10 pl-10">
      <ul>
        {menuLinks.map(item => (
          <li className='py-3 border-b-2 border-solid border-[#808080]'><Link to={'/'+item.link} className="block underline text-[16px] text-[#999]">{item.name}</Link></li>    
        ))}
      </ul>
    </div>
  )
}
