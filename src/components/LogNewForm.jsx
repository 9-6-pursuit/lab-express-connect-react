import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function LogNewForm() {
    const navigate = useNavigate();
    const [log, setLog] = useState({
        captainName : "",
        title : "",
        mistakesWereMadeToday : false,
        daysSinceLastCrisis : null
    });

    const addNewLog = () => {
        axios
            .post(`${API}/logs`, log)
            .then(() => {
                navigate("/logs")
            })
            .catch((e) => console.log(e));
    }
    
    const handleTextChange = (event) => {
        setLog({...log, [event.target.id] : event.target.value});
    }

    const handleCheckboxChange = () => {
        setLog({...log, mistakesWereMadeToday : !log.mistakesWereMadeToday})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addNewLog();
    }
 return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Name:</label>
        <input
          id="captainName"
          value={log.captainName}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Captian"
          required
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          required
          value={log.title}
          placeholder="title"
          onChange={handleTextChange}
        />
        <label htmlFor="daysSinceLastCrisis">DaysSinceLastCrisis:</label>
        <input
          id="daysSinceLastCrisis"
          name="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
          
        />
        <br/>
        <label htmlFor="mistakesWereMadeToday">Mistakes:</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          type="text"
          name="post"
          value={log.post}
          placeholder="What's the issue ..."
          onChange={handleTextChange}
        />
        <input type="submit" />
      </form>
    </div>
 )
}

export default LogNewForm;