// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//PAGES
import Edit from "./Pages/Edit";
import Home from "./Pages/Home";

//COMPONENT
import NavBar from "./NavBar";


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logs/:index/edit" element={<Edit />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
