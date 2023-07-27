import { useState, useEffect } from "react";
import Log from "./Log";
import axios from "axios";

//BASE URL
//Start all variable names with REACT_APP_
const API = process.env.REACT_APP_API_URL;

//FUNCTION
export default function Logs() {
    //setLogs will update the state when their is a change in the log(s)
    const [logs, setLogs] = useState([]);

    //use useEffect to handle the data load and show AFTER the component has been mounted/loaded to the DOM
    //in other words we want to wait for the Logs component to load then we want to get the data to show on the page.
    useEffect(() => {
        axios.get(`${API}/logs`).then((response) =>
        setLogs(response.data))
        .catch((e) => console.error("catch", e));
    }, []);
    //once the request is complete, then what?
    //.then() takes 2 arguments. Both are callback fxns: the 1st one is executed when the promise is fulfilled (in this case, a sucessful response from the server). The 2nd is executed if the promise is rejected (there is some error with our fetch request). Instead, we can add a .catch() - this will be the final error handling of our fetch request.

    return (
        <div className="logs">
            <section>
                <table>
                    <thead>
                        <tr>
                            <th>Mistakes</th>
                            <th>Captain Name</th>
                            <th>See This Log</th>
                        </tr>
                    </thead>
                    <tbody>
                        {logs.map((log, index) => {
                            return <Log key={index} log={log} index={index} />;
                        })}
                    </tbody>
                </table>
            </section>
        </div>
    )
}