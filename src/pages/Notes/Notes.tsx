import { Link } from "react-router-dom";

export default function Notes() {

    return(
        <>
            <p>Notes</p>
            <p>Podobně jako notion, data budeme ukládat do souboru</p>


            <Link to="/dashboard">go back to dashboard</Link>
        </>
    )
}