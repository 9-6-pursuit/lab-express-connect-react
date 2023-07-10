import { Link } from "react-router-dom";

function Log({ log, index }) {
  return (
    // <div className="showCard">
    <tr>
      <td>
        {log.mistakesWereMadeToday ? (
          <span>⭐️</span>
        ):(<span></span>)}
      </td>
      <td>
        <a href={`/logs/${index}`}>
          {log.captainName}
        </a>
      </td>
      <td>
        <a href={`/logs/${index}`}>
          {log.title}
        </a>
      </td>
    </tr>
    // </div>
  );
}

export default Log;
