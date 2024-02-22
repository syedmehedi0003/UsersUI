import React from 'react';
import { Link } from 'react-router-dom';


function Card({ user }) {
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   fetch('https://dummyjson.com/users')
  //     .then(res => res.json())
  //     .then(data => {
  //       setLoading(false)
  //       setUsers(data.users)
  //     });

  // }, [])

  return (

    <div>
      <div className="border border-2 border-gray-500 rounded-md bg-gray-200">
      {/* {
        loading ?
          <div>
            <p>Loading.....</p>
          </div> :
          <> */}
        <img className='w-1/4 mx-auto my-4 border border-2 border-gray-500 rounded-full p-2' src={user.image} alt="image" />
       
        <div className=' text-left pl-4 pb-3'>      
          <p className='hover:text-red-500  hover:underline'> <span className='font-bold'>Name: </span> <Link to={`/users/${user.id}`}>{user.firstName} {user.lastName}</Link></p>
          <p><span className='font-bold'>Email: </span>{user.email}</p>
          <p><span className='font-bold'>Address: </span>{user.address.address}</p>
          <p><span className='font-bold'>Company Name: </span>{user.company.name}</p></div>
          {/* </>

      } */}
      </div>
    </div>
  )
}

export default Card;