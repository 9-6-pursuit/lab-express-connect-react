import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function LogDetails() {
  const [logs, setLogs] = useState([]);

  let { index } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((response) => {
        // console.log(response)
          setLogs(response.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  });

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
      <h3>Captain's Log</h3>
      <p>
        {logs.title} - By {logs.captainName}
      </p>
      <p>Post: {logs.post}</p>
      <p>
        {logs.mistakesWereMadeToday ? (
          <span>🚧🚧🚧 Mistakes were made today 🚧🚧🚧</span>
        ) : (
          <span>⭐⭐⭐ No mistakes today ⭐⭐⭐</span>
        )}
      </p>
      <p>Days since last crisis: {logs.daysSinceLastCrisis}</p>
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
  );
}

export default LogDetails;
