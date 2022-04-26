import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import PasswordReset from './Auth/passwordReset';
import Messages from './Dashboard/Messages';
import Notifications from './Dashboard/Notifications';
import Profile from './Dashboard/Profile';
import Dashboard from './Dashboard/Dashboard';
import Payments from './Dashboard/Payments';
import Projects from './Dashboard/Projects';
import ReferFriends from './Dashboard/ReferFriends';
import EnrolledCourses from './Dashboard/EnrolledCourses';
import DeveloperCourses from './Dashboard/DeveloperCourses';
import Articles from './Dashboard/Articles';
import Courses from './Dashboard/Courses';


function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
        <Route path="/" element = {<SignIn />}></Route>
        <Route path="/SignUp" element = {<SignUp />}></Route>
        <Route path="/Dashboard" element = {<Dashboard />}></Route>
        <Route path="/PasswordReset" element = {<PasswordReset />}></Route>
        <Route path="/Messages" element = {<Messages />}></Route>
        <Route path="/Notifications" element = {<Notifications />}></Route>
        <Route path="/Profile" element = {<Profile />}></Route>
        <Route path="/Payments" element = {<Payments />}></Route>
        <Route path="/Articles" element = {<Articles />}></Route>
        <Route path="/DeveloperCourses" element = {<DeveloperCourses />}></Route>
        <Route path="/EnrolledCourses" element = {<EnrolledCourses />}></Route>
        <Route path="/ReferFriends" element = {<ReferFriends />}></Route>
        <Route path="/Projects" element = {<Projects />}></Route>
        <Route path="/Courses" element = {<Courses />}></Route>
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
