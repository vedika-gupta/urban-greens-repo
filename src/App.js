import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
// All pages
import Home from './pages/Home';//
import Home2 from './pages/Home2';//
import Home3 from 'D:/REPO/Learning2.0/UrbanGreens/src/buyer/Home3.js';
import Contact from './pages/Contact';//
import DemoProduct from './pages/DemoProduct';

import {useDocTitle} from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import SignUp from './pages/SignUp';//
import LogIn from './pages/LogIn';//
import { auth } from './pages/firebase';

function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("UrbanGreens");


  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newhome" element={<Home2 />} />
            <Route path="/buyer" element={<Home3 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}


export default App;
