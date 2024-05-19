import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='p-20 w-[50%] m-auto'>
       <div className="bg-green-600 text-white p-20 flex flex-col gap-5 justify-center items-center">
        <h2 className='text-2xl'>CV Uploaded Successfully</h2>
        <Link href={"/repo"} className='underline text-xl'>Browse All Profiles</Link>
       </div>
    </div>
  )
}

export default page