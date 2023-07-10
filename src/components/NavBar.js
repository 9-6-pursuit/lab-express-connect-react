import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navBar">
      <h1>
        <Link to="/logs">Captain's Logs</Link>
      </h1>
      <button>
        <Link to="/logs/new">New Log</Link>
      </button>
    </nav>
  );
}
