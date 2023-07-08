import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/logs">LOGS</Link>
      </h1>
      <button>
        <Link to="/logs/new">NEW LOG</Link>
      </button>
    </nav>
  );
}
