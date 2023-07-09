import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
const API = process.env.REACT_APP_API_URL;

function LogEditForm() {
  let { index } = useParams();
  const navigate = useNavigate();
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((response) => {
        setLog(response.data);
      })
      .catch((e) => console.error(e));
  }, [index]);

  const updateLog = () => {
    axios
      .put(`${API}/logs/${index}`, log)
      .then((response) => {
        setLog(response.data);
        navigate(`/logs/${index}`);
      })
      .catch((c) => console.warn("catch", c));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateLog();
  };
    return (
      <div className="Edit">
        <h1>Captain's Log</h1>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label htmlFor="captainName">Captain's Name</Form.Label>
              <Form.Control 
                id="captainName"
                value={log.captainName}
                type="text"
                onChange={handleTextChange}
                placeholder="Captain Name"
                required
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label htmlFor="title">Title:</Form.Label>
              <Form.Control 
                id="title"
                type="text"
                required
                value={log.title}
                placeholder="Title"
                onChange={handleTextChange}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="post">Post:</Form.Label>
            <Form.Control 
              id="post"
              type="text"
              name="post"
              value={log.post}
              placeholder="Post"
              onChange={handleTextChange}
            />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</Form.Label>
              <Form.Control
                id="daysSinceLastCrisis"
                type="number"
                name="daysSinceLastCrisis"
                value={log.daysSinceLastCrisis}
                placeholder="Days Since Last Crisis"
                onChange={handleTextChange}
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" >
              <Form.Check 
                label="Mistakes Were Made Today?" 
                id="mistakesWereMadeToday"
                type="checkbox"
                onChange={handleCheckboxChange}
                checked={log.mistakesWereMadeToday}
              />
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit">
            Edit
          </Button>
          <Button variant="outline-secondary" href={`/logs/${index}`}>Back</Button>{' '}
        </Form>
        
    </div>
    )
  
  }
  
  export default LogEditForm;
  