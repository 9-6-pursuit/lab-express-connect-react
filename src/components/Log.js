import { Link } from "react-router-dom";

function Log({log, index}) {
  return (
    <tr>
      <td>
        {log.mistakesWereMadeToday ? (
          <span>😔</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td>
        <h1>
          {log.captainName}
        </h1>
      </td>
      <td>
        <Link to={`/logs/${index}`}>✏️</Link>
      </td>
    </tr>
  )

}

export default Log;