import React from 'react'
import { Poppins } from 'next/font/google'
import Link from 'next/link';
export const poppins = Poppins({ subsets: ["latin"], weight: ["100", "300", "600", "900"] });
const page = () => {
  return (
    <nav className='w-full flex p-4 border-b bg-slate-800 text-white'>
      <Link href={"/"} className='flex-1'>
        <h2 className={`${poppins.className} text-2xl font-bold tracking-wider`}>Resume<span className='text-orange-200'>Archive</span></h2>

      </Link>
      <div className='px-5'>
        <Link href={"/repo"}>Profiles</Link>
      </div>
      <div className='px-5'>
        <Link href={"https://github.com/SudeepMi/ResumeArchive/issues"} target="_blank">Contribute</Link>
      </div>
    </nav>
  )
}

export default page