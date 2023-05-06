import React from 'react'
import '../Contact/Contact.css';
import ContactImg from '../../assets/profile.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import  {RiFacebookLine} from 'react-icons/ri'
import  {CiTwitter} from 'react-icons/ci'
import  {TbBrandTelegram} from 'react-icons/tb'
import { MdOutlineWhatsapp } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import {FiInstagram} from "react-icons/fi"
const Contact = () => {
    useEffect(()=>{
        AOS.init({duration: 1000})
      })
    
  return (
    <div className="contact-section" data-aos="fade-right" id='contact'>
            <div className='contact-main container'>
              <div className="title-box">
      <h2 className='title'>Contact Me</h2>
      <p className="subtitle-box">
        Get in touch
      </p>
      <div className="row">
        <div className="col">
          <div className="contact-img-box">
          <img src={ContactImg} className='contact-img'/>
          </div>
          <div className="footer-icon">
          <div className='social-media-box'>
        <a href="https://www.facebook.com/sarvind.up">
        <li>
        <RiFacebookLine/>
        </li>
        </a>
        <a href="https://twitter.com/sarvinddesigner">
        <li>
        <CiTwitter/>
        </li>
        </a>
        <a href="https://t.me/sarvindupdesigner">
        <li>
        <TbBrandTelegram/>
        </li>
        </a>
        <a href="https://wa.me/qr/554UZ3BWZX6DO1">
        <li>
        <MdOutlineWhatsapp/>
        </li>
        </a>
        <a href="https://github.com/Cyberduckkk">
        <li>
        <FiGithub/>
        </li>
        </a>
        <a href="https://instagram.com/trez_yn?igshid=ZDdkNTZiNTM=">
          <li>
            <FiInstagram/>
          </li>
        </a>
    </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Contact
