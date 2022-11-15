import React from 'react'
import Navbar from '../Components/Navbar'

function Venta() {
  return (
    <>
      <Navbar></Navbar>
      <div className='ventas'>
        <div className='ventas-container'>
          <h1>Ventas realizadas este mes</h1>
        </div>
        <div className='ventas-container'>
          <h1>Total vendido</h1>
        </div>
       
      </div>
      
    </>
    
  )
}

export default Venta