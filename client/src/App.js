import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import EventManagement from './components/EventManagement';
import AdminEvent from './components/AdminEvent'; 
import Navbar from './components/Navbar';
import About from './components/About';
import BottomNav from './components/BottomNav';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/events' element={<EventManagement />} />
        <Route path='/adminevents' element={<AdminEvent />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <BottomNav/>
    </Router>
  );
}

export default App;
