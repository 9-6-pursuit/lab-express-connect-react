import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;
function LogEditForm() {
const navigate = useNavigate();
  let { index } = useParams();

  const [log, setLog] = useState({
    captainName: "",  // Changed name to captainName
    title: "",  // Changed url to title
    post: "",  // Changed description to post
    mistakesWereMadeToday: false,  // Changed isFavorite to mistakesWereMadeToday
    // Make sure your API can handle these name changes
  });
  const updateLog = () => {
    axios
      .put(`${API}/logs/${index}`, log)
      .then((response) => {
        setLog(response.data);
        navigate(`/logs/${index}`);
      })
      .catch((c) => console.warn("catch", c));
  };



  const handleTextChange = (event) => {
    if(event.target.type === "checkbox"){
        setLog({ ...log, [event.target.id]: event.target.checked });
    }
    else{
        setLog({ ...log, [event.target.id]: event.target.value });
    }
};

  const handleCheckboxChange = () => {
    setLog({ ...log, isFavorite: !log.isFavorite });
  };
  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((response) => {
        setLog(response.data);
      })
      .catch((e) => console.error(e));
  }, [index]);
  const handleSubmit = (event) => {
    event.preventDefault();
    updateLog();
  };

  return (
    
    <div className="Edit">
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
          required
          value={log.title}
          placeholder="Title"
          onChange={handleTextChange}
        />
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          name="category"
          value={log.category}
          placeholder="educational, inspirational, ..."
          onChange={handleTextChange}
        />
        <label htmlFor="isFavorite">Favorite:</label>
        <input
          id="isFavorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.isFavorite}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={log.description}
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
        <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          name="post"
          value={log.post}
          onChange={handleTextChange}
          placeholder="Describe the log"
        />
        <br />
        <input type="submit" />
      </form>
      <Link to="/logs">
        <button>Back</button>
      </Link>

    </div>
  );
}

export default LogEditForm;



