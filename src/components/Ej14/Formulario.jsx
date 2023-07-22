import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import {  NavLink } from 'react-router-dom';
import Form from "react-bootstrap/Form";


const Formulario = () => {
  const receteroLS = JSON.parse(localStorage.getItem("recetero")) || [];
  const [arrayReceta, setArrayReceta] = useState(receteroLS);
  const [receta, setReceta] = useState({
    id: 1,
    nombre: "",
    descripcion: "",
  });

  const guardarReceta = (ev) => {
    const { name, value } = ev.target;
    setReceta({ ...receta, [name]: value });
  };
  const subirReceta = (e) => {
    e.preventDefault();
    if (!receta.nombre || !receta.descripcion) {
      alert("complete los datos");
    } else {
      setArrayReceta([...arrayReceta, receta]);
    }
    setReceta({ id: receta.id + 1, nombre: "", descripcion: "" });
  };
  useEffect(() => {
    localStorage.setItem("recetero", JSON.stringify(arrayReceta));
  }, [arrayReceta]);
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nombre de la receta</Form.Label>
          <Form.Control
            type="text"
            onChange={guardarReceta}
            name="nombre"
            placeholder="Ej: Tarta de verduras"
          />
        </Form.Group>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Descripcion de la receta"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            name="descripcion"
            onChange={guardarReceta}
            placeholder="Leave a comment here"
          />
        </FloatingLabel>

        <Button variant="primary" onClick={subirReceta} type="button">
          Guardar receta
        </Button>
      </Form>
      <hr />
      <NavLink to="/recetas" >
        Ver Recetas
      </NavLink>
      
    </>
  );
};

export default Formulario;
