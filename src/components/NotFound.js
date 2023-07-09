/** @format */

import Navbar from "./Navbar";

function NotFound() {
	return (
		<div>
			<Navbar />
			<div className="container mt-3 text-center">
				<h1 className="display-1">404</h1>
				<p className="lead">Page Not Found</p>
			</div>
		</div>
	);
}

export default NotFound;
