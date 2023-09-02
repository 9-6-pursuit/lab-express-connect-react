import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Log from "./log";


export default function LogsIndex() {
  const [logs, setLogs] = useState([]);
  const API = process.env.REACT_APP_API_URL;
  useEffect(() => {
    axios
      .get(`${API}/logs`)
      .then((response) =>  setLogs(response.data))
      .catch((e) => console.error("catch",e));
  }, [API]);
  return (
    <div className="Logs">
      <h1>List of all the logs</h1>
      <section>
        <table>
          <thead>
            <tr>
              <th>Mistakes</th>
              <th>Captain Name</th>
              <th>See this log</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => {
              return <Log key={index} log={log} index={index} />;
            })}
          </tbody>
        </table>
      </section>
      {}
    </div>
  );
}