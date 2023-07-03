import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function LogDetails() {
  const API = process.env.REACT_APP_API_URL;
  const [logs, setLogs] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((response) => {
        setLogs(response.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [index, navigate, API]);

  const handleDelete = () => {
    axios
      .delete(`${API}/logs/${index}`)
      .then(() => {
        navigate(`/logs`);
      })
      .catch((e) => console.error(e));
  };

    return (
      <article>
        <h1>Captain's Log</h1>
        <h1>Show</h1>
      <h6>{logs.title} - By {logs.captainName}</h6>
      <p>Post: {logs.post}</p>
      <p>Days since last crisis: {logs.daysSinceLastCrisis}</p>
      <p>Were Mistakes Made Today: {logs.mistakesWereMadeToday ? <span>😔</span> : null}</p>
      <div className="showNavigation">
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
        <div>
          {" "}
          <Link to={`/logs`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/logs/${index}/edit`}>
            <button>Edit</button>
          </Link>
        </div>

      </div>
    </article>
    )
  
  }
  
  export default LogDetails;
  