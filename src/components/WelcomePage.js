/** @format */

import Navbar from "./Navbar";
import "./WelcomePage.css";

function WelcomePage() {
	return (
		<div>
			<Navbar />
			<main className="container mt-3">
				<h1 className="display-4">Welcome to My App!</h1>
				<p className="lead">This is the welcome page.</p>
			</main>
		</div>
	);
}

export default WelcomePage;
