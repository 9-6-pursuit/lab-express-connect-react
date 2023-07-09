/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";

import WelcomePage from "./components/WelcomePage";
import LogsList from "./components/LogsList ";
import Log from "./components/Log";
import NewLog from "./components/NewLog";
import EditLog from "./components/EditLog";
import NotFound from "./components/NotFound";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
				<Route path="*" element={<NotFound />} />
					<Route
						path="/"
						element={<WelcomePage></WelcomePage>}></Route>
					<Route path="/logs" element={<LogsList></LogsList>}></Route>
					<Route path="/logs/:index" element={<Log></Log>}></Route>
					<Route
						path="/logs/:index/edit"
						element={<EditLog></EditLog>}></Route>
					<Route path="/logs/new" element={<NewLog></NewLog>}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
