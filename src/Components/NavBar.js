import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/" className="nav-link">
            <p className="home-link">Home</p>
          </Link>
        </li>
        <li>
          <Link to="/logs" className="nav-link">
            <p>Logs</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;