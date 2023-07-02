import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import LogDetails from "./Components/LogDetails"
import LogEditForm from "./Components/LogEditForm"
import LogNewForm from "./Components/LogNewForm"
import Logs from "./Components/Logs";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<h1>Welcome</h1>} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/logs/new" element={<LogNewForm />} />
          <Route path="/logs/:index" element={<LogDetails />} />
          <Route path="/logs/:index/edit" element={<LogEditForm />} />
          <Route path="*" element={<h1>Error</h1>} />
        </Routes>
      </main>
    </Router>
  </div>
  );
}

export default App;
