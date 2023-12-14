import React from 'react'
import Login from '../pages/auth/Login'

export default function PrivateRoute({ children }) {
  const accessToken = localStorage.getItem('Access_Token')
  return accessToken ? children : <Login></Login>
}
