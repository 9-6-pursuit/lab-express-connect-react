import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate,  } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

// inside LogEditForm function
function LogEditForm() {
const navigate = useNavigate();
let { index } = useParams();

const [log, setLog] = useState({
    name: "",
    url: "",
    category: "",
    description: "",
    isFavorite: false,
});

const updateLog = () => {
    axios
      .put(`${API}/logs/${index}`, log)
      .then((response) => {
        setLog(response.data);
        navigate(`/logs/${index}`);
      })
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setLog ({...log, [event.target.id]: event.target.value});
  };

  const handleCheckboxChange = (event) => {
    setLog ({...log, isFavorite: !log.isFavorite})
  }

  useEffect(() => {
    axios
        .get(`${API}/log/${index}`)
        .then((response) => {
            setLog(response.data);
        })
        .catch((e) => console.log(e));

  }, [index, navigate, API]);

  const handleSubmit = (event) => {
    event.preventDefualt();
    updateLog()
};
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlForm="name">Name:</label>
                <input
          id="title"
          type="text"
          value={log.title}
          onChange={handleTextChange}
        />
        <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          name="post"
          value={log.post}
          onChange={handleTextChange}
          placeholder="What happened today?"
        />
        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis</label>
        <input
          id="daysSinceLastCrisis"
          type="number"
          min="0"
          step="1"
          name="daysSinceLastCrisis"
          value={log.daysSinceLastCrisis}
          onChange={handleTextChange}
        />
        <label htmlFor="mistakesWereMadeToday">Mistakes were made today:</label>
        <input
          id="mistakesWereMadeToday"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={log.mistakesWereMadeToday}
        />

        <br />
        <input type="submit" />
            </form>
            <Link className="back" to="/logs">
              <button>Back</button>
            </Link>
        </div>
    );
};



  export default LogEditForm;