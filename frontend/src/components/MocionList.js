import React, { useState, useEffect } from "react";
import MocionDataService from "../services/MocionService";
import { Link } from "react-router-dom";
const MocionList = () => {
  const [mociones, setMociones] = useState([]);
  const [currentMocion, setCurrentMocion] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    retrievePersonas();
  }, []);

  const retrievePersonas = () => {
    MocionDataService.getAll()
      .then((response) => {
        setMociones(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const refreshList = () => {
    retrievePersonas();
    setCurrentMocion(null);
    setCurrentIndex(-1);
  };
  const setActiveMocion = (mocion, index) => {
    setCurrentMocion(mocion);
    setCurrentIndex(index);
  };

  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Lista de Mociones</h4>
        <ul className="list-group">
          {mociones &&
            mociones.map((mocion, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveMocion(mocion, index)}
                key={index}
              >
                {mocion.id}
              </li>
            ))}
        </ul>
      </div>
      <div className="col-md-6">
        {currentMocion ? (
          <div>
            <h4>Mocion</h4>
            <div>
              <label>
                <strong>id_Mocion:</strong>
              </label>{" "}
              {currentMocion.id_Mocion}
            </div>
            <div>
              <label>
                <strong>Tipo de moción:</strong>
              </label>{" "}
              {currentMocion.id_tipo_Mocion.descripcion}
            </div>
            <div>
              <label>
                <strong>Texto:</strong>
              </label>{" "}
              {currentMocion.texto}
            </div>
            <div>
              <label>
                <strong>Fecha:</strong>
              </label>{" "}
              {currentMocion.fecha}
            </div>
            <Link to={"/EditMociones"} className="btn-success">
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Escoja una mocion...</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default MocionList;
