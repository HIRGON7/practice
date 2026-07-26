import React from 'react'



const UserPage = async ({params}: {params: Promise<{username: string}> }) => {
    const {username}=await params;
    

  return (<>
    <h1>Developer Profile</h1>
    <h2>{username}</h2>
    
    </>
  )
}

export default UserPage