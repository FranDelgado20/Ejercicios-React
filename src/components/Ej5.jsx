import React, { useEffect, useState } from "react";

const Ej5 = () => {
  const [tarea, setTarea] = useState([]);
  const [input, setInput] = useState("");
  const handleChange = (ev) => {
    setInput(ev.target.value);
  };
  const handleClick = () => {
    setTarea([...tarea, input]);

    setInput("");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setTarea([...tarea, input]);

      setInput("");
    }
  };

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tarea));
  }, [tarea]);
  return (
    <>
      <div className="w-50 ">
        <h1 className="text-center">Tareas</h1>
      </div>
      <div className="d-flex ms-5">
        <input
          className="form-control w-25"
          type="text"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={input}
        />
        <button className="btn btn-outline-success ms-5" onClick={handleClick}>
          Agregar tarea
        </button>
      </div>
      <ul className="ms-5 my-3">
        {tarea.map((tareas, index) => (
          <li key={index}> {tareas} </li>
        ))}
      </ul>
    </>
  );
};

export default Ej5;
