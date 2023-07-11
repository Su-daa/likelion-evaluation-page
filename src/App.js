import logo from './logo.svg';
import './App.css';
import LogInPage from './screen/login';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import LogIn from "./screen/login"
import SignUp from './screen/signup';
//import CustomNavBar

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

    </>
  );
}

export default App;
