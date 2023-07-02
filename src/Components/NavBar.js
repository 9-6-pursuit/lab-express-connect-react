import { Link } from "react-router-dom";

function NavBar() {
    return (
    <nav>
      <h1>
        <Link to="/logs">Logs</Link>
      </h1>
      <button>
        <Link to="/logs/new">New Log</Link>
      </button>
    </nav>
    )
  
  }
  
  export default NavBar;
  