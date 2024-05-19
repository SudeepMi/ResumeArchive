import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='p-20 w-[50%] m-auto'>
        <div>CV Uploaded Sucssfully</div>
        <Link href={"/repo"}>Browse All Profiles</Link>
    </div>
  )
}

export default page