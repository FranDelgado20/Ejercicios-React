import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Ej8 = () => {
    const [arrayDatos, setArrayDatos] =  useState([])
    const [datos, setDatos] = useState({
        correo:'',
        nombre:'',
        apellido:'',
        dni:''
    })
    const handleChange = (ev) => {
        const {name, value} = ev.target
        setDatos({... datos, [name] : value})
        
    }
    const enviarDatos = ( ) => {
        if(!datos.correo || !datos.nombre || !datos.apellido || !datos.dni) {
            alert('completa los campos faltantes')
        }else{
            setArrayDatos([...arrayDatos, datos])
            alert('datos subidos correctamente')
        }
    }

  return (
    <>
    <Form className='w-50'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='correo' onChange={handleChange} placeholder="Enter email" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" name='nombre' onChange={handleChange} placeholder="Ingrese su Nombre" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" name='apellido' onChange={handleChange} placeholder="Ingrese su Apellido" />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>DNI</Form.Label>
        <Form.Control type="number" name='dni' onChange={handleChange} placeholder="Ingrese su DNI" />
       
      </Form.Group>


      <Button variant="primary" type="button" onClick={enviarDatos}>
       Enviar datos
      </Button>
    </Form>
    </>
  )
}

export default Ej8