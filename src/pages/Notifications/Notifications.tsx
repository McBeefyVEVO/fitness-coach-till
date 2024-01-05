import { Link } from "react-router-dom";

export default function Notfications() {

    return(
        <>
            <p>Notifications</p>
            <ul>
                <li>New alert: TEST1</li>
                <li>New alert: TEST2</li>
                <li>New alert: TEST3</li>
                <li>New alert: TEST4</li>
                <li>New alert: TEST5</li>
                <li>New alert: TEST6</li>
                <li>New alert: TEST7</li>
                <li>New alert: TEST8</li>
            </ul>
            <Link to="/dashboard">
            go back
            </Link>
        </>
    )
}