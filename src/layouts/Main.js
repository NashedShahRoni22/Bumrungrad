import React from 'react'
import { Outlet } from 'react-router-dom'
import AppBar from '../shared/AppBar/AppBar'

export default function Main() {
  return (
    <main>
        <AppBar/>
        <Outlet/>
    </main>
  )
}
