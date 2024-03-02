import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import LandingPage from './Pages/LandingPage/LandingPage';
import PropertyPage from './Pages/PropertyPage/PropertyPage';
import Login from './Pages/SignUp/Login';
import SignUp from './Pages/SignUp/SignUp';
import OTP from './Pages/SignUp/OTP';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><LandingPage/></>}/>
        <Route path="/hotel" element={<><PropertyPage/></>}/>
        <Route path="/login" element={<><Login/></>}/>
        <Route path="/SignUp" element={<><SignUp/></>}/>
        <Route path="/OTP" element={<><OTP/></>}/>
      </Routes>
    </Router>
  );
}

export default App;
