import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <h2>Welcome</h2>
      <h3><Link to="/logs">To Captian's Log</Link></h3>
    </div>
  );
}

export default Home;
