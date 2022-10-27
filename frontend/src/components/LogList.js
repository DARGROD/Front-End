import React, { useState, useEffect } from "react";
import LogDataService from "../services/LogService";
const LogList = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    retrievePersonas();
  }, []);

  const retrievePersonas = () => {
    LogDataService.getAll()
      .then((response) => {
        setLogs(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Lista de Logs</h4>
        <ul className="list-group">
          {logs &&
            logs.map((log, index) => (
              <li className={"list-group-item "} key={index}>
                {log.metodo}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
export default LogList;
