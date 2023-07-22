import React, { useEffect, useState } from "react";
import Lista from "./Lista";
import Form from "react-bootstrap/Form";

const Formulario = () => {
  const [noticiasArray, setNoticiasArray] = useState([]);
  const [datoSelect, setDatoSelect] = useState("general");



  const selectDato = (ev) => {
    const { value } = ev.target;
    setDatoSelect(value);
  };

  const noticias = async () => {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?category=${datoSelect}&apiKey=8757d978c18642e4b389db7651989d28`
    );

    const data = await res.json();

    setNoticiasArray(data.articles);
    console.log(data);
  };
  useEffect(() => {
    noticias();
  }, [datoSelect]);
 

  return (
    <>
      <h1>Noticias</h1>
      <Form.Select aria-label="Default select example" onChange={selectDato}>
        <option value="general">Seleccione una categoria</option>
        <option value="business">Negocios</option>
        <option value="entertainment">Entretenimiento</option>
        <option value="health">Salud</option>
      </Form.Select>
      <Lista listaNoticias={noticiasArray} />
    </>
  );
};

export default Formulario;
