import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Lista = (props) => {
  const { listaNoticias } = props;

  return (
    <>
      <div className="container-fluid">
        <div className=" col-lg-12">
          <div className="row mx-3">
            {listaNoticias.map((articulos, index) => (
              <Card className="mx-3 my-3" key={index} style={{ width: "18rem" }}>
                <Card.Img variant="top" src={articulos.urlToImage} />
                <Card.Body>
                  <Card.Title>{articulos.title}</Card.Title>
                  <Card.Text>{articulos.description}</Card.Text>
                  <Button href={articulos.url}>Ver Noticia completa</Button>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Lista;
