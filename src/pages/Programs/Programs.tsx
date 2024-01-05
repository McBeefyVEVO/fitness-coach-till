import { Link } from "react-router-dom";

export default function Programs() {

    return(
        <>
            <h2>Úvodní pohled</h2>
            <p>Programs</p>
            <p> BEGINNER | MEDIUM | HARD | EXTREME </p>
                <p>Beginner</p>
                <p>Medium</p>
                <p>Hard</p>
                <p>Extreme</p>
            <h2>Proklik</h2>
            
            <h3>BEGINNER</h3>
            <ul>
                <Link to="/program">
                <li>
                    <p>Cvicime s vojtou</p>
                    <p>Upvotes: 0</p>
                    <p>Downvotes: 564873</p>
                </li>
                </Link>
            </ul>
            <Link to="/dashboard">
            go back
            </Link>
        </>
    )
}