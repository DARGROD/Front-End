import React, { useState, useEffect } from "react";
import PersonaMocionService from "../services/Persona_MocionService";
import MocionService from "../services/MocionService";
import PesonaService from "../services/PersonaService";

/*const AddMocion = () => {
  const initialMocionState = {
    id: null,
    id_Mocion: "",
    texto: "",


  };*/
  const AddPersonaMocion = () => {
    const initialPersonaMocionState = {
        id: null,
        id_Persona_Mocion: "",
    };
    const initialMocionState = {
      id: null,
    };
  const initialPersonaState ={
    id:null,
  };

  /*const [mocion, setMocion] = useState(initialMocionState);
  const [submitted, setSubmitted] = useState(false);*/
  const [personaMocion, setPmocion] = useState(initialPersonaMocionState);
  const [submitted, setSubmitted] = useState(false);

  /*const [currentTipoMocion, setCurrentTipoMocion] = useState(initialTipoMocion);
  const [tipoMociones, settipoMociones] = useState([]);*/
  const [currentMocion, setCurrentMocion] = useState(initialMocionState);
  const [mociones, setMociones] = useState([]);
//-------------------------------------------------------
  const [currentPersona, setCurrentPersona] = useState(initialPersonaState);
  const [personas, setPersonas] = useState([]);


  /*const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMocion({ ...mocion, [name]: value });
  };*/
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPmocion({ ...personaMocion, [name]: value });
  };
  const savePMocion = () => {
    var data = {
        id_Persona_Mocion: personaMocion.id_Persona_Mocion,
        id_persona: currentPersona.id,
        id_mocion: currentMocion.id,
    };
    PersonaMocionService.create(data,currentPersona.id,currentMocion.id)
      .then((response) => {
        setPmocion({
          id_Persona_Mocion: response.data.id_Persona_Mocion,
          id_persona: response.data.id,
          id_mocion: response.data.id,        
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  /*const saveMocion = () => {
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
  };*/

  /*let valores = tipoMociones.map((tipoMocion, index)=> {
    return (
    console.log(tipoMocion),
    <option key={index} value={tipoMocion.id}>
      
      
      {tipoMocion.id}
    </option>
    
    );
  },this);*/
  let valores = mociones.map((mocio, index)=> {
    return (
    console.log(mocio),
    <option key={index} value={mocio.id}>
      
      
      {mocio.id}
    </option>
    
    );
  },this);
  let valores2 = personas.map((per, index)=> {
    return (
    console.log(per),
    <option key={index} value={per.id}>
      
      
      {per.id}
    </option>
    
    );
  },this);

/*  useEffect(() => {
    retrievetipoMociones();
  }, []);*/
  useEffect(() => {
    retrieveMociones();
  }, []);
  useEffect(() => {
    retrievePersonas();
  }, []);

  /*const handleInputChange2 = (event) => {
    const { name, value } = event.target;
    setCurrentTipoMocion({ ...currentTipoMocion, [name]: value });
  };*/
  const handleInputChange2 = (event) => {
    const { name, value } = event.target;
    setCurrentMocion({ ...currentMocion, [name]: value });
  };
  const handleInputChange3 = (event) => {
    const { name, value } = event.target;
    setCurrentPersona({ ...currentPersona, [name]: value });
  };

 /* const newMocion = () => {
    setMocion(initialMocionState);
    setSubmitted(false);
  };*/
  const newPMocion = () => {
    setPmocion(initialPersonaMocionState);
    setSubmitted(false);
  };

 /* const retrievetipoMociones = () => {
    TipoMocionService.getAll()
      .then((response) => {
        settipoMociones(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };*/
  const retrieveMociones = () => {
    MocionService.getAll()
      .then((response) => {
        setMociones(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const retrievePersonas = () => {
    PesonaService.getAll()
      .then((response) => {
        setPersonas(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  /*return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>Almacenado Corretamente</h4>
          <button className="btn btn-success" onClick={newPMocion}>
            Agregar
          </button>
        </div>
      ) : (
        <div>
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
          <button onClick={savePMocion} className="btn btn-success">
            Enviar
          </button>
        </div>
      )}
    </div>
  );*/
  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>Datos enviados</h4>
          <p>*Los datos serán almacenados si no incumple el límite de 5 mociones por persona y un mínimo de 3 personas por moción</p>
          <button className="btn btn-success" onClick={newPMocion}>
            Agregar
          </button>

        </div>
      ) : (
        <div>
           <strong>Asignando una moción a una persona</strong>
           <br></br>
           <br></br>
          <div className="form-group">
           

            <label htmlFor="id_Persona_Mocion">Id Persona Mocion</label>
            <input
              type="text"
              className="form-control"
              id="id_Persona_Mocion"
              required
              value={personaMocion.id_Persona_Mocion}
              onChange={handleInputChange}
              name="id_Persona_Mocion"
            />
          </div> 
          <div className="form-group"> 
              <label htmlFor="id">Persona</label>
              <select name = "id" id="id" placeholder="seleccione una opcion"  onChange={handleInputChange3}>
              <option value= "0" >Elija</option>
                {valores2}
              </select>
            </div>
          <div className="form-group"> 
              <label htmlFor="id">Moción</label>
              <select name = "id" id="id" placeholder="seleccione una opcion"  onChange={handleInputChange2}>
              <option value= "0" >Elija</option>
                {valores}
              </select>
            </div>
            
          <button onClick={savePMocion} className="btn btn-success">
            Enviar
          </button>
        </div>
      )}
    </div>
  );
};
export default AddPersonaMocion;