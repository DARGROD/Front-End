import React, { useState, useEffect } from "react";
import PMocionDataService from "../services/Persona_MocionService";
import { Link } from "react-router-dom";
const PersonaMocionList = () => {
  const [Pmociones, setPMociones] = useState([]);
  const [currentPMocion, setCurrentPMocion] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    retrievePersonaMocion();
  }, []);

  const retrievePersonaMocion = () => {
    PMocionDataService.getAll()
      .then((response) => {
        setPMociones(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const refreshList = () => {
    retrievePersonaMocion();
    setCurrentPMocion(null);
    setCurrentIndex(-1);
  };
  const setActiveMocion = (Pmocion, index) => {
    setCurrentPMocion(Pmocion);
    setCurrentIndex(index);
  };

  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Lista de Personas con Mociones</h4>
        <ul className="list-group">
          {Pmociones &&
            Pmociones.map((Pmocion, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveMocion(Pmocion, index)}
                key={index}
              >
                {Pmocion.id}
              </li>
            ))}
        </ul>
      </div>
      <div className="col-md-6">
        {currentPMocion ? (
          <div>
            <h4>Personas y mociones</h4>
            <div>
              <label>
                <strong>id Persona Moción:</strong>
              </label>{" "}
              {currentPMocion.id_Persona_Mocion}
            </div>
            <div>
              <label>
                <strong>Persona: </strong>
              </label>{" "}
              {currentPMocion.persona.nombre}
            </div>
            <div>
              <label>
                <strong>Moción:</strong>
              </label>{" "}
              {currentPMocion.mocion.texto}
            </div>
            <Link to={"/EditPersonaMocion"} className="btn-success">
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Escoja una persona con moción...</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default PersonaMocionList;
