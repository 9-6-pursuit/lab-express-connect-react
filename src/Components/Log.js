import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function Log({ log, index }) {
  const navigate = useNavigate();

  const handleDelete = () => {
    axios
      .delete(`${API}/logs/${index}`)
      .then(() => navigate("/logs"))
      .catch(console.error);
  };

  return (
    <tr className="Log">
      <td>{log.mistakesWereMadeToday ? "💥" : "👌"}</td>
      <td>{log.captainName}</td>
      <td><Link to={`/logs/${index}`}>{log.title}</Link></td>
      <td>
        <button onClick={handleDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default Log;
