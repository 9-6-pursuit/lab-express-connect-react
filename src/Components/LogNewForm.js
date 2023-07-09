import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function LogNewForm() {

  const navigate = useNavigate();
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    daysSinceLastCrisis: "",
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
        <label htmlFor="captainName"><strong>Captain's Name:</strong></label>
        <input
          id="captainName"
          type="text"
          onChange={handleTextChange}
          placeholder=""
          required
          value={log.captainName}
        />
        <br/>
        <label htmlFor="title"><strong>Title</strong></label>
        <input
          id="title"
          type="text"
          onChange={handleTextChange}
          placeholder=""
          required
          value={log.title}
        />
         <br/>
        <label htmlFor="post"><strong>Post:</strong></label>
        <textarea
          id="post"
          type="text"
          placeholder="What happened today ?"
          onChange={handleTextChange}
          value={log.post}
        />
         <br/>
        <label htmlFor="daysSinceLastCrisis"><strong>Day Since Last Crisis</strong></label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
          placeholder=""
        />
         <br/>
        <label htmlFor="mistakesWereMadeToday"><strong>Mistakes were made today:</strong></label>
        <input
          id="mistakesWereMadeToday"
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