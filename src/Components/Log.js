
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Log({log, index}) {
  return (
    // <tr  className="Log" >
    //   <td>
    //       <a href={`/logs/${index}`}> {log.captainName}</a>
    //   </td>
    //   <td>
    //     {log.mistakesWereMadeToday ? (
    //       <span>😔</span>
    //     ) : (
    //       <span>&nbsp; &nbsp; &nbsp;</span>
    //     )}
    //   </td>
    // </tr>
        <Row>
          <Col></Col>
          <Col><a href={`/logs/${index}`}> {log.captainName}</a></Col>
          <Col> {log.mistakesWereMadeToday ? (
          <span>😔</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}</Col>
        </Row>
  )

}

export default Log;
