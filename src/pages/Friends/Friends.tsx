import { Link } from "react-router-dom";

export default function Friends() {

    return(
        <>
            <p>Friends</p>
            <input type="text" placeholder="Hledat kamarády"/>
            <button>Vyhledat</button>
            <ul>
                <li>
                    <p>Ikonka</p>
                    <p>Petr Pavel</p>
                    <Link to="/friend">
                    <p>Přejít</p>
                    </Link>
                </li>
                <li>
                    <p>Ikonka</p>
                    <p>Petr Pavel</p>
                    <Link to="/friend">
                    <p>Přejít</p>
                    </Link>
                </li>
            </ul>
            <Link to="/dashboard">
            go back
            </Link>
        </>
    )
}