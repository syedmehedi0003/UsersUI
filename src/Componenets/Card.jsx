import React from 'react';
import { Link } from 'react-router-dom';


function Card({user}){

  
  return (

    <div>
    <div className="border border-2 border-gray-500 rounded-md ">
  
      <img className='w-1/2 mx-auto my-4' src={user.image} alt="image" />
      <h2>First Name: {user.firstName}</h2>
      <h2>Last Name: {user.lastName}</h2>
      <h3>Email: {user.email}</h3>
      <h3>Address: {user.address.address}</h3>
      <h3>Company Name: {user.company.name}</h3>
   <button className='border border-3 border-blue-500 rounded-md p-1 my-2  hover:bg-red-500 text-white text-sm bg-indigo-500'> <Link to={`/users/${user.id}`}>See More</Link></button>


   </div>
    </div>
  )
}

export default Card;