import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function LogDetails() {
  const [log, setLog] = useState(null);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((response) => {
        setLog(response.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [index, navigate]);

  const handleDelete = () => {
    axios
      .delete(`${API}/logs/${index}`)
      .then(() => {
        navigate(`/logs`);
      })
      .catch((e) => console.error(e));
  };

  if (!log) {
    return <div>Loading...</div>;
  }

  return (
    <article>
      <h3>
        {log.isFavorite ? <span>⭐️</span> : null} {log.title} - By {log.captainName}
      </h3>
      <h5>
        <span>
          <a href={log.url}>{log.title}</a>
        </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href={log.url}>{log.url}</a> {/* New <a> tag here */}
      </h5>

      <h6>{log.category}</h6>
      <p>{log.post}</p>
      <p>Days since last crisis: {log.daysSinceLastCrisis}</p> {/* Ensure this property exists in your log object */}


  <div className="showNavigation">
    <div>
      <Link to={`/logs`}>
        <button>Back</button>
      </Link>
    </div>
    <div>
      <Link to={`/logs/${index}/edit`}>
        <button>Edit</button>
      </Link>
    </div>
    <div>
      <Link to="#"> {/* This is a placeholder link */}
        <button onClick={handleDelete}>Delete</button>
      </Link>
    </div>
  </div>

</article>
  );
}

export default LogDetails;

