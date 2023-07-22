import React, { useState } from 'react'

const Ej4 = () => {
 
    const [tarea, setTarea] = useState([])
    const [input, setInput] = useState('')
    const handleChange = (ev) => {
        setInput( ev.target.value) 
        
        
    }
    const handleClick = () => {

        

            setTarea([...tarea, input])
            
            setInput('')
        
    
    }
    const handleKeyDown = (e) => {
        
        if(e.key === 'Enter'){

            setTarea([...tarea, input])
            
            setInput('')
        }
    }
  return (
    <>
    <h1>Tareas</h1>
    <input type="text" onChange={handleChange} onKeyDown={handleKeyDown} value={input}/>
    <button onClick={handleClick}>Agregar tarea</button>
    <ul>
       {
        tarea.map((tareas, index)=> 
        (<li key={index}> {tareas} </li>)
        )
       }
    </ul>

    </>
  )
}

export default Ej4