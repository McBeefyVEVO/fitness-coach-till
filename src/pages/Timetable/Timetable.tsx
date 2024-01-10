import { Link } from "react-router-dom";

export default function Timetable() {

    return(
        <>
            <p>Timetable</p>
            <p>Rozvrch</p>
            <p>Rovrch bude pro každý týden stejný, budeme vkládat hodiny podobně jako ve škole</p>

            <Link to="/dashboard">go back to dashboard</Link>
            <Link to="/timetabledev">go back to dashboard</Link>
        </>
    )
}