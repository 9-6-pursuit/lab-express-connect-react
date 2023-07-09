// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//PAGES AKA REACT ROUTES
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";
import Edit from "./Pages/Edit";

//COMPONENT
import NavBar from "./NavBar";
import NoLogs from "./Components/NoLogs";

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
