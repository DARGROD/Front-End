import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import MocionDataService from "../services/MocionService";
const EditMocion = props => {
    const { id } = useParams();
    let navigate = useNavigate();
    const initialPersonaState = {
        id: null,
        id_Mocion: "",
        texto: "",
        fecha: "",
    };
    const [currentPersona, setCurrentPersona] = useState(initialPersonaState);
    const [message, setMessage] = useState("");
    const getPersona = id => {
        MocionDataService.get(id)
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
        MocionDataService.update(currentPersona.id, currentPersona)
            .then(response => {
                console.log(response.data);
                setMessage("La moción fue actualizada");
            })
            .catch(e => {
                console.log(e);
            });
    };
    const deletePersona = () => {
        MocionDataService.remove(currentPersona.id)
            .then(response => {
                console.log(response.data);
                navigate("/mociones");
            })
            .catch(e => {
                console.log(e);
            });
    };
    return (
        <div>
            {currentPersona ? (
                <div className="edit-form">
                    <h4>Moción</h4>
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
                            <label htmlFor="id_Mocion">Identificador de la Moción</label>
                            <input
                                type="text"
                                className="form-control"
                                id="id_Mocion"
                                name="id_Mocion"
                                value={currentPersona.id_Mocion}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="texto">Texto</label>
                            <input
                                type="text"
                                className="form-control"
                                id="texto"
                                name="texto"
                                value={currentPersona.texto}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fecha">Fecha</label>
                            <input
                                type="text"
                                className="form-control"
                                id="fecha"
                                name="fecha"
                                value={currentPersona.fecha}
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
                    <p>Seleccione una moción...</p>
                </div>
            )}
        </div>
    );
};
export default EditMocion;