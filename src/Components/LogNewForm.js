import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Added import
import "./LogNewForm.css";






function LogNewForm() {
    const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    captainName: "",
    title: "",
    post: "",
    mistakesWereMadeToday: false,
    daysSinceLastCrisis: 0,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/logs", formValues)
      .then(() => {
        navigate("/logs");
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
    <form onSubmit={handleSubmit}>
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

export default LogNewForm;
