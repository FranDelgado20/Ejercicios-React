import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Card from 'react-bootstrap/Card';


const Ej10 = () => {
    const peliculasLS = JSON.parse(localStorage.getItem("peliculas")) || []

    const [peliculasArray, setPeliculasArray] = useState(peliculasLS)

   
    const [peliculaData, setPeliculaData] = useState({
      id:0,
        nombre:'',
        descripcion:'',
        genero:''
    })

    const handleChange = (ev) => {
        const {name, value} = ev.target
        setPeliculaData({...peliculaData, [name] : value })
        console.log(peliculaData)

    }
    const guardarDatos = () => {
        if(!peliculaData.nombre || !peliculaData.descripcion ){

            alert('complete los datos')
        }else{
            
            setPeliculasArray([...peliculasArray, peliculaData])
            peliculaData.id++
        }

    }

    useEffect(() => {
        localStorage.setItem("peliculas", JSON.stringify(peliculasArray))
    }, [peliculasArray])

    const borrarData = (id) => {
        const peliBorrada = peliculasArray.filter ((peli) => peli.id != id )
        setPeliculasArray(peliBorrada)
    }
  return (
    <>
    <div>
   
      <h1>Peliculas</h1>
      <hr />
      <Form className="w-50">
        <Form.Group className="mb-3">
          <Form.Label>Nombre de la pelicula</Form.Label>
          <Form.Control
            type="text"
            onChange={handleChange}
            name="nombre"
            placeholder="Ingrese el nombre de la pelicula"
          />
        </Form.Group>
        <FloatingLabel label="Ingrese la descripcion de la pelicula">
          <Form.Control
            onChange={handleChange}
            as="textarea"
            name="descripcion"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <Form.Select onChange={handleChange} name='genero' aria-label="Default select example">
      <option>Seleccione el genero</option>
      <option  value="Comedia">Comedia</option>
      <option value="Drama">Drama</option>
      <option  value="Infantil">Infantil</option>
    </Form.Select>

        <Button variant="primary" onClick={guardarDatos} type="button">
          Submit
        </Button>
      </Form>
           
    </div>
    <div>
        {
            peliculasArray.map((pelis) => 
            <Card key={pelis.id} style={{ width: '18rem' }}>
            
            <Card.Body>
              <Card.Title>{pelis.nombre}</Card.Title>
              <Card.Text>
               {pelis.descripcion}
              </Card.Text>
              <Card.Text>
               {pelis.genero}
              </Card.Text>
              <Button variant="primary" onClick={()=> borrarData(pelis.id)}>Borrar</Button>

            </Card.Body>
          </Card>
            )
        }
    </div>


    </>
  );
};

export default Ej10;
