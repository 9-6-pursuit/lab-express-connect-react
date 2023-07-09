import "../logs.css";

function CaptainsLog({ log, index }) {
  return (
    <tr className="Log table-row">
      <td>{log.mistakesWereMadeToday ? <span>🚧</span> : <span>☘️</span>}</td>
      <td>{log.captainName}</td>
      <td>
        <a href={`/logs/${index}`}>{log.title}</a>
      </td>
    </tr>
  );
}

export default CaptainsLog;