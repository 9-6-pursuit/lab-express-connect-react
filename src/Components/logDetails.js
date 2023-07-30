import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";


export default function LogDetails() {
  const [log, setLog] = useState({});
  const {index} = useParams();
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;
  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((response) => {
        setLog(response.data);
      }).catch((error) => { 
        console.warn("catch", error) 
        navigate("/not-found");
      });
  }, [index, navigate, API]);

  const deleteLog = () => {
    axios.delete(`${API}/logs/${index}`)
      .then(() => {
        navigate(`/logs`);
      },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c))
  }

  const handleDelete = () => {
    deleteLog();
  }

  return (
    <div className="Log">
      <div className="LogCard">
        <h1>Show</h1>
        <h2>
          {log.title} - By {log.captainName}
        </h2>
        <p>{log.post}</p>
        <p>Days since last crisis: {log.daysSinceLastCrisis}</p>
        <p>Mistakes made today: {log.mistakesWereMadeToday ? "Yes" : "No"}</p>
      </div>
      <Link to={`/logs`}>
        <button>Back</button>
      </Link>
      <Link to={`/logs/${index}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}