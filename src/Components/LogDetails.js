import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

function LogDetails() {
  let { index } = useParams();
  const navigate = useNavigate();
  const [log, setLog] = useState({});
  
  useEffect(() => {
    axios
      .get(`${API}/logs/${index}`)
      .then((response) => {
        console.log(response.data); //check response data
        setLog(response.data)
      })
      .catch((error) => console.error('Error:', error));
  }, [index, navigate]);
  
  const deleteLog = () => {
    axios
      .delete(`${API}/logs/${index}`)
      .then(() => {
        navigate('/logs');
      })
      .catch((error) => console.error('Error:', error));
  };


  return (
    <div className="show">
      <div className="show-card">
        <h3>{log.title} - By {log.captainName}</h3> 
        <p>{log.post}</p>
        <p>Days since last crisis: {log.daysSinceLastCrisis}</p>
      </div>
      <div className="show-button">
        <Link to="/logs"><button>Back</button></Link>
        <Link to={`/logs/${index}/edit`}><button>Edit</button></Link>
        <Link to={`/logs/${index}`}>
          <button onClick={deleteLog} >Delete</button>
        </Link>
      </div>
    </div>
  );
  }

export default LogDetails;
