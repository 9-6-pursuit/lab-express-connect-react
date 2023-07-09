/** @format */

import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-fluid">
				<span
					className="navbar-brand"
					style={{ color: "white", fontWeight: "bold" }}>
					Captain's Log
				</span>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link className="nav-link" to="/logs">
								Logs List
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/logs/new">
								New Log
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
