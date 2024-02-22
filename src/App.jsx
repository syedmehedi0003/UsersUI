
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Users from './Componenets/Users'
import UserDetails from './Componenets/UserDetails'
import Header from './Componenets/Header'
import Footer from './Componenets/Footer'


function App() {


  return (

    <div>

      <Header></Header>

      <Routes>
      <Route path="/" element={<Users />} >     </Route>
        <Route path="users" element={<Users />} >     </Route>
        <Route path="users/:userId" element={<UserDetails />}> </Route>
       
      </Routes>
<Footer></Footer>
    </div>

  )
}

export default App
