import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const API = process.env.REACT_APP_API_URL;

function LogNewForm() {
  const navigate = useNavigate();
  const [log, setLog] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: "",
  });

  const addLog = (newLog) => {
    axios
    .post(`${API}/logs`, newLog)
    .then(
    (res) => {
      console.log(res)
    navigate(`/logs`);
    })
    .catch((c) => console.error("catch", c));
  };

  const handleTextChange = (event) => {
    console.log(event.target.value)
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addLog(log)
  };

    return (
      <Form onSubmit={handleSubmit}>
        <h1>Captain's Log</h1>
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
        Submit
      </Button>
    </Form>
    )
  

  }
  
  export default LogNewForm;
  