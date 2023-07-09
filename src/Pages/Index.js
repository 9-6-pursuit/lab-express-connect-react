import { Link } from "react-router-dom";
import Logs from "../components/Logs";

function Index() {
  return (
    <div className="Index">
      <h2>Index</h2>
      <h2><Link to="/">Back</Link></h2>

      <Logs />
    </div>
  );
}

export default Index;