import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function LogNewForm() {

  const navigate = useNavigate();
  const [log, setLog] = useState({
    name: "",
    title: "",
    post: "",
    description: "",
    mistakesWereMadeToday: false,
  });

  const addLog = (newLog) => {
    axios
    .post(`${API}/logs`, newLog)
    .then(() => {
    navigate(`/logs`);
    })
    .catch((c) => console.error("catch", c));
   };

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addLog(log);
   };

  
  return (
    <div className="new">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Captain's Name:</label>
        <input
          id="name"
          type="text"
          onChange={handleTextChange}
          placeholder=""
          required
          value={log.captainName}
        />
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          onChange={handleTextChange}
          placeholder=""
          required
          value={log.title}
        />
        <label htmlFor="post">Post:</label>
        <input
          id="post"
          type="text"
          placeholder=""
          onChange={handleTextChange}
          value={log.post}
        />
        <label htmlFor="description">Day Since Last Crisis</label>
        <textarea
          id="crisis"
          type="number"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
          placeholder=""
        />
        <label htmlFor="mistakes">Mistakes were made today :</label>
        <input
          id="isFavorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default LogNewForm;