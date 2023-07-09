import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;


function LogEditForm() {
    const { index } = useParams();
    const navigate = useNavigate();
    
        const [log, setLog] = useState({
            "captainName": "",
            "title": "",
            "post": "",
            "mistakesWereMadeToday": false,
            "daysSinceLastCrisis": null
        });

    const updateLog = () => {
        axios
        .put(`${API}/logs/${index}`, log)
        .then((res) => {
            setLog(res.data)
            navigate(`/logs/${index}`)
        })
        .catch((e) => console.log(e))
    }

    const handleTextChange = (event) => {
        setLog({...log, [event.target.id] : [event.target.value]})
    }

    const handleCheckboxChange = () => {
        setLog({...log, mistakesWereMadeToday : !log.mistakesWereMadeToday})
    }

    useEffect(() => {
     axios
        .get(`${API}/logs/${index}`)
        .then((res) => setLog(res.data))
        .catch((e) => console.log(e))
    },[index]);

    const handleSubmit = (event) => {
        event.preventDefault();
        updateLog();
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
        <label htmlFor="post">Post:</label>
        <input
          id="post"
          type="text"
          name="post"
          value={log.post}
          placeholder="educational, inspirational, ..."
          onChange={handleTextChange}
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes:</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        <label htmlFor="daysSinceLastCrisis">DaysSinceLastCrisis:</label>
        <textarea
          id="daysSinceLastCrisis"
          name="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
          placeholder="Describe why you loged this site"
        />
        <br />

        <input type="submit" />
      </form>
      <Link to={`/logs/${index}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
    )
}

export default LogEditForm;