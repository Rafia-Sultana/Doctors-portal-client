
import './App.css';
import Navbar from './Pages/Home/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';
import SignUp from './Pages/Login/SignUp';
function App() {
  return (
    <div className='max-w-7xl mx-auto  px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={<Appointment></Appointment>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="signup" element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
