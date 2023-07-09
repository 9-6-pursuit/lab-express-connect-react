import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/" className="ul-no">Captain's Log</Link>
      </h1>
      <button>
        <Link to="/">Home</Link>
      </button>
      <button>
        <Link to="/logs">Logs</Link>
      </button>
      <button>
        <Link to="/logs/new">New Logs</Link>
      </button>
    </nav>
  );
}