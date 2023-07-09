import { Link } from "react-router-dom";
import "./navBar.css"

export default function NavBar() {
  return (
    <nav>
      <h1>
       <Link to="/logs">CAPTAIN LOG BOOK</Link>
      </h1>
      <button>
        <Link to="/logs/new">New log</Link>
        
      </button>
    </nav>
  );
}
