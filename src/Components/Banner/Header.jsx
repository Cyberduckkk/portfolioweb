import React, { useEffect } from 'react'
import './banner.css'
import { useState } from 'react';
import MyProfile from '../../assets/profile.jpg';
import hand from '../../assets/hand.png'
import Social from './Social';
import AOS, { init } from 'aos';
import { HashLink as Link } from 'react-router-hash-link';
import 'aos/dist/aos.css';
const Header = () => {
  useEffect(()=>{
    AOS.init({duration:2000})
  })
  return (
    <section className='banner container'  data-aos="fade-right" id='home'>
      <div className="banner-main">
        <div className="banner-content">
            <div className="banner-txt">
              <Social/>
              <div className="txt">
              <h1 className='subtitle'>Hello I'am Sarvind Up <img src={hand} width={60}/><br /> <span> Professional Web Designer
                  <p><p>They give a wake-up call.</p></p>
                  </span></h1>
                  <div className="btn-box">
                    <Link smooth to="#contact" className='btn'>Get In Touch</Link>
              </div>
              </div>
            </div>
            <div className="banner-img">
              <img src={MyProfile}/>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Header
