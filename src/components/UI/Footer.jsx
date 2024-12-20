import React from 'react'
import { FaGithub ,FaDiscord } from "react-icons/fa";

import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";
import { MdCopyright } from "react-icons/md";
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
      <div className='social-icons'>
      <NavLink to="https://www.instagram.com/techwhiz__03" className="nav-links" target='_blank'>
      <FiInstagram  />
      </NavLink>
      <NavLink to="https://linkedin.com/in/toheed-qureshi-2a9741264" className="nav-links" target='_blank'>
      <FaLinkedin />
      </NavLink>
      <NavLink to="https://github.com/Toheed-qureshi21" className="nav-links" target='_blank'>
      <FaGithub />
      </NavLink>
        <NavLink className="nav-links" to="https://discord.com/users/toheed-qureshi" target='_blank'>
        <FaDiscord />
        </NavLink>
      </div>
          <ul className='footer-links'>
                  <NavLink to="/" className="nav-links">
                     <li>
                     Home
                     </li>
                     </NavLink>
                     <NavLink to="/country" className="nav-links">
                     <li>
                      Country
                      </li>
                      </NavLink>     
                      <NavLink to="/about" className="nav-links"><li>About</li></NavLink>
                      <NavLink to="/contact" className="nav-links"> <li>Contact </li></NavLink>
                  </ul>
              
      <div>
        <p className='footer-copyright'><MdCopyright />2024 Copyright</p>
      </div>
    </footer>
  )
}

export default Footer
