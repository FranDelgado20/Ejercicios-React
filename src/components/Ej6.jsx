import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Ej6 = () => {
  const colorLS = JSON.parse(localStorage.getItem("colores")) || [];

  const [arrayColor, setArrayColor] = useState(colorLS);
  const [color, setColor] = useState("#000");
  const handleChange = (e) => {
    setColor(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setArrayColor([...arrayColor, color]);
    console.log(arrayColor);
  };
  useEffect(() => {
    localStorage.setItem("colores", JSON.stringify(arrayColor));
  }, [arrayColor]);

  const handleDelete = (color) => {
    let colorDeleted = arrayColor.filter((colores) => colores !== color);
    setArrayColor(colorDeleted);
  };
  return (
    <>
      <h2 className="text-center">Administrar colores</h2>
      <div className="container">
      <div className="col"> 
      <div className="row">

      <hr />
      {arrayColor.map((color) => (
        <Card className="mx-3 my-3" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Color : {color}</Card.Title>

            <div
              style={{
                backgroundColor: color,
                width: "100%",
                height: "100px",
                borderRadius: 10,
              }}
              ></div>

            <Button variant="primary" onClick={() => handleDelete(color)}>
              Borrar
            </Button>
          </Card.Body>
        </Card>
      ))}
      </div>
      </div>
      </div>
      <hr />
      
      <div className="ms-5 justify-content-center d-flex">
        <h6 className="me-5 ">
          Seleccione un color ➝
        </h6>
        <input
          onChange={handleChange}
          type="color"
          className="form-control-color "
          name=""
          id=""
        />
        <button className="btn ms-5 btn-primary" onClick={handleClick}>
          Guardar
        </button>
      </div>
    </>
  );
};

export default Ej6;
