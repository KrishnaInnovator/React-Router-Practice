import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(()=> {
    //     fetch('https://api.github.com/users/KrishnaInnovator')
    //    .then(res=>res.json())
    //    .then(data =>{
    //     setData(data)
    //    })
       
    // })
  return (
    <div className='flex justify-center items-center p-4 '>
      <div className='text-center m-4 bg-gray-600 text-white p-12 text-3xl rounded-lg '>
          Github Followers:1000
      <img className='rounded-lg mt-2' src={data.avatar_url}  alt="Git Profile" width={300} />
     </div>
    </div>
  )
}

export default Github

export const gitHubInfoLoader=async()=>{
    const response= await fetch('https://api.github.com/users/KrishnaInnovator')
    return response.json()
}
