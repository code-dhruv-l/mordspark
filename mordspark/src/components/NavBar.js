import React, { useState, useEffect } from 'react';
import './components.css';
import logo from './Image/logo.png';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); 
 
  useEffect(() => {
    const handleScroll = () => {
      
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    
    window.addEventListener('scroll', handleScroll);

   
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-logo">
        <Link to="/"><img src={logo} alt="Logo" className="logo-image" style={{ marginLeft: "30px" }}/></Link>
      </div>
   
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li>
          
          <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" style={{ marginTop: "-9px"}}><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg> Home</Link>
        </li>
        <li>
          <Link to="/About"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" style={{marginRight: "5px", marginBottom: "2px"}}><path d="m160-419 101-101-101-101L59-520l101 101Zm540-21 100-160 100 160H700Zm-220-40q-50 0-85-35t-35-85q0-51 35-85.5t85-34.5q51 0 85.5 34.5T600-600q0 50-34.5 85T480-480Zm0-160q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640Zm0 40ZM0-240v-63q0-44 44.5-70.5T160-400q13 0 25 .5t23 2.5q-14 20-21 43t-7 49v65H0Zm240 0v-65q0-65 66.5-105T480-450q108 0 174 40t66 105v65H240Zm560-160q72 0 116 26.5t44 70.5v63H780v-65q0-26-6.5-49T754-397q11-2 22.5-2.5t23.5-.5Zm-320 30q-57 0-102 15t-53 35h311q-9-20-53.5-35T480-370Zm0 50Z"/></svg>Abou Us</Link>
        </li>
        <li>
          <Link to="/Services"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" style={{marginRight: "5px", marginBottom: "2px"}}><path d="M480-400ZM80-160v-400q0-33 23.5-56.5T160-640h120v-80q0-33 23.5-56.5T360-800h240q33 0 56.5 23.5T680-720v80h120q33 0 56.5 23.5T880-560v400H80Zm240-200v40h-80v-40h-80v120h640v-120h-80v40h-80v-40H320ZM160-560v120h80v-40h80v40h320v-40h80v40h80v-120H160Zm200-80h240v-80H360v80Z"/></svg>Services</Link>
        </li>
        <li>
          <Link to="/Projects"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" style={{marginRight: "5px", marginBottom: "2px"}}><path d="m384-336 56-57-87-87 87-87-56-57-144 144 144 144Zm192 0 144-144-144-144-56 57 87 87-87 87 56 57ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>Projects</Link>
        </li>
        <li>
          <Link to="/Contact"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" style={{marginRight: "5px"}}><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h404q-4 20-4 40t4 40H160l320 200 146-91q14 13 30.5 22.5T691-572L480-440 160-640v400h640v-324q23-5 43-14t37-22v360q0 33-23.5 56.5T800-160H160Zm0-560v480-480Zm600 80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Z"/></svg>Contact</Link>
        </li>
      </ul>
      <div className="navbar-spacer"></div>
      <div className={`navbar-toggle ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}