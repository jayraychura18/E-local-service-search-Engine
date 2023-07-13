import React from 'react'
import { Outlet } from 'react-router-dom'
import Login1 from './components/Login1';


const useAuth = () => {
    var flag = localStorage.getItem("_id") ? true : false;
    return flag
}

const ProtectedRoutes = () => {
    const flag = useAuth()
  return (
    flag? <Outlet/> : <Login1/>
  )
}

export default ProtectedRoutes
