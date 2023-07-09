import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../src/NavBar.css";

function NavBar() {
  const navigate = useNavigate();

  const handleNewLogClick = () => {
    navigate("/logs/new");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-blue">
      <Link
        className="navbar-brand"
        to="/logs"
        style={{ color: "#E4D1CF", fontSize: "64px", paddingLeft: "25px" }}
      >
        Captain's Log
      </Link>
      <div className="collapse navbar-collapse d-flex justify-content-end">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a
              href="/logs/new"
              className="button"
              onClick={handleNewLogClick}
              style={{
                backgroundColor: "#03243d",
                borderColor: "#E4D1CF",
                color: "#E4D1CF",
                marginRight: "20px",
                textDecoration: "none"
              }}
            >
              New Log
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;