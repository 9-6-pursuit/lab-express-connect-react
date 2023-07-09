import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios"; // Added import
import "./LogEditForm.css";





function LogEditForm() {
  const { index } = useParams();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  useEffect(() => {
    axios
      .get(`/logs/${index}`)
      .then((response) => {
        setFormValues(response.data);
      })
      .catch((error) => console.error(error));
  }, [index]);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .put(`/logs/${index}`, formValues)
      .then(() => {
        navigate(`/logs/${index}`);
      })
      .catch((error) => console.error(error));
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: newValue,
    }));
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label>
        Captain Name:
        <input
          type="text"
          name="captainName"
          value={formValues.captainName}
          onChange={handleChange}
        />
      </label>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={formValues.title}
          onChange={handleChange}
        />
      </label>
      <label>
        Post:
        <input
          type="text"
          name="post"
          value={formValues.post}
          onChange={handleChange}
        />
      </label>
      <label>
        Mistakes Were Made Today:
        <input
          type="checkbox"
          name="mistakesWereMadeToday"
          checked={formValues.mistakesWereMadeToday}
          onChange={handleChange}
        />
      </label>
      <label>
        Days Since Last Crisis:
        <input
          type="number"
          name="daysSinceLastCrisis"
          value={formValues.daysSinceLastCrisis}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

  export default LogEditForm;
