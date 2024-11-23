import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Pharmacist from './pages/Pharmacist';
import MyAppointments from './pages/MyAppointments';
import Appointment from './pages/Appointment';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import MyProfile from './pages/Myprofile';

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pharmacist" element={<Pharmacist />} />
        <Route path="/pharmacist/:speciality" element={<Pharmacist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/appointment/:pharmacistId" element={<Appointment />} />
      </Routes>
    </div>
  );
};

export default App;
