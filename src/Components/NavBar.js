import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/bookmarks">Logs</Link>
        </li>
        <li>
          <Link to="/bookmarks/new">New Log</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;