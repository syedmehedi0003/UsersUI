import Header from './Header'
import { Outlet } from 'react-router-dom'

function Home() {

 
  return (
    <div>
        <Outlet></Outlet>

     
    </div>
  )
}

export default Home