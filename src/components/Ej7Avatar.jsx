import React from 'react'
import { empleadosArray } from '../data/empleados'
const Ej7Avatar = (props) => {
    const {img} = props
    

  return (
    <>
   <img src={img} className='img-fluid' alt="" />
    </>
  )
}

export default Ej7Avatar