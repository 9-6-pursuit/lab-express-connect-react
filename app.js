
let express = require("express");
let app = express();
require("dotenv").config();
let cors = require("cors");
app.use(cors());
app.use(express.json());

let port = process.env.API_PORT;
let logs = require("./models/log");

app.get("/logs", (req, res) => {
	res.json(logs);
});

app.get("/logs/:id", (req, res) => {
	res.json(logs[req.params.id]);
});

app.post("/logs", (req, res) => {
	const newLog = req.body;
	console.log(newLog);
	logs.push(newLog);
	res.json(newLog);
});

app.put("/logs/:id", (req, res) => {
	const index = req.params.id;
	const updatedLog = req.body;
	logs[index] = updatedLog;
	res.json(updatedLog);
});

app.delete("/logs/:id", (req, res) => {
	const index = req.params.id;
	logs.splice(index, 1);
	res.json({ message: "Log deleted" });
});

app.listen(port, () => {
	console.log("server running on port " + port);
});
