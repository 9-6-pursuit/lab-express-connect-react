import { useState, useEffect } from "react";

function LogNewForm() {

    const [ log, setLog ] = useState ({
        captainName: '',
        title: "",
        post: "",
        mistakesWereMadeToday: true,
        daysSinceLastCrisis: 0
    });

const handleTextChange = (event) => {
    setLog({ ...log, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
  };


const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="new">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Captain's Name:</label>
        <input
          id="captainName"
          type="text"
          value={log.captainName}
          onChange={handleTextChange}
          required
        />

        <label htmlFor="url">Title</label>
        <input
          id="title"
          type="text"
          required
          value={log.title}
          onChange={handleTextChange}
        />

        <label htmlFor="post">Post:</label>
        <textarea
          id="post"
          type="text"
          name="post"
          value={log.post}
          onChange={handleTextChange}
          placeholder="What happened today?"
        />

        <label htmlFor="daysSinceLastCrisis">Days Since Last Crisis:</label>
        <input
          id="daysSinceLastCrisis"
          type="number"
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

    </div>
  )
}

export default LogNewForm