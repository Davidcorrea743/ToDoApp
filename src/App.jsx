import { useState } from "react";
import "./App.css";
import { Formulario } from "./components/Formulario";
import { Header } from "./components/Header";

function App() {
  const initialState = [
    {
      id: 1,
      texto: "Sacar al perro",
      completada: true,
    },
    {
      id: 2,
      texto: "Limpiar la pc",
      completada: false,
    },
    {
      id: 3,
      texto: "Crear Curso",
      completada: false,
    },
  ];
  const [tareas, setTareas] = useState(initialState);

  console.log(tareas);

  return (
    <>
      <div className="contenedor">
        <Header />
        <Formulario tareas={tareas} setTareas={setTareas} />
      </div>
    </>
  );
}

export default App;
