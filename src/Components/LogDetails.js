import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

function LogDetails() {
  const API = process.env.REACT_APP_API_URL;
  const [logs, setLogs] = useState([]);
  let { index } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((response) => {
        setLogs(response.data);
      })
      .catch(() => {
        navigate("/not-found");
      });
  }, [index, navigate, API]);

  const handleDelete = () => {
    axios
      .delete(`${API}/logs/${index}`)
      .then(() => {
        navigate(`/logs`);
      })
      .catch((e) => console.error(e));
  };

    return (
      <article>
        <h1>Captain's Log</h1>
        <h1>Show</h1>
        <ListGroup className="my-2">
          <ListGroup.Item>{logs.title} - By {logs.captainName}</ListGroup.Item>
          <ListGroup.Item>Post: {logs.post}</ListGroup.Item>
          <ListGroup.Item>Days since last crisis: {logs.daysSinceLastCrisis}</ListGroup.Item>
          <ListGroup.Item>Were Mistakes Made Today: {logs.mistakesWereMadeToday ? <span>😔</span> : null}</ListGroup.Item>
        </ListGroup>
      
      <div className="showNavigation">
        <div>
          <Button variant="primary" onClick={handleDelete}>Delete</Button>{' '}
          <Button variant="secondary" href={`/logs`}>Back</Button>{' '}
          <Button variant="secondary" href={`/logs/${index}/edit`}>Edit</Button>{' '}
        </div>

      </div>
    </article>
    )
  
  }
  
  export default LogDetails;
  