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
      <h3>
        {logs.mistakesWereMadeToday ? <span>😔</span> : null} {logs.captainName}
      </h3>
      <h6>{logs.title}</h6>
      <p>{logs.post}</p>
      <p>{logs.daysSinceLastCrisis}</p>
      <div className="showNavigation">
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
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </article>
    )

  }

  export default LogDetails;