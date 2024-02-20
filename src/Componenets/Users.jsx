import React, { useEffect, useState } from 'react'
import Card from './Card';



function Users() {

  // Define state for the selected option
  const [selectedValue, setSelectedValue] = useState("");

  const [searchValue, setSearchValue] = useState("");

  const [users, setUsers] = useState([]);
  // console.log(users);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => setUsers(data.users));

  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue == "") { return users }

    const filterSearch = users.filter((user) => user.firstName.toLowerCase().includes(searchValue.toLowerCase()))
    setUsers(filterSearch)

  }


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
    <div>

      <select className='border-solid border-2 border-black-500 rounded mr-2 p-1 my-2' value={selectedValue} onChange={handleChange}>
        {/* Default option */}
        <option value="" className='cursor-pointer'>Select an option</option>
       
        <option value="name">Sort by Name</option>
        <option value="email">Sort by Emial</option>
        <option value="company">Sort by Company</option>
      </select>

      <form onSubmit={(e) => handleSubmit(e)}>

        <input className='border-solid border-2 border-sky-500 rounded mr-2 p-1 lg:w-80' type="search" onChange={(e) => setSearchValue(e.target.value)} />

        <input className='font-medium cursor-pointer'  type="submit" />
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3 mt-10 place-content-center">


        {users.map(user =>
          <Card key={user.id} user={user}></Card>)}
      </div>
    </div>
  )
}

export default Users