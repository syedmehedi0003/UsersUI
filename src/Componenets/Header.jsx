import React from 'react';
import { Link } from 'react-router-dom';


function Header() {


  return (
    <div >
 
        <nav className='bg-slate-800 flex justify-center flex-col lg:flex-row text-white p-1'>
            <Link className="p-1 lg:font-bold" to="/users">All Users</Link>
        </nav>

    </div>


  )
}

export default Header;