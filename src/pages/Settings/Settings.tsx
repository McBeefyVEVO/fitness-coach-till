import { Link } from "react-router-dom";

export default function Settings() {

    return(
        <>
            <p>Settings</p>
            <p>Themes</p>
            <p>Jazyk</p>
            <p>Toggle Notifikace</p>
            <p>O nás</p>

            <Link to="/privacypolicy"><p>GDPR / Policy</p></Link>
            <Link to="/appreview"><p>AppReview</p></Link>
            <Link to="/dashboard">go back to dashboard</Link>
        </>
    )
}