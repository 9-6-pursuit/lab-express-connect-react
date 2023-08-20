import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
        <h1>
            <Link to="/logs">Captain's Log</Link>
        </h1>

        <button>
        <Link to="/logs/new">NEW LOG</Link>
      </button>
    </div>
  )
}

export default Navbar