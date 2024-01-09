import { HashRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "../MainPage/MainPage";
import Dashboard from "../Dashboard/Dashboard";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import NotFound from "../NotFound/NotFound";
import Timetable from "../Timetable/Timetable";
import Achievements from "../Achievements/Achievements";
import Exercises from "../Exercises/Exercises";
import Dishes from "../Dishes/Dishes";
import Friends from "../Friends/Friends";
import Profile from "../Profile/Profile";
import Settings from "../Settings/Settings";
import Notes from "../Notes/Notes";
import Programs from "../Programs/Programs";
import Notifications from "../Notifications/Notifications";
import Friend from "../Friends/Friend";
import Program from "../Programs/Program";
import Dish from "../Dishes/Dish";
import PrivacyPolicy from "../PrivacyPolicy/PrivacyPolicy"
import AppReview from "../AppReview/AppReview";

export function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/signin" element={<SignIn />}/>
                <Route path="/signup" element={<SignUp />}/>
                <Route path="/timetable" element={<Timetable />}/>
                <Route path="/achievements" element={<Achievements />}/>
                <Route path="/exercises" element={<Exercises />}/>
                <Route path="/dishes" element={<Dishes />}/>
                <Route path="/friends" element={<Friends />}/>
                <Route path="/profile" element={<Profile />}/>
                <Route path="/settings" element={<Settings />}/>
                <Route path="/notes" element={<Notes />}/>
                <Route path="/programs" element={<Programs />}/>
                <Route path="/notifications" element={<Notifications/>}/>
                <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
                <Route path="/appreview" element={<AppReview/>}/>

                <Route path="/friend" element={<Friend/>}/>
                <Route path="/program" element={<Program/>}/>
                <Route path="/dish" element={<Dish/>}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </HashRouter>
    )
}