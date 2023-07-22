import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CardComp from "./CardComp";
const Formulario = () => {
  const [infoClima, setInfoClima] = useState([]);
  const [dataClima, setDataClima] = useState({
    country: "AR",
    city: "San Miguel de Tucumán",
  });

  const guardarClima = (ev) => {
    const { name, value } = ev.target;
    setDataClima({ [name]: value });
    
  };
  const buscarClima = (e) => {
    if (!dataClima) {
      alert("Completa los campos");
    } else {
      e.preventDefault();
      api();
     
    }
  };
  const api = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${dataClima.city},${dataClima.country}&appid=babd57e6ae2909161282ac0fe42b440e&units=metric`
    );
    const data = await res.json();
    setInfoClima(data);
  };
  useEffect(() => {
    api();
  }, []);
  return (
    <>
      <Form className="w-50">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Ingrese El codigo de un pais</Form.Label>
          <Form.Control
            type="text"
            onChange={guardarClima}
           
            required
            name="coutry"
            placeholder="Ejemplo: AR = Argentina"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Ingrese una ciudad</Form.Label>
          <Form.Control
            type="text"
            name="city"
            onChange={guardarClima}
            required
            placeholder="Ejemplo: San Miguel de tucuman"
          />
        </Form.Group>

        <Button variant="primary" onClick={buscarClima} type="button">
          Buscar
        </Button>
      </Form>
      <hr />
      <div>
        <CardComp info={infoClima} />
      </div>
    </>
  );
};

export default Formulario;
