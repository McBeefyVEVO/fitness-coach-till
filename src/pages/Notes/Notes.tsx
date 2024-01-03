import { Link } from "react-router-dom";

export default function Notes() {

    return(
        <>
            <p>Notes</p>
            <Link to="/dashboard">
            go back
            </Link>
        </>
    )
}