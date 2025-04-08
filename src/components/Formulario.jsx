import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Formulario = ({ tareas, setTareas }) => {
  const [tarea, setTarea] = useState("");

  const handleInput = (e) => {
    console.log(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaTarea = {
      id: 4,
      texto: "Estudiar documentación de React",
      completada: false,
    };
    setTareas([...tareas, nuevaTarea]);
  };

  return (
    <form action="" className="formulario-tareas" onSubmit={handleSubmit}>
      <input
        type="text"
        className="formulario-tareas__input"
        placeholder="Escribe la tarea"
        value={tarea}
        onChange={() => handleInput(e)}
      ></input>
      <button type="submit" className="formulario-tareas__btn">
        <FontAwesomeIcon
          icon={faPlusSquare}
          className="formulario-tareas__icono-btn"
        />
      </button>
    </form>
  );
};
