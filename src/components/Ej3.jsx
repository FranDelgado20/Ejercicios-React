import React, { useState } from 'react'
import Ejej3 from '../pages/Ejej3'

const Ej3 = ({texto}) => {
    const mensaje = 'hello my friend (from changed state)'
    const [msg, setMsg] = useState(texto)
    console.log(msg)
    const handleClick = () => {
        setMsg(mensaje)
        
    }
  return (
    <> 
    <h1>{msg}</h1>
    <button onClick={handleClick}>Mostrar</button>
    </>
  )
}

export default Ej3