import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import TipoDataService from "../services/Tipo_MocionService";
const EditTipoMocion = props => {
    const { id } = useParams();
    let navigate = useNavigate();
    const initialPersonaState = {
        id: null,
        id_tipo_Mocion: "",
        descripcion: "",
    };
    const [currentPersona, setCurrentPersona] = useState(initialPersonaState);
    const [message, setMessage] = useState("");
    const getPersona = id => {
        TipoDataService.get(id)
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
        TipoDataService.update(currentPersona.id, currentPersona)
            .then(response => {
                console.log(response.data);
                setMessage("El tipo de moción fue actualizado");
            })
            .catch(e => {
                console.log(e);
            });
    };
    const deletePersona = () => {
        TipoDataService.remove(currentPersona.id)
            .then(response => {
                console.log(response.data);
                navigate("/tipo_mocion");
            })
            .catch(e => {
                console.log(e);
            });
    };
    return (
        <div>
            {currentPersona ? (
                <div className="edit-form">
                    <h4>Tipo de mocion</h4>
                    <form>
                        <div className="form-group">
                            <label htmlFor="id">Id moción</label>
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
                            <label htmlFor="id_tipo_Mocion">Id del tipo de Moción a modificar</label>
                            <input
                                type="text"
                                className="form-control"
                                id="id_tipo_Mocion"
                                name="id_tipo_Mocion"
                                value={currentPersona.id_tipo_Mocion}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="descripcion">Descripción</label>
                            <input
                                type="text"
                                className="form-control"
                                id="descripcion"
                                name="descripcion"
                                value={currentPersona.descripcion}
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
                    <p>Seleccione un tipo de moción...</p>
                </div>
            )}
        </div>
    );
};
export default EditTipoMocion;