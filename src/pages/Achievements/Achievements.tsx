import { Link } from "react-router-dom";

export default function Achievements() {

    return(
        <>
            <p>Achievements</p>
            <input type="text" placeholder="Search"/>
            <button>Search</button>
            <p>Šoupací karty do stran, Každá karta lze otevřít. Po otevření se zobrazí pro danou kartu kategorie _gqegreqgrw</p>

            <h2>Beginner</h2>
            <ul>
                <li>
                    <p>Beginner: First session!</p>
                    <p>Description: Start your first session</p>
                    <p>Status: Unlocked</p>
                </li>
            </ul>

            <h2>Medium</h2>
            <ul>
                <li>
                    <p>Medium: Šubas champ</p>
                    <p>Description: Eat 3 paninis in a row</p>
                    <p>Status: Unlocked</p>
                </li>
            </ul>

            <h2>Hard</h2>
            <ul>
                <li>
                    <p>Hard: I am become Erben, injector of tren</p>
                    <p>Description: Use steroids for the first time</p>
                    <p>Status: Locked</p>
                </li>
            </ul>

            <h2>Extreme</h2>
            <ul>    
                <li>
                    <p>Extreme: Champion of pull-ups</p>
                    <p>Description: Do 28 pull-ups in a row</p>
                    <p>Status: Locked</p>
                </li>
            </ul>
            <Link to="/dashboard">
                go back to dashboard
            </Link>
        </>
    )
}