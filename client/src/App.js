import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './Auth/SignIn';
import SignUp from './Auth/SignUp';
import PasswordReset from './Auth/passwordReset';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
        <Route path="/" element = {<SignIn />}></Route>
        <Route path="/SignUp" element = {<SignUp />}></Route>
        <Route path="/Dashboard" element = {<Dashboard />}></Route>
        <Route path="/PasswordReset" element = {<PasswordReset />}></Route>
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
