import React, { useState, useEffect } from "react";
import PersonaDataService from "../services/PersonaService";
import { Link } from "react-router-dom";
const PersonaList = () => {
  const [personas, setPersonas] = useState([]);
  const [currentPersona, setCurrentPersona] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    retrievePersonas();
  }, []);

  const retrievePersonas = () => {
    PersonaDataService.getAll()
      .then((response) => {
        setPersonas(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const refreshList = () => {
    retrievePersonas();
    setCurrentPersona(null);
    setCurrentIndex(-1);
  };
  const setActivePersona = (persona, index) => {
    setCurrentPersona(persona);
    setCurrentIndex(index);
  };

  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Lista de Personas</h4>
        <ul className="list-group">
          {personas &&
            personas.map((persona, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActivePersona(persona, index)}
                key={index}
              >
                {persona.id}
              </li>
            ))}
        </ul>
      </div>
      <div className="col-md-6">
        {currentPersona ? (
          <div>
            <h4>Persona</h4>
            <div>
              <label>
                <strong>Identificacion:</strong>
              </label>{" "}
              {currentPersona.identificacion}
            </div>
            <div>
              <label>
                <strong>Nombre:</strong>
              </label>{" "}
              {currentPersona.nombre}
            </div>
            <Link to={"/editpersonas"} className="btn-success">
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Escoja una persona...</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default PersonaList;
