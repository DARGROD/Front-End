import React, { useState, useEffect } from "react";
import MocionService from "../services/MocionService";
import TipoMocionService from "../services/Tipo_MocionService";

const AddMocion = () => {
  const initialMocionState = {
    id: null,
    id_Mocion: "",
    texto: "",


  };
  const initialTipoMocion ={
    id:null,
  }
  const [mocion, setMocion] = useState(initialMocionState);
  const [submitted, setSubmitted] = useState(false);
  const [currentTipoMocion, setCurrentTipoMocion] = useState(initialTipoMocion);
  const [tipoMociones, settipoMociones] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMocion({ ...mocion, [name]: value });
  };
  const saveMocion = () => {
    var data = {
      id_Mocion: mocion.id_Mocion,
      id_tipo: currentTipoMocion.id,
      texto: mocion.texto,
    };
    MocionService.create(data,currentTipoMocion.id)
      .then((response) => {
        setMocion({
          id_Mocion: response.data.id_Mocion,
          id_tipo: response.data.id,
          texto: response.data.texto,        
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  let valores = tipoMociones.map((tipoMocion, index)=> {
    return (
    console.log(tipoMocion),
    <option key={index} value={tipoMocion.id}>
      
      
      {tipoMocion.id}
    </option>
    
    );
    
  },this);

  useEffect(() => {
    retrievetipoMociones();
  }, []);

  
  const handleInputChange2 = (event) => {
    const { name, value } = event.target;
    setCurrentTipoMocion({ ...currentTipoMocion, [name]: value });
  };
  const newMocion = () => {
    setMocion(initialMocionState);
    setSubmitted(false);
  };
  const retrievetipoMociones = () => {
    TipoMocionService.getAll()
      .then((response) => {
        settipoMociones(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>Almacenado Corretamente</h4>
          <button className="btn btn-success" onClick={newMocion}>
            Agregar
          </button>
        </div>
      ) : (
        <div>
          <strong>Agregando una moción</strong>
           <br></br>
           <br></br>
          <div className="form-group">
            <label htmlFor="id_Mocion">Id Mocion</label>
            <input
              type="text"
              className="form-control"
              id="id_Mocion"
              required
              value={mocion.id_Mocion}
              onChange={handleInputChange}
              name="id_Mocion"
            />
          </div>  
          <div className="form-group">
            <label htmlFor="texto">Texto</label>
            <input
              type="text"
              className="form-control"
              id="texto"
              required
              value={mocion.texto}
              onChange={handleInputChange}
              name="texto"
            />
          </div> 
          <div className="form-group"> 
              <label htmlFor="id">Tipo de Moción</label>
              <select name = "id" id="id" placeholder="seleccione una opcion"  onChange={handleInputChange2}>
              <option value= "0" >Elija</option>
                {valores}
              </select>
            </div>
          <button onClick={saveMocion} className="btn btn-success">
            Enviar
          </button>
        </div>
      )}
    </div>
  );
};
export default AddMocion;