import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/COMPONENT/Navbar.jsx';
import Home from '../src/COMPONENT/Home.jsx';
import About from '../src/COMPONENT/About.jsx';
import Contact from '../src/COMPONENT/Contact.jsx';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path= "About" element={ <About/>}/>
          <Route path="contact" element={<Contact />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
