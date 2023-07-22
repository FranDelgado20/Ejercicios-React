import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from 'react-router-dom';

const Recetas = () => {
  const datosArray = JSON.parse(localStorage.getItem('recetero')) || [];
  console.log(datosArray);
  const [receta, setReceta] = useState(datosArray);

  const borrarReceta = (id) => {
    const recetaBorrada = receta.filter((receta) => receta.id !== id);
    setReceta(recetaBorrada);
  };

  useEffect(() => {
    localStorage.setItem('recetero', JSON.stringify(receta));
  }, [receta]);

  return (
    <>
      {receta.map((recetas) => (
        <Card key={recetas.id} style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{recetas.nombre}</Card.Title>
            <Card.Text>{recetas.descripcion}</Card.Text>
            <Button variant="primary" onClick={() => borrarReceta(recetas.id)}>
              Borrar receta
            </Button>
          </Card.Body>
        </Card>
      ))}
      <hr />
      <NavLink to={'/form'}> Agregar receta</NavLink>
    </>
  );
};

export default Recetas;
