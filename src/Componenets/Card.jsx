import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';


function Card({user}){

  
  return (
    <div className="userStyle">
  
      <img src={user.image} alt="image" />
      <h2>First Name: {user.firstName}</h2>
      <h2>Last Name: {user.lastName}</h2>
      <h3>Email: {user.email}</h3>
      <h3>Address: {user.address.address}</h3>
      <h3>Company Name: {user.company.name}</h3>
   <button> <Link to={`/users/${user.id}`}>See More</Link></button>

{/* <button><Link to="/users/:userId" state={{ from: "occupation" }}>
  Next Step
</Link></button> */}

    </div>
  )
}

export default Card;