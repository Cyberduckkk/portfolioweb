import React, { useEffect } from 'react'
import  AboutImg from '../../assets/about.png'
import './About.css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import SocialAbout from './SocialAbout';
const About = () => {
  useEffect(()=>{
    AOS.init({duration: 2000})
  })
  return (
    <div className='about-main '  data-aos="fade-up" id='about'>
      <div className="about container" >
      <h2 className='title'>About Me</h2>
        <div className="about-content row">
          <div className="about-img-box col">
            <img src={AboutImg} className='about-img'/>
          </div>
          <div className="about-text col" >
            <p>Hi! My Name is Sarvind Up.Iam a Web Designer,and i'm very passionate and dedicated to my work.I have acquired the skills and knowledge neccessary to make your project a success</p>
            <SocialAbout/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
