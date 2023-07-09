import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function LogDetails() {
  const [log, setLog] = useState([]);


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

  return (
    <article>
      <div className="details">
      <h1>{log.title} - By {log.captainName}</h1>
      <h3>{log.post}</h3>
      <p>Day since last crisis: {log.daysSinceLastCrisis}</p>
      </div>
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
