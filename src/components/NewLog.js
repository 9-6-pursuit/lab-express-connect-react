/** @format */

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function NewLog() {
	const navigate = useNavigate();

	const [captainName, setCaptainName] = useState("");
	const [title, setTitle] = useState("");
	const [post, setPost] = useState("");
	const [mistakesWereMadeToday, setMistakesWereMadeToday] = useState(false);
	const [daysSinceLastCrisis, setDaysSinceLastCrisis] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		const newLog = {
			captainName,
			title,
			post,
			mistakesWereMadeToday,
			daysSinceLastCrisis: parseInt(daysSinceLastCrisis),
		};
		axios
			.post(`${process.env.REACT_APP_API_URL}/logs`, newLog)
			.then((response) => {
				navigate("/logs");
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<div>
			<Navbar />
			<div className="container mt-3">
				<h1>New Log</h1>
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="captainName" className="form-label">
							Captain's Name
						</label>
						<input
							type="text"
							className="form-control"
							id="captainName"
							value={captainName}
							onChange={(event) =>
								setCaptainName(event.target.value)
							}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="title" className="form-label">
							Title
						</label>
						<input
							type="text"
							className="form-control"
							id="title"
							value={title}
							onChange={(event) => setTitle(event.target.value)}
						/>
					</div>
					<label htmlFor="post" className="form-label">
						Post
					</label>
					<textarea
						className="form-control"
						id="post"
						rows="3"
						value={post}
						onChange={(event) =>
							setPost(event.target.value)
						}></textarea>
					<div className="mb-3 form-check">
						<input
							type="checkbox"
							className="form-check-input"
							id="mistakesWereMadeToday"
							checked={mistakesWereMadeToday}
							onChange={(event) =>
								setMistakesWereMadeToday(event.target.checked)
							}
						/>
						<label
							className="form-check-label"
							htmlFor="mistakesWereMadeToday">
							Mistakes were made today
						</label>
					</div>
					<div className="mb-3">
						<label
							htmlFor="daysSinceLastCrisis"
							className="form-label">
							Days Since Last Crisis
						</label>
						<input
							type="number"
							className="form-control"
							id="daysSinceLastCrisis"
							value={daysSinceLastCrisis}
							onChange={(event) =>
								setDaysSinceLastCrisis(event.target.value)
							}
						/>
					</div>
					<button type="submit" className="btn btn-primary">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default NewLog;
