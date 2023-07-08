import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function LogsNewForm() {
  const navigate = useNavigate();
  const [log, setlog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: [],
  });
  const addlog = (newlog) => {
    axios
    .post(`${API}/logs`, newlog)
    .then(
    () => {
    navigate(`/logs`);
    })
    .catch((c) => console.error("catch", c));
   };
  const handleTextChange = (event) => {
    setlog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setlog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addlog();
  };
  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name:</label>
          <input
            id="captainName"
            value={log.captainName}
            type="text"
            onChange={handleTextChange}
            placeholder="Captain's Name"
            required
          />
        <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            value={log.title}
            placeholder="Title"
            onChange={handleTextChange}
          />
         <label htmlFor="post">Post:</label>
        <input
          id="post"
          type="text"
          name="post"
          value={log.post}
          placeholder="What happened today?"
          onChange={handleTextChange}
        />
        <label htmlFor="mistakesWereMadeToday">Days Since Last Crisis:</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />
        <label htmlFor="daysSinceLastCrisis">Mistakes Were made today:</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.daysSinceLastCrisis}
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default LogsNewForm;
