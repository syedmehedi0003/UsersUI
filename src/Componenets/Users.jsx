import React, { useEffect, useState } from 'react'
import Card from './Card';
import './Users.css'


function Users() {

  // Define state for the selected option
  const [selectedValue, setSelectedValue] = useState("");
  // console.log(selectedOption);


  const [searchValue, setSearchValue] = useState("");

  const [users, setUsers] = useState([]);
  // console.log(users);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => setUsers(data.users));

  }, [])

// ______________________------------------------------------
  // Function to handle changes in the select input
  // const handleChange = (event) => {

  //   setSelectedOption(event.target.value);
  //   if (selectedOption ==='') {
  //     setUsers(users);
  //     return;
  //   }
  //   let sortedData = [...users];

  //   if (selectedOption === "firstName") {
  //     sortedData.sort((a, b) => a.firstName > b.firstName ? 1 : -1);
  //   }
  //   else if (selectedOption === "email") {
  //     sortedData.sort((a, b) => a.email > b.email ? 1 : -1);
  //   }
  //   else if (selectedOption === "company") {
  //     sortedData.sort((a, b) => a.company.name > b.company.name ? 1 : -1);
  //   }

  //   setUsers(sortedData);


  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue == "") { return users }

    const filterSearch = users.filter((user) => user.firstName.toLowerCase().includes(searchValue.toLowerCase()))
    setUsers(filterSearch)

  }

// ------------------------------------------------_________________


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


  // ______________________---------------------

  return (
    <div>

      <select value={selectedValue} onChange={handleChange}>
        {/* Default option */}
        <option value="">Select an option</option>
        {/* Other options */}
        {/* {options.map(option =>  <option key={option.id} value= {option.value} >{option.text}</option>)} */}
        <option value="name">Sort by Name</option>
        <option value="email">Sort by Emial</option>
        <option value="company">Sort by Company</option>
      </select>

      <form onSubmit={(e) => handleSubmit(e)}>

        <input type="search" onChange={(e) => setSearchValue(e.target.value)} />

        <input type="submit" />
      </form>
      <div className="users">




        {users.map(user =>
          <Card key={user.id} user={user}></Card>)}
      </div>
    </div>
  )
}

export default Users