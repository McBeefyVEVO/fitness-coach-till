import { Link } from "react-router-dom";

export default function AppReview() {

    return(
        <>
            <h2>AppReview</h2>
            <p>there are federal agents outside my home</p>
            
            <Link to="/settings">go back to settings</Link>
        </>
    )
}