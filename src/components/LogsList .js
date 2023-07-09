/** @format */

import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function LogsList() {
	const [logs, setLogs] = useState([]);

	useEffect(() => {
		fetchLogs();
	}, []);

	const fetchLogs = () => {
		axios
			.get(`${process.env.REACT_APP_API_URL}/logs`)
			.then((response) => {
				setLogs(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<div>
			<Navbar />
			<div className="container mt-3">
				<h1>Logs List</h1>
				<table className="table">
					<thead>
						<tr>
							<th scope="col">Captain Name</th>
							<th scope="col">Title</th>
						</tr>
					</thead>
					<tbody>
						{logs.map((log, index) => (
							<tr key={index} className="Log">
								<td>
									<p>{log.captainName}</p>
								</td>
								<td>
									<Link to={`/logs/${index}`}>
										{log.title}
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default LogsList;
