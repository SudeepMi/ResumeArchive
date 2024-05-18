"use client";
import { getCvs } from '@/services/firebase';
import React, { useEffect, useState } from 'react'
const Page = () => {
  const [data, setData] = useState([]);
  useEffect(()=>{
    getCvs().then(d=>setData(d));
  },[])

  return (
    <div className="px-5 py-5">
      <table className="table table-auto w-full" cellPadding={10} cellSpacing={10}>
        <thead className='border-b'>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Skills</th>
            <th>Experience</th>
            <th>CV/Resume</th>
            <th>Profile views</th>

          </tr>
        </thead>
        <tbody>
          {data.map((cv,key)=>{
            return <tr key={key}>
              <td>{cv.name}</td>
              <td>{cv.email}</td>
              <td className='flex gap-1 flex-wrap'>{cv.skills?.map((skill,key)=> key < 8 && <span className="px-2 py-1 text-sm bg-black text-white" key={skill}>{skill}</span>)}</td>
              <td>
              {cv.experience.length > 0 && <div className='grid gap-1 place-items-start'>
                            <div className='flex gap-1 flex-col flex-wrap'>
                                {cv.experience.map((res, key) => {
                                    return <div key={key} className=' border-b'>
                                        <p>{res.title}</p>
                                        <p>{res.location}</p>
                                    </div>
                                })}
                            </div>
                        </div>}
              </td>
              <td>
              <a href={cv.file} className='text-center'>
              <svg xmlns="http://www.w3.org/2000/svg" width={50} viewBox="0 0 24 24" fill="currentColor"><path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path></svg>
              </a>
              </td>
              <td>
                <h2>10</h2>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Page