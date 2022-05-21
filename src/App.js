
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Reviews from './Pages/Reviews/Reviews';
import NavBar from './Pages/Share/NavBar';


function App() {
  return (
    <div className="px-12 max-w-7xl mx-auto">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/appointment" element={<Appointment></Appointment>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/review" element={<Reviews></Reviews>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes> 
      
      
    </div>
  );
}

export default App;
