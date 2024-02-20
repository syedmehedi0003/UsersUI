import React from 'react';
import { Link } from 'react-router-dom';


function Card({user}){

  
  return (

    <div>
    <div className="border border-2 border-gray-500 rounded-md ">
  
      <img className='w-1/2 mx-auto my-4' src={user.image} alt="image" />
      {/* <h2>First Name: {user.firstName}</h2>
      <h2>Last Name: {user.lastName}</h2>
      <h3>Email: {user.email}</h3>
      <h3>Address: {user.address.address}</h3>
      <h3>Company Name: {user.company.name}</h3> */}

      <p> <span className='font-bold'>FirstName: </span>{user.firstName}</p>
      <p><span className='font-bold'>Last Name:</span> {user.lastName}</p>
      <p><span className='font-bold'>Email: </span>{user.email}</p>
      <p><span className='font-bold'>Address: </span>{user.address.address}</p>
      <p><span className='font-bold'>Company Name: </span>{user.company.name}</p>
   <button className='border border-3 border-blue-500 rounded-md p-1 my-2  hover:bg-red-500 text-white text-sm bg-indigo-500'> <Link to={`/users/${user.id}`}>See More</Link></button>


   </div>
    </div>
  )
}

export default Card;