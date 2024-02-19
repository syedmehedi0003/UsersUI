import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
        <h2>Navbar</h2>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
        </nav>
    </div>
  )
}

export default Header;