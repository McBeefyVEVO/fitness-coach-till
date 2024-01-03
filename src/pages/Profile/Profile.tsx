import { Link } from "react-router-dom";

export default function Profile() {

    return(
        <>
            <p>Profile</p>
            <Link to="/dashboard">
            go back
            </Link>
        </>
    )
}