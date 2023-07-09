import { useState, useEffect } from "react";
import axios from "axios";
import CaptainsLog from "./CaptainsLog";
import "../logs.css";

function Logs() {
  const [logs, setLogs] = useState([]);
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const result = async () => {
      // console.log("we hit useEffect!");
      const response = await axios.get(`${URL}/logs`);
      setLogs(response.data);
      //   console.log(response.data);
    };
    result()
  }, []);

  return (
    <div className="Log">
      <section className="d-flex justify-content-center align-items-center vh-10">
        <div className="card w-75">
          <div className="card-body">
            <table className="custom-table">
              <thead>
                <tr>
                  <th scope="col">Mistakes</th>
                  <th scope="col">Captain Name</th>
                  <th scope="col">See this log</th>
                </tr>
              </thead>
              <tbody>
                {logs.map((log, i) => {
                  return <CaptainsLog key={i} log={log} index={i} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Logs;
