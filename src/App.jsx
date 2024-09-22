import './index.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/userPages/Home'
import CreateProfile from './pages/userPages/CreateProfile'
import Profile from './pages/userPages/Profile'
import Templates from './pages/userPages/Templates'
import LandingNav from './components/LandingNav'
import Login from './pages/authPages/Login'
import Register from './pages/authPages/Register'
import LandingPage from './pages/authPages/LandingPage'
import EmployerRegister from './pages/authPages/EmployerRegister'
import LoginProtectedWrapper from './utils/ProtectedRoutes'
import RoleProtectedWrapper from './utils/RoleProtectedRoutes'
import UnprotectedWrapper from './utils/UnprotectedRoutes'


function App() {
  return (
    <>
    {JSON.parse(localStorage.getItem("token")) ?
    <Navbar/> 
    : <LandingNav/>}
   
  <Routes>
      <Route path={'/'} element={ <UnprotectedWrapper><LandingPage/></UnprotectedWrapper>   }/>
      <Route path={'/login'} element={ <UnprotectedWrapper><Login/></UnprotectedWrapper>  }/>
      <Route path={'/register'} element={  <UnprotectedWrapper><Register/></UnprotectedWrapper>  }/>
      <Route path={'/employerRegister'} element={ <UnprotectedWrapper><EmployerRegister/> </UnprotectedWrapper>  }/>

      {/* Login and User role Protected */}
      <Route path={'/home'} element={ 
         <LoginProtectedWrapper>
         <RoleProtectedWrapper allowedRoles={'user'}><Home/></RoleProtectedWrapper>  
         </LoginProtectedWrapper> }/>

      <Route path={'/create'} element={ <LoginProtectedWrapper>
         <RoleProtectedWrapper allowedRoles={'user'}><CreateProfile/></RoleProtectedWrapper>  
         </LoginProtectedWrapper> }/>
      <Route path={'/profile'} element={ <LoginProtectedWrapper>
         <RoleProtectedWrapper allowedRoles={'user'}><Profile/></RoleProtectedWrapper>  
         </LoginProtectedWrapper> }/>
      <Route path={'/template'} element={ <LoginProtectedWrapper>
         <RoleProtectedWrapper allowedRoles={'user'}><Templates/></RoleProtectedWrapper>  
         </LoginProtectedWrapper> }/>
  </Routes>
     

    </>
  
  )
}

export default App
