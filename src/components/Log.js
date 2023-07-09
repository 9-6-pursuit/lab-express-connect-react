/** @format */

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Log() {
	const { index } = useParams();
	const navigate = useNavigate();

	const [log, setLog] = useState(null);

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_API_URL}/logs/${index}`)
			.then((response) => {
				setLog(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleDelete = () => {
		axios
			.delete(`${process.env.REACT_APP_API_URL}/logs/${index}`)
			.then((response) => {
				navigate("/logs");
			})
			.catch((error) => {
				console.error(error);
			});
	};

	if (!log) {
		return (
			<div>
				<Navbar />
				<div className="d-flex justify-content-center">
					<div className="spinner-border" role="status">
						<span className="sr-only"></span>
					</div>
					<span className="sr-only">Loading...</span>
					<Link to="/logs" className="btn btn-primary">
						Back to Logs List
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div>
			<Navbar />
			<div className="container mt-3">
				<h1>Show</h1>
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">
							{log.title + " - By " + log.captainName}
						</h5>
						<p className="card-text">{log.post}</p>
						<p className="card-text">
							Mistakes Were Made Today:{" "}
							{log.mistakesWereMadeToday ? "Yes" : "No"}
						</p>
						<p className="card-text">
							Days since last crisis: {log.daysSinceLastCrisis}
						</p>
						<Link to="/logs" className="btn btn-primary">
							Back to Logs List
						</Link>
						<Link
							to={`/logs/${index}/edit`}
							className="btn btn-primary mx-2">
							Edit
						</Link>
						<button
							onClick={handleDelete}
							className="btn btn-danger">
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Log;
