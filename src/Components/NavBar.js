import { Link } from "react-router-dom";
import "./NavBar.css"; // Import the CSS file for styling

function NavBar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Captains Log</h1>
      <ul className="navbar-links">
        <li className="navbar-item">
          <Link to="/logs" className="navbar-link">Logs</Link>
        </li>
        <li className="navbar-item">
          <Link to="/logs/new" className="navbar-link">New Log</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
