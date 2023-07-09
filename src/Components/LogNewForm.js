import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function LogNewForm() {
  const navigate = useNavigate();
  const [log, setlog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  const addLog = (log) => {
    axios
      .post(`${API}/logs`, log)
      .then(
      () => {
        navigate(`/logs`);
      })
      .catch((error) => console.error('Error:', error));
  };

  const handleInput = (event) => {
    let newLog = {
      captainName: log.captainName,
      title: log.title,
      post: log.post,
      mistakesWereMadeToday: log.mistakesWereMadeToday,
      daysSinceLastCrisis: log.daysSinceLastCrisis,
    };
    newLog[event.target.id] = event.target.value;
    setlog(newLog);
  };


  const handleCheckBox = () => {
    let newLog = {
      captainName: log.captainName,
      title: log.title,
      post: log.post,
      mistakesWereMadeToday: !log.mistakesWereMadeToday,
      daysSinceLastCrisis: log.daysSinceLastCrisis,
    };
    setlog(newLog);
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
          id="captainName"
          value={log.name}
          type="text"
          onChange={handleInput}
          placeholder="Captain Name"
          required
        />

        <label htmlFor="title">Title</label>
        <input
          id="title"
          value={log.title}
          onChange={handleInput}
          type="text"
          placeholder="Title"
          required
        />

        <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          value={log.post}
          onChange={handleInput}
          type="text"
          name="post"
          placeholder="Post"
          required
        />

        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis</label>
          <input
            id="daysSinceLastCrisis"
            value={log.daysSinceLastCrisis}
            onChange={handleInput}
            type="number"
            name="daysSinceLastCrisis"
            placeholder="Days Since Last Crisis"
            required
        />

        <div class="checkbox-container">
          <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
          <input
            id="mistakesWereMadeToday"
            checked={log.mistakesWereMadeToday}
            onChange={handleCheckBox}
            type="checkbox"
            required
          />
        </div>        
        <br/>

        <input type="submit" />
      </form>
    </div>
  );
}

export default LogNewForm;