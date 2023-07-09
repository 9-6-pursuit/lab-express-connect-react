import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";    
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function LogEditForm() {
  let { index } = useParams();
  const navigate = useNavigate();
  const [log, setlog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });


  const update = () => {
    axios
      .put(`${API}/logs/${index}`, log)
      .then((response) => {
        setlog(response.data);
        navigate(`/logs/${index}`);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
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

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((response) => {
        setlog(response.data);
      })
      .catch((error) => console.error('Error:', error));
  }, [index]);

  const handleSubmit = (event) => {
    event.preventDefault();
    update();
  };

  

  return (
    <div className="edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="captainName">Captain's Name:</label>
        <input
          id="captainName"
          value={log.captainName}
          onChange={handleInput}
          type="text"
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

        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
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

        <div className="button-container">
          <input type="submit" />
          <Link to={`/logs/`}><button>Back</button></Link>
        </div>

        {/* <input type="submit" /> */}
      </form>
      
      {/* <Link to={`/logs/`}><button>Back</button></Link>       */}
    </div>
  );
}

export default LogEditForm;