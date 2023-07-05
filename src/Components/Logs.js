import { useState, useEffect } from "react";
import axios from "axios";
import CaptainsLog from "./Captain's Log";

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
    result();
  }, []);
  return (
    <div className="CaptainsLog">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>See this Log</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, i) => {
              return <CaptainsLog key={i} log={log} index={i} />;
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Logs;
