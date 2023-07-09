import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function LogDetails() {
  const { index } = useParams();
  const navigate = useNavigate();
  const [log, setLog] = useState(null);

  useEffect(() => {
    axios
      .get(`/logs/${index}`)
      .then((response) => setLog(response.data))
      .catch((error) => console.error(error));
  }, [index]);

  const handleDelete = () => {
    axios
      .delete(`/logs/${index}`)
      .then(() => {
        navigate("/logs");
      })
      .catch((error) => console.error(error));
  };

  if (!log) {
    return <div>Loading...</div>;
  }

  return (
    <div className="LogDetails">
      <h2>{log.title}</h2>
      <p>Captain Name: {log.captainName}</p>
      <p>Post: {log.post}</p>
      <p>Mistakes Were Made Today: {log.mistakesWereMadeToday ? "Yes" : "No"}</p>
      <p>Days Since Last Crisis: {log.daysSinceLastCrisis}</p>
      <div>
        <button onClick={() => navigate(-1)}>Back</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default LogDetails;
