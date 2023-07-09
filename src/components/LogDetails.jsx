import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_URL

function LogDetails() {
    const [log, setLog] = useState([]);
    let { index } = useParams();
    let navigate = useNavigate();
 
  
    useEffect(() => {
        axios
        .get(`http://localhost:3004/logs/${index}`)
        .then((res) => {
            // console.log(res.data)
            // console.log(res)
            setLog(res.data)
        })
        .catch((e) => navigate("/not-found"))
    },[index,navigate]);

    const handleDelete = () => {
      axios
      .delete(`${API}/logs/${index}`)
      .then(() => navigate("/logs"))
      .catch((e) => console.log(e));
    };
    
    return (
        <article>
      <h3>
        {log.mistakesWereMadeToday ? <span>💥</span> : null}
          {log.captainName}
      </h3>
      <h5>
        <span>
          <p>{log.title}</p>
        </span>{" "}
        {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
      </h5>
      <h6>{log.daysSinceLastCrisis}</h6>
      <p>{log.post}</p>
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

