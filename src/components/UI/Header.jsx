import React, { useContext, useState } from 'react'
import { MdOutlineLightMode,MdOutlineDarkMode } from "react-icons/md";
import { NavLink } from 'react-router-dom'
import { OurContext } from '../../context/Provider';
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
    const { theme,ison,toggleTheme,show,setShow} = useContext(OurContext);
    // const [ison,setIsOn] = useState(false);
    // const toggleTheme = () => {
    //  setTheme((prev)=>(prev==="dark"?"light":"dark"));
    //  setIsOn((prev)=>!prev);

    // }
    
  return (  
    <header className={`container ${theme==="dark"?"theme-dark":"theme-light"}`}>
    <div className='logo'>
      <h2>World Explore</h2>       
    </div>
    <nav className={`${show ? "menu-mobile":"menu-web"}`}>
        <ul>
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
        <div className='light-btn'>
        <button onClick={toggleTheme}>
        <span> Switch to</span>  
            <span className={`btn-inside ${ison?"rotate-180":""}` }>
          {theme === "dark" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
            </span>
    
        </button>
      </div>
    </nav>
    <div className='ham-menu'>
      <button onClick={()=>setShow((prev)=>!prev)}>
      <RxHamburgerMenu />
      </button>
    </div>
   
    </header>
  )
}

export default Header
