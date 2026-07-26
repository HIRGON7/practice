import React from 'react'

const Communitypage = async ({params}: {params: Promise<{slug: string}> }) => {
    const {slug}=await params;
   

  return (
    <div>
        <h1 className='text-6xl p-7 m-6'>COMMUNITY</h1>
        <h1 className='text-4xl p-4 m-6'>{slug}</h1>
        <h3>havent been made yet sowwwy</h3>
        
    </div>
  )
}

export default Communitypage