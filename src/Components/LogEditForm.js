import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function LogEditForm() {
    let { index } = useParams();

    const [ log, setLog ] = useState ({
        captainName: '',
        title: "",
        post: "",
        mistakesWereMadeToday: true,
        daysSinceLastCrisis: 0
});

const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  useEffect(() => {
    axios
    .get(`${API}/logs/${index}`)
    .then((response) => setLog(response.data))
    .catch((e) => console.error("catch", e));
}, [])

const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Captain's Name:</label>
        <input
          id="name"
          type="text"
          value={log.captainName}
          onChange={handleTextChange}
          required
        />

        <label htmlFor="url">Title</label>
        <input
          id="title"
          type="text"
          required
          value={log.title}
          onChange={handleTextChange}
        />

        <label htmlFor="post">Post:</label>
        <input
          id="post"
          type="text"
          name="post"
          value={log.post}
          onChange={handleTextChange}
        />

        <label htmlFor="daysSinceLastCrisis">Days since Last Crisis:</label>
        <textarea
          id="daysSinceLastCrisis"
          name="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
          placeholder="Describe why you loged this site"
        />

        <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
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
  )
}

export default LogEditForm