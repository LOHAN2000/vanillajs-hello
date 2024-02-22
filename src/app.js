/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#boton-excusa").addEventListener("click", () => {
    document.querySelector("#excusa-generador").innerHTML = generadorExcusa();
  });
};

let generadorExcusa = () => {
  let pronombre = ["Tu", "Mi", "El", "Aquel"];
  let sujeto = ["Perro", "Gato", "Vecino", "Profesor"];
  let accion = ["se comió mi", "se robó mi", "rompió mi", "lanzó mi"];
  let objeto = ["Tarea", "Celular", "Llave", "Audifono"];
  let lugar = [
    "en el colegio.",
    "en el parque.",
    "en el concierto.",
    "en el avion."
  ];

  let pronombreIndex = Math.floor(Math.random() * 4);
  let sujetoIndex = Math.floor(Math.random() * 4);
  let accionIndex = Math.floor(Math.random() * 4);
  let objetoIndex = Math.floor(Math.random() * 4);
  let lugarIndex = Math.floor(Math.random() * 4);

  return (
    pronombre[pronombreIndex] +
    " " +
    sujeto[sujetoIndex] +
    " " +
    accion[accionIndex] +
    " " +
    objeto[objetoIndex] +
    " " +
    lugar[lugarIndex]
  );
};
