import React from 'react'
import { Poppins } from 'next/font/google'
export const poppins = Poppins({subsets:["latin"], weight:["100","300","600","900"]});
const page = () => {
  return (
    <nav className='w-full flex p-4 border-b bg-slate-800 text-white'>
        <h2 className={`${poppins.className} text-2xl font-bold tracking-wider`}>Resume<span className='text-orange-200'>Archive</span></h2>
    </nav>
  )
}

export default page