import React from 'react'
import { empleadosArray } from '../data/empleados'
import Ej7Avatar from './Ej7Avatar'
const Ej7Empleados = () => {
  return (
    <> 
   {
    empleadosArray.map ((empleados) => 
    <div className="col-12">
        <div className="row">
            <div className="col-lg-2">
                <Ej7Avatar  img={empleados.pic} />
            </div>
            <div className="col">
                {empleados.fullName} {empleados.title} {empleados.department}
            </div>
        </div>
    </div>
    )

   }
    </>
  )
}

export default Ej7Empleados