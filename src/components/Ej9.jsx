import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Card from "react-bootstrap/Card";
const Ej9 = () => {
  const arrayLS = JSON.parse(localStorage.getItem("paciente")) || [];
  const [datosArray, setDatosArray] = useState(arrayLS);
  const [datos, setDatos] = useState({
    id: 0,
    mascota: "",
    nombre: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });

  const handleChange = (ev) => {
    const { name, value } = ev.target;
    setDatos({ ...datos, [name]: value });
    
  };
  const enviarDatos = () => {
    if (
      !datos.mascota ||
      !datos.nombre ||
      !datos.fecha ||
      !datos.hora ||
      !datos.sintomas
    ) {
      alert("completa los datos");
    } else {
      setDatosArray([...datosArray, datos]);
      
        
    }
  };

  useEffect(() => {
    datosArray;
    localStorage.setItem("paciente", JSON.stringify(datosArray));
  }, [datosArray]);

  const borrarCita = (datos) => {
    let citaDeleted = datosArray.filter((cita) => cita !== datos);
    setDatosArray(citaDeleted);
  };
  return (
    <>
      <div className="container" style={{backgroundColor: ' #0a497b'}}>
        <Form className="row">
          <div className="col-4">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre de la mascota</Form.Label>
              <Form.Control
                type="text"
                name="mascota"
                onChange={handleChange}
                placeholder="Nombre de mascota"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                onChange={handleChange}
                placeholder="Ingrese su Nombre"
              />
            </Form.Group>
          </div>
          <div className="col-4">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                type="text"
                name="fecha"
                onChange={handleChange}
                placeholder="dd/mm/yyyy"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Hora</Form.Label>
              <Form.Control
                type="text"
                name="hora"
                onChange={handleChange}
                placeholder="hh:mm"
              />
            </Form.Group>
          </div>
          <div className="col-4">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Sintomas</Form.Label>
              <Form.Control
                type="text"
                name="sintomas"
                onChange={handleChange}
                placeholder="Ingrese los sintomas"
              />
            </Form.Group>

            <Button variant="primary" type="button" onClick={enviarDatos}>
              Enviar datos
            </Button>
          </div>
        </Form>
        <hr />
        <div className=" mx-1 row">
          <h1>Lista de citas</h1>
          {datosArray.map((datos) => (
            <Card className="mx-3" key={datos.id} style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Datos de su cita</Card.Title>
                <Card.Text>Mascota: {datos.mascota}</Card.Text>
                <Card.Text>Dueño: {datos.nombre}</Card.Text>
                <hr />
                <Card.Text>Fecha: {datos.fecha}</Card.Text>
                <Card.Text>Hora: {datos.hora}</Card.Text>
                <Card.Text>Sintomas: {datos.sintomas}</Card.Text>
                <Button variant="primary" onClick={() => borrarCita(datos)}>
                  Borrar
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default Ej9;
