import React, { useState } from "react";
import "./styles.css";
import Corazon from "./Corazon";
import { corazones } from "./recursos/corazones.js";

export default function App() {
  const [listaCorazones, actualizadorListaCorazones] = useState(corazones);

  const manejadorClick = (corazonActual) => {
    console.log(corazonActual);

    let corazonesTransformados = listaCorazones.map((corazon) => {
      if (corazon.id === corazonActual.id) {
        return {
          id: corazonActual.id,
          roto: !corazonActual.roto
        };
      }
      return corazon;
    });

    actualizadorListaCorazones(corazonesTransformados);
  };

  const calcularCorazonesRotos = () => {
    let corazonesRotos = 0;
    listaCorazones.forEach((corazon) => {
      if (corazon.roto === true) {
        corazonesRotos = corazonesRotos + 1;
      }
    });
    return corazonesRotos;
  };

  const limpiarCorazones = () => {
    actualizadorListaCorazones(corazones);
  };

  return (
    <div>
      <h1>Hay {calcularCorazonesRotos()} corazones rotos</h1>
      <div className="App">
        {listaCorazones.map((corazon) => {
          return (
            <Corazon
              click={() => manejadorClick(corazon)}
              roto={corazon.roto}
              key={corazon.id}
            />
          );
        })}
      </div>
      <button className="btn" onClick={limpiarCorazones}>
        LIMPIAR CORAZONES
      </button>
    </div>
  );
}
