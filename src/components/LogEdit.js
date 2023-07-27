//importing the necessary dependencies
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;// this is our environment variable which represents the URL of the backend API

export default function LogEdit() {
    let { index } = useParams();//this code is destructuring the "index" from URL parameters using "useParams" - useParams extracts the index value from the URL
    const navigate = useNavigate();
    const [log, setLog] = useState({
        captainName: "",
        title: "",
        post: "",
        mistakesWereMadeToday: false,
        daysSinceLastCrisis: 0,
    });
    //edit form is similar to the "new" (create) form expect we pre-fill the log for a better use experiences so that the user doesn't have to type everything from scratch

    //use useEffect to pre-load the data for the form
    useEffect(() => {
        axios
        .get(`${API}/logs/${index}`)
        .then((response) => {
            setLog(response.data);
        })
        .catch((e) => console.error(e));
    }, [index])
    //why are we using axios for edit? 
    //remember axios is a promise-based HTTP library that lets developers make requests to either their own or a 3rd party server to fetch data. 

    //When the component mounts or when the index parameter changes, the useEffect hook makes a GET request to the server using Axios to fetch the bookmark data for the specified index.

    const handleTextChange = (event) => {
        setLog({...log, [event.target.id]: event.target.value })
    };
    
    const handleCheckboxChange = () => {
        setLog({...log, mistakesWereMadeToday: !log.mistakesWereMadeToday });
    };

    const editLog = () => {
    //This function handles the updating of the log data on the server by sending a PUT request using Axios to the appropriate endpoint (${API}/logs/${index}).
    //Upon a successful response, the log state is updated with the response data, and the user is navigated to the show page of the updated log using navigate from useNavigate().
        axios
        .put(`${API}/logs/${index}`, log)
        .then((response) => {
            setLog(response.data);
            navigate(`/logs/${index}`);
        })
        .catch((c) => console.warn("catch", c))
    };
    //editLog fxn doesn't need to take any parameters unlike the addLog fxn because the editLog fxn is using the "Log" state variable, which already holds updated data of the Log that the user wants to edit - unlike the addLog fxn where the data is being created by the user so there is no data until the user adds it.

    const handleSubmit = (event) => {
        event.preventDefault();
        editLog();
    }

    return (
        <div className="edit">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Captain's Name:</label>
                <input
                    id="name"
                    value={log.captainName}
                    type="text"
                    onChange={handleTextChange}
                    required
                />
                <label htmlFor="title">Title:</label>
                <input
                    id="title"
                    value={log.title}
                    type="text"
                    onChange={handleTextChange}
                    required
                />
                <label htmlFor="post">Post:</label>
                <input
                    id="post"
                    value={log.post}
                    type="text"
                    onChange={handleTextChange}
                    required
                />
                <label htmlFor="crisis">Days Since Last Crisis</label>
                <input
                    id="crisis"
                    value={log.daysSinceLastCrisis}
                    type="number"
                    onChange={handleTextChange}
                    required
                />
                <label htmlFor="mistakes">Mistakes were made today?</label>
                <input 
                    id="mistakes"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    checked={log.mistakesWereMadeToday}
                />
                {/* because this is a checkbox we can omit the value attribute */}

                <br />

                <input type="submit" />
            </form>
        </div>
        // for LogEdit input we do not need the "placeholder attribute because the input areas are being pre-filled with the data from the server"
    )

}