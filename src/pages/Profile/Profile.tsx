import { Link } from "react-router-dom";

export default function Profile() {

    return(
        <>
            <p>Profile</p>
            
            <p>Jméno</p>
            <p>Badge</p>
            <p>Stats</p>
            <p>Fotka</p>
            <p>banner</p>
            <p>status - text</p>
            <p>status - online/cvici/atd.</p>
            <p>bio</p>
            <p>proklik na pratele</p>
            <p>makro kalkulacka</p>
            
            <Link to="/dashboard">go back to dashboard</Link>
        </>
    )
}