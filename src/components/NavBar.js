import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navBar">
      <h1>
        <Link className="navText" to="/logs">Captain's Logs</Link>
      </h1>
      <p>
        <Link className="navText" to="/logs/new">New Log</Link>
      </p>
    </nav>
  );
}
