import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import PMDataService from "../services/Persona_MocionService";
const EditPersonaMocion = props => {
    const { id } = useParams();
    let navigate = useNavigate();
    const initialPersonaState = {
        id: null,
        id_Persona_Mocion: "",
        id_persona:"",
        id_mocion:""
    };
    const [currentPersona, setCurrentPersona] = useState(initialPersonaState);
    const [message, setMessage] = useState("");
    const getPersona = id => {
        PMDataService.get(id)
            .then(response => {
                setCurrentPersona(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };
    useEffect(() => {
        if (id)
            getPersona(id);
    }, [id]);
    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentPersona({ ...currentPersona, [name]: value });
    };

    const updatePersona = () => {
        PMDataService.update(currentPersona.id, currentPersona)
            .then(response => {
                console.log(response.data);
                setMessage("La persona con moción fue actualizada");
            })
            .catch(e => {
                console.log(e);
            });
    };
    const deletePersona = () => {
        PMDataService.remove(currentPersona.id)
            .then(response => {
                console.log(response.data);
                navigate("/mociones_persona");
            })
            .catch(e => {
                console.log(e);
            });
    };
    return (
        <div>
            {currentPersona ? (
                <div className="edit-form">
                    <h4>Persona con Moción</h4>
                    <form>
                        <div className="form-group">
                            <label htmlFor="id">Id Moción</label>
                            <input
                                type="text"
                                className="form-control"
                                id="id"
                                name="id"
                                value={currentPersona.id}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="id_Persona_Mocion">Identificador de la persona con moción</label>
                            <input
                                type="text"
                                className="form-control"
                                id="id_Persona_Mocion"
                                name="id_Persona_Mocion"
                                value={currentPersona.id_Persona_Mocion}
                                onChange={handleInputChange}
                            />
                        </div>
                    </form>

                    <button className="btn btn-danger" onClick={deletePersona}>
                        Borrar
                    </button>
                    <button
                        type="submit"
                        className="btn btn-success"
                        onClick={updatePersona}
                    >
                        Actualizar
                    </button>
                    <p>{message}</p>
                </div>
            ) : (
                <div>
                    <br />
                    <p>Seleccione una persona con Moción...</p>
                </div>
            )}
        </div>
    );
};
export default EditPersonaMocion;