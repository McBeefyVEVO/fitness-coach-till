import { Link } from "react-router-dom";

export default function Programs() {

    return(
        <>
            <h2>Cvicime s Vojtou</h2>
            <p>Kliky na mysi: 3 serie po 12 opakovani</p>
            <p>OSU! maniak: 6 pisnicek v rade</p>
            <p>Jedno vyherni lolecko - pri prohre dalsi hra</p>

            <p>Upvote</p>
            <p>Downvote</p>

            <Link to="/programs">go back to programs</Link>
            <Link to="/dashboard">go back to dashboard </Link>
        </>
    )
}