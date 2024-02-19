import React, { useEffect, useState } from 'react'
import Card from './Card';
import './Users.css'
// import UserDetails from './UserDetails';

function Users() {

  // const options = [{text: "select",value:"", id:0},{text: "name",value:"name", id:1},
  // {text: "email",value:"email", id:2},{text: "company",value:"company", id:3},
  
  // ];
  // Define state for the selected option
  const [selectedOption, setSelectedOption] = useState('');
  console.log(selectedOption);


  const [searchValue, setSearchValue] = useState("");

  const [users, setUsers] = useState([]);
  // console.log(users);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => setUsers(data.users));

  }, [])

  // Function to handle changes in the select input
  const handleChange = (event) => {

    setSelectedOption(event.target.value);
    if (selectedOption ==='') {
      setUsers(users);
      return;
    }
    let sortedData = [...users];
    // console.log(sortedData);

    // if(selectedOption === "name"){
    //  sortedData.sort((a,b) => {
    //   a.firstName > b.firstName ? 1 : -1
    //   })
    // }
    //   else if(selectedOption === "email"){
    //     sortedData.sort((a,b) => {
    //       a.email > b.email ? 1 : -1
    //     })
    //   }

    //   else if(selectedOption === "company"){
    //     sortedData.sort((a,b) => {
    //       a.company > b.company ? 1 : -1
    //     })
    //   }




    if (selectedOption === "firstName") {
      sortedData.sort((a, b) => a.firstName > b.firstName ? 1 : -1);
    }
    else if (selectedOption === "email") {
      sortedData.sort((a, b) => a.email > b.email ? 1 : -1);
    }
    else if (selectedOption === "company") {
      sortedData.sort((a, b) => a.company.name > b.company.name ? 1 : -1);
    }

    setUsers(sortedData);


  }




  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue == "") { return users }

    const filterSearch = users.filter((user) => user.firstName.toLowerCase().includes(searchValue))
    setUsers(filterSearch)


  }





  return (
    <div>

      <select value={selectedOption} onChange={handleChange}>
        {/* Default option */}
        <option>Select an option</option>
        {/* Other options */}
        {/* {options.map(option =>  <option key={option.id} value= {option.value} >{option.text}</option>)} */}
        <option value="firstName">Sort by Name</option>
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