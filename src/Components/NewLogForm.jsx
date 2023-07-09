import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
const API = process.env.REACT_APP_API_URL;

export default function NewLogForm() {
    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: ""
    })

    const navigate = useNavigate();

    function handleTextChange(e) {
        setLog({ ...log, [e.target.id]: e.target.value})
    }
    
    function handleCheckboxChange() {
        setLog({ ...log, mistakesWereMadeToday: !log.mistakesWereMadeToday })
    }

    function handleSubmit(e) {
        e.preventDefault()
        addLog(log)
    }

    function addLog(newLog) {
        axios.post(`${API}/logs`, log).then(response => {
            navigate(`/logs`)
        }).catch(e => console.log(e))
    }
  return (
    <div> 
        <h1>New Log</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='captainName'>Captain's Name</label>
            <input 
            id="captainName" 
            value={log.captainName} 
            type="text"
            onChange={handleTextChange}
            placeholder="Jack Sparrow"
            required />
        
        <label htmlFor='title'>Title</label>
            <input 
                id="title"
                value={log.title}
                type="text"
                onChange={handleTextChange}
                required
                />
        
        <label htmlFor='post'>Post</label>
        <textarea
            id="post"
            value={log.post}
            onChange={handleTextChange}
            rows="5"
            cols="33"
        ></textarea>
            {}
        
        <label htmlFor='daysSinceLastCrisis'>Days Since Last Crisis</label>
            <input 
            id="daysSinceLastCrisis"
            value={log.daysSinceLastCrisis}
            type="number"
            onChange={handleTextChange}
             />
        
        <label htmlFor='mistakesWereMadeToday'>Mistakes were made today:</label>
        <input 
            id="mistakesWereMadeToday"
            type="checkbox" 
            onChange={handleCheckboxChange}
            checked={log.mistakesWereMadeToday}
        />
        <br />
        <Link to="/logs"><button>Back</button></Link>
        <input type="submit" />
        
      </form>
    </div>
  )
}