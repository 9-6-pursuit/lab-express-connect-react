import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import "../logs.css";

const API = process.env.REACT_APP_API_URL;

function LogEditForm() {
  const navigate = useNavigate();
  let { index } = useParams();

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
    setLog({ ...log, isFavorite: !log.isFavorite });
  };

  const updateLog = () => {
    axios
      .put(`${API}/logs/${index}`, log)
      .then((response) => {
        setLog(response.data);
        navigate(`/logs/${index}`);
      })
      .catch((c) => console.warn("catch", c));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateLog();
  };

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((response) => {
        setLog(response.data);
      })
      .catch((e) => console.error(e));
  }, [index, navigate]);

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit} className="edit-form">
        <div className="mb-2">
          <label htmlFor="captainName">Captain's Name:</label>
          <input
            className="form-control"
            id="captainName"
            value={log.captainName}
            type="text"
            onChange={handleTextChange}
            placeholder="Captain's Name"
            required
          />
        </div>
        <div className="mb-2">
          <label htmlFor="title">Title:</label>
          <input
            className="form-control"
            id="title"
            value={log.title}
            type="text"
            placeholder="title"
            onChange={handleTextChange}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="post">Post:</label>
          <textarea
            id="post"
            className="form-control"
            type="text"
            name="post"
            value={log.post}
            onChange={handleTextChange}
            placeholder="What happened today?"
          ></textarea>
        </div>
        <div className="mb-2">
          <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
          <input
            className="form-control"
            id="daysSinceLastCrisis"
            name="daysSinceLastCrisis"
            value={log.daysSinceLastCrisis}
            type="number"
            onChange={handleTextChange}
            placeholder="0"
          />
        </div>
        <div>
          <label htmlFor="mistakesWereMadeToday">
            Mistakes were made today:
          </label>
          <br />
          <input
            id="mistakesWereMadeToday"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={log.mistakesWereMadeToday}
            style={{ marginLeft: "30px" }}
          />
        </div>
        <br />
        <input className="submit" type="submit" />
      </form>
      <a href="/logs">
        <button className="backButton">Back</button>
      </a>
    </div>
  );
}

export default LogEditForm;
