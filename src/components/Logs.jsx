import axios from "axios";
import { useEffect, useState } from "react";
import Log from "./Log";

const API = process.env.REACT_APP_API_URL

function Logs() {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        axios.get(`${API}/logs`)
        .then((res) => setLogs(res.data))
        .catch((e) => console.log(e))
    },[])
//console.log(logs);
    return (
        <div className="logs">
            <section>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Captian Name</th>
                            <th>Title</th>
                        </tr>
                    </thead>
                    <tbody>
                        {logs.map((log, index) => <Log key={index} log={log} index={index} /> )}
                    </tbody>
                </table>
            </section>
        </div>
    )
}

export default Logs;