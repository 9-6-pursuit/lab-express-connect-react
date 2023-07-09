import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>404 Error!!!</h2>
      <p>The resource you were looking for was not found. Please try again, mate!</p>
      <button onClick={() => navigate("/logs")}>Back to Logs</button>
    </div>
  );
}