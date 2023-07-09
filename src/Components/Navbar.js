import { Link } from "react-router-dom";

export default function NavBar() {
    return (
    <nav className=".showNavigation">
        <h1><Link to="/logs">Logs</Link></h1>
        <button><Link to="/logs/new">New Log</Link></button>
    </nav>
    )
}