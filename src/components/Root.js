import React from 'react'
import NavbarHead from '../componentSlices/NavbarHead'
import NavbarMain from '../componentSlices/NavbarMain'
import Footer from './Footer'
import Enqury from './Enqury'

import { Outlet } from 'react-router-dom'
const Root = () => {
  return (
    <div className='main-body'>
      
      <NavbarHead/>
      <NavbarMain/>
      <div>
      <Outlet/>
      </div>
      <Enqury/>
<Footer/>
     
    </div>
  )
}

export default Root
