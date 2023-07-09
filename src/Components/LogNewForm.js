import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function LogNewForm() {
  const navigate = useNavigate();

  const [log, setLog] = useState({
    captainName: "", // updated the field name
    title: "", // added the title field
    entry: "", // added the entry field
    mistakesWereMadeToday: false, // added the checkbox field
  });

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${API}/logs`, log)
      .then(() => navigate(`/logs`))
      .catch(console.error);
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
          required
        />

        <label htmlFor="title">Title:</label>
        <input
          id="title"
          value={log.title}
          type="text"
          onChange={handleTextChange}
          required
        />

        <label htmlFor="entry">Log Entry:</label>
        <textarea
          id="entry"
          value={log.entry}
          onChange={handleTextChange}
          required
        />

        <label htmlFor="mistakesWereMadeToday">Mistakes were made today</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />

        <input type="submit" value="Create Log" />
      </form>
    </div>
  );
}

export default LogNewForm;
