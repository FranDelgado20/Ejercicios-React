import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const CardComp = (props) => {
  const { info } = props;
  return (
    <Card style={{ width: "18rem" }}>
      {/* <Card.Img variant="top" className="img-fluid" src={` http://openweathermap.org/img/wn/${info.weather[0].icon}.png`} /> */}
      <Card.Body>
        <Card.Title>
          {info.name} | {info.sys?.country}
        </Card.Title>
        <hr />
        <h6>Clima en la ciudad</h6>
        <Card.Text>
          Temperatura:
          {info.main?.temp} °C
        </Card.Text>
        <Card.Text>Humedad: {info.main?.humidity}</Card.Text>
        <Card.Text>
          Mas detalles:
          {info?.weather ? info.weather[0].description : null},{" "}
          {info?.weather ? info.weather[0].main : null}
        </Card.Text>

        
      </Card.Body>
    </Card>
  );
};

export default CardComp;
