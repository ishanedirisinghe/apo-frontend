import React from 'react'
import NotificationBox from '../components/NotificationBox';
import BaseLayout from "./BaseLayout";

import { ExclamationCircleIcon } from '@heroicons/react/24/solid'

export default function AccountDetails() {
  const monthList = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  return (
    <BaseLayout>
      <div className='bg-[#EAF5F9] pl-8 py-12'>
        <h1 className='text-4xl font-bold'>Account details</h1>
      </div>

      <div className="w-4/6 p-8">
        <form>
          <div className='md:flex flex-col'>
            <div className='w-full mb-4'>
              <h4 className="text-1xl text-slate-900 font-bold">Email</h4>
              <NotificationBox />
            </div>
            <div className='w-full mb-4'>
              <label className="text-sm text-gray-500">Email Address <span>*</span></label>
              <input type="email" name="email" className="w-full h-12 text-sm flex items-center px-2 outline-0 rounded-[5px] border-2 border-solid border-gray-200" />
            </div>
            <div className='w-full mb-4'>
              <label className="text-sm text-gray-500">Confirm Email Address <span>*</span></label>
              <input type="email" name="confirm-email" className="w-full h-12 text-sm flex items-center px-2 outline-0 rounded-[5px] border-2 border-solid border-gray-200" />
            </div>
            <div className='w-full'>
              <h4 className="text-1xl text-slate-900 font-bold text-gray-500">Date Of Birth <span>*</span></h4>
            </div>
            <div className='w-full mb-4'>
              <div className='flex flex-row space-x-4'>
                <input type="number" name="date" className="w-[100px] h-12 text-sm flex items-center px-2 outline-0 rounded-[5px] border-2 border-solid border-gray-200" />
                <select className="w-[120px] uppercase outline-0 mr-4 pl-2 rounded-[5px] border-2 border-solid border-gray-200">
                  {monthList.map(item => (
                    <option value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <input type="number" name="year" className="w-[150px] h-12 text-sm flex items-center px-2 outline-0 rounded-[5px] border-2 border-solid border-gray-200" />
              </div>
            </div>
            <div className='w-full mb-4'>
              <h4 className="text-1xl text-slate-900 font-bold text-gray-500">Password <span>*</span></h4>
              
              <div>
                <div className='flex rounded border-4 border-solid border-[#00BFE9]'>
                  <div className='flex w-[80px] bg-[#00BFE9] items-center'>
                    <ExclamationCircleIcon className='text-white h-6 mx-auto' />
                  </div>
                  <div className='w-[100% - 80px] py-4 px-5'>
                    <h4 className='text-md font-bold'>What are the password rules?</h4>
                    <p className='mb-5'>Your password has to be at least 8 characters long. It can't have any blank spaces. It has to use characters from at least three of the following sets:</p>
                    <ul className='list-disc pl-10 mb-5'>
                      <li>Upper case letters A-Z</li>
                      <li>Lower case letters a-z</li>
                      <li>Numerals 0-9</li>
                      <li>Special characters #?!@$%^&*-</li>
                    </ul>
                    <p>Your password can't start with #.</p>
                  </div>
                </div>
              </div>
              
            </div>
            <div className='w-full mb-4'>
              <label className="text-sm text-gray-500">Password <span>*</span></label>
              <input type="password" name="password" className="w-full h-12 text-sm flex items-center px-2 outline-0 rounded-[5px] border-2 border-solid border-gray-200" />
            </div>
            <div className='w-full mb-4'>
              <label className="text-sm text-gray-500">Confirm Password <span>*</span></label>
              <input type="password" name="confirm-password" className="w-full h-12 text-sm flex items-center px-2 outline-0 rounded-[5px] border-2 border-solid border-gray-200" />
            </div>

            <div className='w-full mt-5'>
              <button className="w-[170px] text-blue-500 text-xs font-semibold tracking-wide uppercase px-6 py-3 border-2 border-solid border-blue-500 rounded cursor-pointer">Back</button>
            </div>

          </div>
        </form>
      </div>
    </BaseLayout>
  )
}
