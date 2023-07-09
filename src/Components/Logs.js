import { useState, useEffect } from "react";
import axios from "axios";
import Log from "./Log";
import Container from 'react-bootstrap/Container';

const API = process.env.REACT_APP_API_URL;

function Logs() {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        axios
        .get(`${API}/logs`)
        .then((response) => {
            setLogs(response.data)})
        .catch((e) => console.error("catch", e));
    }, []);

    return (
        <div className="Logs">
          <h1 >The Captain's Logs</h1>
            <Container>
              {logs.map((log, index) => {
                return <Log key={index} log={log} index={index} />;
              })}
            </Container>
      </div>
    )
  
}

export default Logs;
