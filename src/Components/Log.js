import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Log({log, index}) {
  return (

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