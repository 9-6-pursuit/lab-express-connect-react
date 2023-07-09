//Pages
import Home from "./pages/Home";
import Index from "./pages/Index";
import New from "./pages/New";
import Show from "./pages/Show";
import Edit from "./pages/Edit";
//Dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Component
import NavBar from "./components/NavBar";
import NoLogs from "./components/NoLogs";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logs" element={<Index />} />
            <Route path="/logs/new" element={<New />} />
            <Route path="/logs/:index" element={<Show />} />
            <Route path="/logs/:index/edit" element={<Edit />} />
            <Route path="*" element={<NoLogs />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;