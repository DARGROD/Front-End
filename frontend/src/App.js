import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import AddPersona from "./components/AddPersona";
import Persona from "./components/Persona";
import PersonaList from "./components/PersonaList";
import MocionList from "./components/MocionList";
import AddTipoMocion from "./components/AddTipoMocion";
import AddMocion from "./components/AddMocion";
import TipoMocionList from "./components/TipoMocionList";
import AddPersonaMocion from "./components/AddPersonaMocion";
import LogList from "./components/LogList";
import PersonaMocionList from "./components/PersonaMocionList";
import EditTipoMocion from "./components/EditTipoMocion";
import EditMocion from "./components/EditMocion";
import EditPersonaMocion from "./components/EditPersonaMocion";
function App() {
return(
<div>
<nav class="navbar navbar-expand navbar-dark bg-dark">
 <a href="/menu" className="navbar-brand">
Control de mociones
</a>
 </nav>
<br></br>
 <div className="navbar-nav mr-auto">
<strong>MANEJO DE PERSONAS</strong>
 <li className="nav-item">
 <Link to={"/add"} className="nav-link">
 Agregar Persona
 </Link>
 </li>
 <li className="nav-item">
 <Link to={"/personas"} className="nav-link">
 Lista de Personas
 </Link>
</li>
<br></br>
<br></br>
<strong>MANEJO DE MOCIONES</strong>
<li className="nav-item">
 <Link to={"/add_Tipo_Mocion"} className="nav-link">
 Agregar Tipo de Moción
 </Link>
 </li>

 <li className="nav-item">
 <Link to={"/tipomocionList"} className="nav-link">
 Lista de Tipos de mociones
 </Link>
</li>

 <li className="nav-item">
 <Link to={"/addMocion"} className="nav-link">
 Agregar Mocion
 </Link>
 </li>

<li className="nav-item">
 <Link to={"/mociones"} className="nav-link">
 Lista de Mociones
 </Link>
</li>
<br></br>
<br></br>
<strong>ASIGNACIÓN DE MOCIONES</strong>
<li className="nav-item">
 <Link to={"/addPersonaMocion"} className="nav-link">
 Agregar una moción a una persona
 </Link>
</li>
<li className="nav-item">
 <Link to={"/listPersonaMocion"} className="nav-link">
 Lista de Personas con mociones asignadas
 </Link>
</li>
<br></br>
<br></br>
<strong>LISTA DE LOGS</strong>
<li className="nav-item">
 <Link to={"/log"} className="nav-link">
 Lista Log
 </Link>
</li> 
<br></br>
<br></br>
<br></br>

 </div>

 <div className="container mt-3">
    <Routes>
    <Route path="/" element={<PersonaList/>} /> 
    <Route path="/personas" element={<PersonaList/>} />
    <Route path="/add" element={<AddPersona/>} />
    <Route path="/editpersonas" element={<Persona/>} />
    <Route path="/Edit_tipo_mocion" element={<EditTipoMocion/>} />
    <Route path="/EditMociones" element={<EditMocion/>} />
    <Route path="/EditPersonaMocion" element={<EditPersonaMocion/>} />
    <Route path="/mociones" element={<MocionList/>} />
    <Route path="/add_Tipo_Mocion" element={<AddTipoMocion/>} />
    <Route path="/addMocion" element={<AddMocion/>} />
    <Route path="/tipomocionList" element={<TipoMocionList/>} />
    <Route path="/addPersonaMocion" element={<AddPersonaMocion/>} />
    <Route path="/listPersonaMocion" element={<PersonaMocionList/>} />
    <Route path="/" element={<LogList/>} />
    <Route path="/log" element={<LogList/>} /> 
    </Routes> 
  </div> 

 </div>
);
}

export default App;

