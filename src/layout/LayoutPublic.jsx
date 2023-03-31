import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const LayoutPublic = () => {
  return (
    <>
    <Navbar />
    <main>
      <Outlet />
    </main>
    <fotter>Pie de página</fotter>
    </>
  )
}

export default LayoutPublic