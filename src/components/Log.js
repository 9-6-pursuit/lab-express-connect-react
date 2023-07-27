import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBomb } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faEnvelope} />


export default function Log({ log, index }) {
    return (
            <tr>
                <td>
                    {log. mistakesWereMadeToday ? (
                        <span><FontAwesomeIcon icon={faBomb} style={{color: "#d4112e",}} /></span>
                    ): (
                        <p></p>
                    )}
                </td>
                <td><p>{log.captainName}</p></td>
                <td>
                    <Link to={`/logs/${index}`}>{log.title}</Link>
                </td>
            </tr>
    );
}