import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UserDetails() {

  const { userId } = useParams();


  const [userData, setUserData] = useState({})

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then(res => res.json())
      .then(data => setUserData(data));

  }, [])
  console.log(userData);

  return (
    <div className='h-screen'>
      <img className='w-1/6 mx-auto my-4' src={userData.image} alt="image" />
      <p> <span className='font-bold'>FirstName: </span>{userData.firstName}</p>
      <p><span className='font-bold'>Last Name:</span> {userData.lastName}</p>
      <p><span className='font-bold'>Email: </span>{userData.email}</p>
      <p><span className='font-bold'>Address: </span>{userData?.address?.address}</p>
      <p><span className='font-bold'>Company Name: </span>{userData?.company?.name}</p>
    </div>
  )
}

export default UserDetails