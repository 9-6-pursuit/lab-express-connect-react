import { Link } from "react-router-dom";

function Log({ log, index }) {
  return (
    <tr>
      <td>
        {log.mistakesWereMadeToday ? (
          <span>⭐️</span>
        ):(<span></span>)}
      </td>
      <td>
        <p>
          {log.captainName}
        </p>
      </td>
      <td>
        <a href={`/logs/${index}`}>
          {log.title}
        </a>
      </td>
      {/* <td>
        <Link to={`/logs/${index}`}>✏️</Link>
      </td> */}
    </tr>
  );
}

export default Log;
