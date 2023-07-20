import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function LogDetails() {
    const [log, setLog] = useState([]);
    let { index } = useParams();
    let navigate = useNavigate();
    const API = process.env.REACT_APP_API_URL;

    useEffect(() => {
        axios
            .get(`${API}/logs/${index}`)
            .then((response) => {
                setLog(response.data);
            })
            .catch(() => {
                navigate("/not-found");
            })
    }, [index, navigate, API]);
    const deleteLog = () => {
        axios
            .delete(`${API}/logs/${index}`)
            .then(() => {
                navigate(`/logs`);
            })
            .catch((c) => console.warn("catch", c));
    }
    
    const handleDelete = () => {
        deleteLog();
    };
    
    return (
        <>
        <article className="container log-details">
          <h3>
            {log.mistakesWereMadeToday ? <span>💥</span> : null} {log.title} - By{" "}
            {log.captainName}
          </h3>
          <h5>{log.post}</h5>
          <h6>
            <span>Days since last crisis: </span>
            {log.daysSinceLastCrisis}
          </h6>
          <p>{log.description}</p>
        </article>
        <div className="showNavigation">
          <div>
            <Link to={`/logs`}>
              {" "}
              <button>Back</button>
            </Link>
          </div>
  
          <div>
            <Link to={`/logs/${index}/edit`}>
              {" "}
              <button>Edit</button>
            </Link>
          </div>
          <div>
            {" "}
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      </>
    )
};

export default LogDetails;