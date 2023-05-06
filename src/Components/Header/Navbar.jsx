import React,{useEffect, useState} from 'react'
import './Navbar.css';
import myLogo from '../../assets/logo.png'
import { HashLink as Link } from 'react-router-hash-link';
const Navbar = () => {
    window.addEventListener("scroll",function(){
        const header = document.querySelector(".header")
        if(this.scrollY >= 80) header.classList.add("scroll-header")
        else header.classList.remove("scroll-header")
    })
  const[Toggle ,showMenu]= useState(false);
  const [activeNav, setActiveNav] = useState("#home")
  return (
    <header className='header'>
        <nav className='nav container'>
            <a href="index.html" className='nav-logo'>
             <img src={myLogo}/>
              Sarvind Up
            </a>

            <div className={Toggle ? "nav-menu show-menu" : "nav-menu"}>
                <ul className="nav-list grid">
                    <li className="nav-items">
                        <a href="#home" className={activeNav === "#home" ? "nav-link main-active" : "nav-link"} onClick={() => setActiveNav('#home') }>
                            Home
                        </a>
                    </li>
                    <li className="nav-items">
                        <a href='#about' className={activeNav === "#about" ? "nav-link main-active" : "nav-link"} onClick={() => setActiveNav('#about') }>
                            About
                        </a>
                    </li>
                    <li className="nav-items">
                        <a  href='#services' className={activeNav === "#services" ? "nav-link main-active" : "nav-link"} onClick={() => setActiveNav('#services') }>
                            Services
                        </a>
                    </li>
                    <li className="nav-items">
                        <a href="#skills" className={activeNav === "#skills" ? "nav-link main-active" : "nav-link"} onClick={() => setActiveNav('#skills') }>
                            Skills
                        </a>
                    </li>
                    <li className="nav-items">
                        <a href="#contact" className={activeNav === "#contact" ? "nav-link main-active" : "nav-link"} onClick={() => setActiveNav('#contact') }>
                            Contact
                        </a>
                    </li>
                </ul>
                <div className="nav-close">
                <i
                 className='uil uil-times nav-close'
                  onClick={()=> showMenu(!Toggle)}></i>
                </div>
            </div>
            <div className="nav-toggle" onClick={()=> showMenu(!Toggle)}>
                <i className="uil uil-ellipsis-v"></i>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
