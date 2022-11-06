import React from 'react'
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'


export default function NotificationBox() {
  return (
    <div>
      <div className='flex rounded border-4 border-solid border-[#00BFE9]'>
        <div className='flex w-[80px] bg-[#00BFE9] items-center'>
          <ExclamationCircleIcon className='text-white h-6 mx-auto' />
        </div>
        <div className='w-[100% - 80px] py-4 px-5'>
          <h4 className='text-md font-bold'>Your email address is your username</h4>
          <p>You can use your AusPassport account to create passport applications for yourself, your family members or anyone else.</p>
        </div>
      </div>
    </div>
  )
}