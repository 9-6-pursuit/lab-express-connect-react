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
  }, [index, navigate]);

  const handleDelete = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this log?"
    );
    if (confirmed) {
      axios
        .delete(`${API}/logs/${index}`)
        .then(() => {
          navigate(`/logs`);
        })
        .catch((e) => console.error(e));
    }
  };

  return (
    <article>
      <div className="card-container">
        <div className="card showCard">
          <h2 className="title">
            {logs.title} - By {logs.captainName}
          </h2>
          <p>{logs.post}</p>
          <p>
            <strong>Days since last crisis:</strong> {logs.daysSinceLastCrisis}
          </p>
        </div>
      </div>
      <div className="buttons">
        <div>
          {" "}
          <Link to={`/logs`}>
            <button className="button">Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/logs/${index}/edit`}>
            <button className="button">Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button className="button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}

export default LogDetails;