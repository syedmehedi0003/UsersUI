// import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function Home() {

 
  return (
    <div>This is Home page
        <Header></Header>
        <Outlet></Outlet>

     
    </div>
  )
}

export default Home