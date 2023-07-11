import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewLogForm() {
  const navigate = useNavigate();
  const URL = process.env.REACT_APP_API_URL;

  const [logs, setLogs] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  const handleTextChange = (event) => {
    setLogs({ ...logs, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLogs({ ...logs, mistakesWereMadeToday: !logs.mistakesWereMadeToday });
  };

  useEffect(() => {
    axios
      .get(`${URL}/logs`)
      .then((response) => {
        const {
          captainName,
          title,
          post,
          mistakesWereMadeToday,
          daysSinceLastCrisis,
        } = response.data;
        setLogs({
          captainName: captainName || "",
          title: title || "",
          post: post || "",
          mistakesWereMadeToday: mistakesWereMadeToday || false,
          daysSinceLastCrisis: daysSinceLastCrisis || 0,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [URL]);
  // PUT AND POST HAS A REQ.BODY, WHAT TO REPLACE W/OR MAKE NEW
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${URL}/logs`, logs).then(() => {
      navigate("/logs");
    });
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit} className="new-form">
        <label htmlFor="captainName" className="label">
          Captain's Name:
        </label>
        <input
          id="captainName"
          value={logs.captainName}
          type="text"
          onChange={handleTextChange}
          placeholder="Captain's Name"
          required
        />
        <label htmlFor="title" className="label">
          Title:
        </label>
        <input
          id="title"
          type="text"
          value={logs.title}
          placeholder="Title"
          onChange={handleTextChange}
        />
        <label htmlFor="post" className="label">
          Post:
        </label>
        <textarea
          id="post"
          type="text"
          value={logs.post}
          placeholder="Write what happened today"
          onChange={handleTextChange}
        />
        <label htmlFor="daysSinceLastCrisis" className="label">
          Days Since Last Crisis:
        </label>
        <input
          id="daysSinceLastCrisis"
          name="daysSinceLastCrisis"
          type="number"
          value={logs.daysSinceLastCrisis}
          onChange={handleTextChange}
          placeholder="0"
        />
        <label htmlFor="mistakesWereMadeToday" className="label">
          Mistakes were made today:
        </label>
        <br />
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={logs.mistakesWereMadeToday}
        />
        <br />
        <button className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default NewLogForm;