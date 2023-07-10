import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function LogDetails() {
  const [log, setLog] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  //SHOW
  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((response) => {
        setLog(response.data);
      })
      .catch(() => {
        navigate("/*");
      });
  }, [index, navigate]);

  //DELETE
  const handleDelete = () => {
    axios
      .delete(`${API}/logs/${index}`)
      .then(() => {
        navigate(`/logs`);
      })
      .catch((e) => console.error(e));
  };

  return (
    <article className="detailsCard">
      <div className="card">
        <h2>
          {log.title} - By {log.captainName}
        </h2>
        <p>{log.post}</p>
        <p>Days since last crisis: {log.daysSinceLastCrisis}</p>
      </div>
      <div className="navigationButton">
        <div>
          {" "}
          <Link to={`/logs`}>
            <button className=" btn btn-outline-secondary">Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/logs/${index}/edit`}>
            <button className="btn btn-outline-secondary">Edit</button>
          </Link>
        </div>
        <div>
          {" "}
          <button className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}
