
import { Route,  Routes } from 'react-router-dom'
import './App.css'
import Users from './Componenets/Users'
import Home from './Componenets/Home'
import UserDetails from './Componenets/UserDetails'


function App() {
 

  return (

<div>

<Routes>
        <Route path="/" element={ <Home/> } ></Route>
        <Route path="users" element={ <Users/> } >     </Route>
          <Route path="users/:userId" element={<UserDetails/>}> </Route>
    

</Routes>

</div>

  )
}

export default App
