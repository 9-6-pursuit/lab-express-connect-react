import "./Logs.css";

function CaptainsLog({ log, index }) {
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

export default CaptainsLog;