// import { Link } from "react-router-dom";

function Log({log, index}) {
    return (
      <tr className="Log" >
        <td>
          {log.mistakesWereMadeToday ? (
            <span>💥</span>
          ) : (
            <span></span>
          )}
        </td>
        <td>
          <a href={`/logs/${index}`}>{log.captainName}</a>
        </td>
      </tr>
    )
  
  }
  
  export default Log;