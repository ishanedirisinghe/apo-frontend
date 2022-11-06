import React from 'react'
import BaseLayout from "./BaseLayout";

export default function TermsAndConditions() {
  return (
    <BaseLayout>
      <div className='bg-[#EAF5F9] pl-8 py-12'>
        <h1 className='text-4xl font-bold mb-1'>Terms and conditions</h1>
        <p className='text-1xl'>Please read these carefully</p>
      </div>

      <div className="w-4/6 p-8">
        <h4 className='text-md font-semibold mb-4'>To register an AusPassport account you need a valid email address and must accept the terms and conditions.</h4>
        <p className='mb-4'>The AusPassport account terms and conditions describe:</p>
        
        <ol className='list-decimal pl-10 mb-5 border-l-4 border-solid border-separate'>
          <li>Introduction</li>
          <li>Your responsibilities</li>
          <li>Our responsibilities</li>
          <li>How we will communicate with you</li>
          <li>Personal information and privacy</li>
          <li>General</li>
          <li>Definitions</li>
        </ol>

        <p className='mb-5'>Please review the AusPassport account <a href='https://online.passports.gov.au/Infiniti/Produce/wizard/e9a10018-4723-4884-bb3e-5613dc84cf02/' className='text-[#26689d] underline' rel="noreferrer" target="_blank">terms and conditions</a></p>
        <p className='mb-5'>Before agreeing to these terms and conditions, you must understand that the Australian Passports Act 2005  allows the Department of Foreign Affairs and Trade to collect, use and disclose your personal information for a number of purposes.</p>
        <p className='mb-5'>These include, but are not limited to, confirming your identity and citizenship details. Your personal information may also be used to investigate and prosecute any unauthorised use by you of your AusPassport account. In addition, the department may use any current and past information provided by you for testing, training, analytics and research purposes and to inform system design. This applies even if you never submit or if you withdraw your application.</p>
        <p className='mb-5'>If you object to your personal information being used for these other limited purposes, please call <strong>the Australian Passport Information Service (APIS) on 131 232.</strong></p>
      
        <input type='checkbox' id="terms" className='mr-2' />
        <label className='inline-block' for="terms">I accept the AusPassport account <a href='https://online.passports.gov.au/Infiniti/Produce/wizard/e9a10018-4723-4884-bb3e-5613dc84cf02/' className='text-[#26689d] underline' rel="noreferrer" target="_blank">terms and conditions.</a></label>

        <div className='w-full mt-5'>
          <button className="w-[170px] text-blue-500 text-xs font-semibold tracking-wide uppercase px-6 py-3 border-2 border-solid border-blue-500 rounded cursor-pointer">Next</button>
        </div>

      </div>
    </BaseLayout>
  )
}
