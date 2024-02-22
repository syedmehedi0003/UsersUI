import React, { useEffect, useState } from 'react'
import Card from './Card';



function Users() {

  // Define state for the selected option
  const [selectedValue, setSelectedValue] = useState("");

  const [searchValue, setSearchValue] = useState("");

  const [users, setUsers] = useState([]);


  const [originalUsers, setOriginalUsers] = useState([]);

  const [searchMessage, setSearchMessage] = useState("");

  // console.log(users);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setUsers(data.users);
        setOriginalUsers(data.users);
      });

  }, [])



  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchValue(value);

    if (value === "") {
      setUsers(originalUsers);
      setSearchMessage("");
    } else {
      const filterSearch = originalUsers.filter((user) =>
        user.firstName.toLowerCase().includes(value.toLowerCase())
      );

      setUsers(filterSearch);

      // Set search message if no matches found
      if (filterSearch.length === 0) {
        setSearchMessage("Sorry, No matching users found.");
      } else {
        setSearchMessage("");
      }
    }
  };


  useEffect(() => {
    let sortedData = [...users]; // Initialize sortedData with a copy of the original users array

    if (selectedValue === "name") {
      sortedData.sort((a, b) => (a.firstName > b.firstName ? 1 : -1));
    } else if (selectedValue === "email") {
      sortedData.sort((a, b) => (a.email > b.email ? 1 : -1));
    } else if (selectedValue === "company") {
      sortedData.sort((a, b) =>
        a.company.address.address > b.company.address.address ? 1 : -1
      );
    }

    // Update the state with the sorted data
    setUsers(sortedData);
  }, [selectedValue]);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };



  return (
    <div className='p-2'>
      {
        loading ?
          <div>
            <p>Loading.....</p>
          </div> :
          <>
            <div className='lg:flex lg:justify-between'>

              <div>
                <form onSubmit={(e) => handleSubmit(e)} className='p-1'>

                  <input className='border-solid border-2 border-sky-500 rounded mr-2 p-1 lg:w-80' placeholder=" Search "
                    type="search" value={searchValue}
                onChange={handleSearch} />

                
                </form>
              </div>

              <div> <select className='border-solid border-2 border-sky-500 rounded mr-2 p-1 my-2 lg:w-80' value={selectedValue} onChange={handleChange}>
                {/* Default option */}
                <option value="" className='cursor-pointer'>Select an option</option>

                <option value="name">Sort by Name</option>
                <option value="email">Sort by Emial</option>
                <option value="company">Sort by Company</option>
              </select></div>

            </div>
            {searchMessage.length > 0 && <p className='text-red-500 font-bold'>{searchMessage}</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 mt-10 place-content-center">
         

              {users.map(user =>
                <Card key={user.id} user={user}></Card>)}
            </div>
          </>
      }


    </div>
  )
}

export default Users