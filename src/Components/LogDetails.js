import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function LogDetails() {
    //TAKING THE VALUE OF THE INDEX PARAMETER FROM THE URL
    let { index } = useParams();
    const [ log, setLog ] = useState([]);

    useEffect(() => {
        axios
        .get(`${API}/logs/${index}`)
        .then((response) => setLog(response.data))
        .catch((e) => console.error("catch", e));
    }, [])

    const handleDelete = () => {};

  return (
    <article>
        <h3>{log.title} - By {log.captainName}</h3>
        <h4>{log.post}</h4>
        <p><b>Days since last crisis:</b> {log.daysSinceLastCrisis}</p>

        <div className="backEditDelete">
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

export default LogDetails