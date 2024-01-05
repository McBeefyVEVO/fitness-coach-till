import { Link } from "react-router-dom";

export default function Dishes() {

    return(
        <>
            <p>Obrazek</p>
            <p>Jmeno jidla</p>
            <p>Popisek jidla</p>
            <p>Tabulka - hodnoty</p>
            <p>Upvote</p>
            <p>Downvote</p>
            
            <Link to="/dishes">go back to dishes </Link>
            <Link to="/dashboard">go back to dashboard </Link>
        </>
            
        
    )
}