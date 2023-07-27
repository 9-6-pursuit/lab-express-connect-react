import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LogNew() {
    const API = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: 0,
    });

    const handleTextChange = (event) => {
        setLog({ ...log, [event.target.id]: event.target.value });
    };

    const handleCheckboxChange = () => {
        setLog({...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
    };

    const addLog = (newLog) => {
        axios
        .post(`${API}/logs`, newLog)
        .then(() => {
            navigate("/logs");
        })
        .catch((c) => console.error("catch", c));
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        addLog(log);
        //call the addLog fxn with the log data as "log" and not "newLog" becayse the form data is stored as "log" via useState
    };
    
    return (
    <div className="edit">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Captain's Name:</label>
                <input
                    id="name"
                    value={log.captainName}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Enter captain's name"
                    required
                />
                <label htmlFor="title">Title:</label>
                <input
                    id="title"
                    value={log.title}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Enter the title of the log"
                    required
                />
                <label htmlFor="post">Post:</label>
                <input
                    id="post"
                    value={log.post}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="Enter post here"
                    required
                />
                <label htmlFor="crisis">Days Since Last Crisis</label>
                <input
                    id="crisis"
                    value={log.daysSinceLastCrisis}
                    type="number"
                    onChange={handleTextChange}
                    placeholder="Enter number of days since last crisis"
                    required
                />
                <label htmlFor="mistakes">Mistakes were made today?</label>
                <input 
                    id="mistakes"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={log.mistakesWereMadeToday}
                />
                {/* because this is a checkbox we can omit the value attribute */}

                <br />

                <input type="submit" />
            </form>
        </div>
    );
}