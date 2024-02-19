import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'

function UserDetails() {
  // const location = useLocation()
  // const {from} = location.state;

  const {userId} = useParams();
 

  const [userData, setUserData] = useState({})

  useEffect(()=>{
    fetch(`https://dummyjson.com/users/${userId}`)
    .then(res=>res.json())
    .then(data => setUserData(data));
  
  },[])
console.log(userData);

  return (
    <div>
        <img src={userData.image} alt="image" />
        <p>FirstName: {userData.firstName}</p>
        <p>Last Name: {userData.lastName}</p>
      <p>Email: {userData.email}</p>
      <p>Address: {userData?.address?.address}</p>
      <p>Company Name: {userData?.company?.name}</p>
    </div>
  )
}

export default UserDetails