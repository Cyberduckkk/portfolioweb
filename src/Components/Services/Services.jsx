import React from 'react';
import { useEffect } from 'react';
import '../Services/Service.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {MdOutlineFlightLand} from 'react-icons/md'
import {FaOpencart} from 'react-icons/fa'
import {BsBalloonHeart} from 'react-icons/bs'
import {FiBriefcase} from 'react-icons/fi'
import {MdPhonelink} from 'react-icons/md'
const Services = () => {
  useEffect(()=>{
    AOS.init({duration: 2000})
  })
  return (
    <div className='service-main container' data-aos="fade-up" id='services'>
      <div className="title-box">
      <h2 className='title'>Services</h2>
      <p className='subtitle-box'>We offer professional web design services at <br />
affordable rates to help your business attract more visitors and keep them on your site!😁</p>
      </div>
      <div className="row">
        <div className="col">
          <div className="service-content">
            <div className="category-icon">
              <MdOutlineFlightLand/>
            </div>
            <div className="category-title">
              <h2>Landing Pages</h2>
            </div>
            <div className="category-subtitle">
              <p>Beatiful and effective landing pages for your goals.</p>
            </div>
          </div>
          <div className="service-content">
            <div className="category-icon">
              <FaOpencart/>
            </div>
            <div className="category-title">
              <h2>Ecommerce Design</h2>
            </div>
            <div className="category-subtitle">
              <p>We build digital experiences to meet sales goals for your business.</p>
            </div>
          </div>
          
          <div className="service-content">
            <div className="category-icon">
              <BsBalloonHeart/>
            </div>
            <div className="category-title">
              <h2>Branding</h2>
            </div>
            <div className="category-subtitle">
              <p>Only best solutions that will make your business unique.</p>
            </div>
          </div>
          <div className="service-content">
            <div className="category-icon">
              <FiBriefcase/>
            </div>
            <div className="category-title">
              <h2>Portfolio Design</h2>
            </div>
            <div className="category-subtitle">
              <p>I create animated Portfolio Design For YourSelf.</p>
            </div>
          </div>
          <div className="service-content">
            <div className="category-icon">
              <MdPhonelink/>
            </div>
            <div className="category-title">
              <h2>Responsive Design</h2>
            </div>
            <div className="category-subtitle">
              <p>All designs are responsive design.</p>
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}

export default Services
