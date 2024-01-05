import { Link } from "react-router-dom";

export default function Dishes() {

    return(
        <>
            
            <h2>Dishes</h2>
            <ul>
                <li>
                    <p>Obrazek</p>
                    <p>Jmeno jidla</p>
                    <p>Prejit</p>
                </li>
                <li>
                    <p>Obrazek</p>
                    <p>Jmeno jidla</p>
                    <p>Prejit</p>
                </li>
                <li>
                    <p>Obrazek</p>
                    <p>Jmeno jidla</p>
                    <p>Prejit</p>
                </li>
            </ul>
            <Link to="/dashboard">go back to dashboard </Link>
        </>
            
        
    )
}