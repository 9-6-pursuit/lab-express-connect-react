import React from "react";
import "./NoLogs.css"
import pic from "../assets/404.PNG"
function NoLogs() {
  return (
    <div className="noLogs-container">
      <img className="image" src={pic}/>
    </div>
  );
}

export default NoLogs;