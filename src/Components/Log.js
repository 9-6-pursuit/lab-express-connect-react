
function Log({log, index}) {
  return (
    <tr  className="Log" >
      <td>
          <a href={`/logs/${index}`}> {log.captainName}</a>
        {/* <Link to={`/logs/${index}`}>{log.captainName}</Link> */}
      </td>
      <td>
        {log.mistakesWereMadeToday ? (
          <span>😔</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>

    </tr>
  )

}

export default Log;
