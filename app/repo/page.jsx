import React from 'react'
import List from '@/components/List/page'
import { getCvs } from '@/services/firebase'
const page = async () => {
    const data = await getCvs();
  return (
    <div>
        <List data={data} />
    </div>
  )
}

export default page