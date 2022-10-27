import React, { useState, useEffect } from "react";
import TipoDataService from "../services/Tipo_MocionService";
import { Link } from "react-router-dom";
const TipoMocionList = () => {
  const [tipos, setTipos] = useState([]);
  const [currentTipo, setCurrentTipo] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    retrieveTipos();
  }, []);

  const retrieveTipos = () => {
    TipoDataService.getAll()
      .then((response) => {
        setTipos(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const refreshList = () => {
    retrieveTipos();
    setCurrentTipo(null);
    setCurrentIndex(-1);
  };
  const setActiveTipo = (tipo, index) => {
    setCurrentTipo(tipo);
    setCurrentIndex(index);
  };

  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Lista de Tipos de mociones</h4>
        <ul className="list-group">
          {tipos &&
            tipos.map((tipo, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveTipo(tipo, index)}
                key={index}
              >
                {tipo.id}
              </li>
            ))}
        </ul>
      </div>
      <div className="col-md-6">
        {currentTipo ? (
          <div>
            <h4>Tipo</h4>
            <div>
              <label>
                <strong>Id tipo de moción:</strong>
              </label>{" "}
              {currentTipo.id_tipo_Mocion}
            </div>
            <div>
              <label>
                <strong>Descripción:</strong>
              </label>{" "}
              {currentTipo.descripcion}
            </div>
            <Link to={"/Edit_tipo_mocion/"} className="btn-success">
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Escoja un tipo de moción...</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default TipoMocionList;
