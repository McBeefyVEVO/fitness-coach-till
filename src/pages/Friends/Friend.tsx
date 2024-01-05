import { Link } from "react-router-dom";

export default function Friends() {

    return(
        <>
            <p>Friend</p>
            <p>Profilovka</p>
            <p>Jmeno</p>
            <p>Badges</p>
            <p>banner</p>
            <p>status</p>
            <p>status - kratke slovo - info</p>
            <p>bio</p>
            <p>seznam pratel</p>

            <Link to="/friends">
            go back to friends list
            </Link>
            <Link to="/dashboard">
            go back to dashboard
            </Link>
        </>
    )
}