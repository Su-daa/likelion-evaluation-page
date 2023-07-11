import './App.css';
import { Routes, Route } from 'react-router-dom';
import LogIn from "./screen/login"
import SignUp from './screen/signup';
import HomePage from './screen/HomePage';
import Mypage from './screen/Mypage';


function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/MyPage" element={<Mypage/>}/>
      </Routes>

      
    </>
  );
}

export default App;