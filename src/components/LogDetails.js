import { useState, useEffect } from "react";
import { Link, useParams, useNavigate} from "react-router-dom";//This will allow us to use the URL parameters -in our app, this will be the index position of the arrays
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function LogDetails() {
    const [log, setLog] = useState([]);
    let { index } = useParams();
    let navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}/logs/${index}`).then((response) => {
            setLog(response.data);
        })
        .catch(() => {
            navigate('/not-found');
        });
    }, [index, navigate]);
    
    //BONUS - show confirmation dialog before processing delete fxn using the window.confirm()
    const handleDelete = () => {
        const confirmDelete = window.confirm("Are you sure you want to delete this log?");
        
        if (confirmDelete)
         axios
        .delete(`${API}/logs/${index}`)
        .then(() => {
            navigate('/logs')
        })
        .catch((e) => console.log(e));
    };

    return (
        <article>
            <div className="individual-log">
                <h3>{log.title} - By {log.captainName}</h3>
                <h5>{log.post}</h5>
                <h6><span>Days since last crisis:</span>{log.daysSinceLastCrisis}</h6>
            </div>
            <div className="buttons">
                <div>
                    <Link to={`/logs`}>
                        <button>Back</button>
                    </Link>
                </div>
                <div>
                    <Link to={`/logs/${index}/edit`}>
                        <button>Edit</button>
                    </Link>
                </div>
                <div>
                    <button onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </article>
    )
}
