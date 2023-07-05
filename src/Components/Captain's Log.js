import { Link } from "react-router-dom";

function CaptainsLog({ log, index }) {
  return (
    <tr>
      <td>{log.mistakesWereMadeToday ? <span>🚧 </span> : <span>⭐</span>}</td>
      <td>
        <Link to={`/logs/${index}`}>{log.title}</Link>
      </td>
    </tr>
  );
}

export default CaptainsLog;
