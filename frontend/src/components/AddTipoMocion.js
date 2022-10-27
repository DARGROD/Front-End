import React, { useState } from "react";
import TipoMDataService from "../services/Tipo_MocionService";
const AddTipoMocion = () => {
  const initialTipoMState = {
    id: null,
    id_tipo_Mocion: "",
    descripcion: "",
  };
  const [tipo, setTipoM] = useState(initialTipoMState);
  const [submitted, setSubmitted] = useState(false);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTipoM({ ...tipo, [name]: value });
  };
  const saveTipoM = () => {
    var data = {
      id_tipo_Mocion: tipo.id_tipo_Mocion,
      descripcion: tipo.descripcion,
    };
    TipoMDataService.create(data)
      .then((response) => {
        setTipoM({
          id_tipo_Mocion: response.data.id_tipo_Mocion,
          descripcion: response.data.descripcion,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const newTipoM = () => {
    setTipoM(initialTipoMState);
    setSubmitted(false);
  };
   return (
   <div className="submit-form">
      {submitted ? (
        <div>
          <h4>Almacenado Corretamente</h4>
          <button className="btn btn-success" onClick={newTipoM}>
            Agregar
          </button>
        </div>
      ) : (
        <div>
          <strong>Agregando un tipo de moción</strong>
           <br></br>
           <br></br>
          <div className="form-group">
            <label htmlFor="id_tipo_Mocion">Id Tipo Moción</label>
            <input
              type="text"
              className="form-control"
              id="id_tipo_Mocion"
              required
              value={tipo.id_tipo_Mocion}
              onChange={handleInputChange}
              name="id_tipo_Mocion"
            />
          </div>
          <div className="form-group">
            <label htmlFor="descripcion">Descripcion</label>
            <input
              type="text"
              className="form-control"
              id="descripcion"
              required
              value={tipo.descripcion}
              onChange={handleInputChange}
              name="descripcion"
            />
          </div>
          <button onClick={saveTipoM} className="btn btn-success">
            Enviar
          </button>
        </div>
      )}
      </div>
  ); 
}; 
export default AddTipoMocion;
