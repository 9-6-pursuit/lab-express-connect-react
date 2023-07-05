import React from "react";
import { Link } from "react-router-dom";
import "../src/NavBar.css";
// import "bootstrap/dist/css/bootstrap.min.css";

//JUST WANTED TO SEE IF THIS WOULD WORK.... IT DOES
class NavBar extends React.Component {
  render() {
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
              <Link className="nav-link" to="/logs/new">
                <button
                  className="btn btn-primary btn-long"
                  style={{
                    backgroundColor: "#03243d",
                    borderColor: "#E4D1CF",
                    color: "#E4D1CF",
                  }}
                >
                  New Log
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
