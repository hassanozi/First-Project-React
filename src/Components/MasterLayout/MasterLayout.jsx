import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'

export default function MasterLayout() {
  return (
    <div className='container-fluid vh-100'>
      <div className='row h-100'>
              
        <div className='col-md-2 border-end border-1 border-dark text-center bg-light'>
          <Sidebar />
        </div>
        
        <div className='col-md-10'>
          <Outlet /> 
        </div>

      </div>
    </div>
  )
}
