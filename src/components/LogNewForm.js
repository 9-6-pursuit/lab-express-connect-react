import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const URL = process.env.REACT_APP_API_URL ;

export default function LogNewForm() {

  const navigate = useNavigate();

  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  const addLog = (newLog) => {
    axios
    .post(`${URL}/logs`, newLog)
    .then(
      () => {
        setLog()
        navigate(`/logs`)
      })
    .catch((eR) => console.error("catch", eR));
  };

  const handleTextChange = (event) => {
    console.log(event.target.value)
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addLog(log)
  };
    return (
        <div className="newform">
            <form onSubmit={handleSubmit}>
                <label htmlFor="captainName">Captain's Name:</label>
                <input
                id="captainName"
                value={log.captainName}
                type="text"
                onChange={handleTextChange}
                placeholder="Captain Name"
                required
                />
                <label htmlFor="title">Title:</label>
                <input
                id="title"
                type="text"
                required
                value={log.title}
                placeholder="Title"
                onChange={handleTextChange}
                />

                <label htmlFor="post">Post:</label>
                <textarea
                id="post"
                type="text"
                name="post"
                value={log.post}
                placeholder="Post"
                onChange={handleTextChange}
                />

                <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
                <input
                id="mistakesWereMadeToday"
                type="checkbox"
                onChange={handleCheckboxChange}
                checked={log.mistakesWereMadeToday}
                />

              <br />

                <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
                <input
                id="daysSinceLastCrisis"
                type="number"
                name="daysSinceLastCrisis"
                value={log.daysSinceLastCrisis}
                placeholder="Days Since Last Crisis"
                onChange={handleTextChange}
                />
                <br />
                <button className="btn btn-outline-secondary" type="submit"> Submit </button>
            </form>
        </div>
    )
}