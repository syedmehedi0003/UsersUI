import Header from './Header'
import { Outlet } from 'react-router-dom'

function Home() {

 
  return (
    <div>

        <h2 className='lg:font-bold lg:tracking-wide flex justify-center mt-20 lg:pt-20 lg:tracking-widest'>Wellcome to out Users List</h2>
        <Outlet></Outlet>

     
    </div>
  )
}

export default Home