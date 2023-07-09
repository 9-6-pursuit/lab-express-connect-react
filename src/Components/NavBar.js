import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar">
      <h1>
      <Link to="/logs">Captain's Log</Link>
      </h1>
      <button>
        <Link to="/logs/new">NEW LOG</Link>
      </button>
    </nav>
  );
}