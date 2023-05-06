import React from 'react';
import '../Skills/Skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {AiFillHtml5} from 'react-icons/ai'
import {BsFiletypeCss} from 'react-icons/bs'
import {IoLogoJavascript} from 'react-icons/io'
import {FiFigma} from 'react-icons/fi'
import {TbBrandBootstrap} from 'react-icons/tb'
import {TbBrandTailwind} from 'react-icons/tb'
import {DiReact} from 'react-icons/di'
import { useEffect } from 'react';
const Skills = () => {
    useEffect(()=>{
        AOS.init({duration: 2000})
      })
  return (
    <div className='skills-main container' data-aos="fade-up" id='skills'>
              <div className="title-box">
      <h2 className='title'>Skills</h2>
      <p className='subtitle-box'>My techinal level</p>
      </div>
     <div className="row">
    <div className="col">
        <div className="skills-content">
            <div className="skills-icon">
                <AiFillHtml5/>
            </div>
            <div className="skills-title">HTML</div>
            <div className="skills-subtitle">97%</div>
        </div>
    </div>
    <div className="col">
        <div className="skills-content">
            <div className="skills-icon">
                <BsFiletypeCss/>
            </div>
            <div className="skills-title">Css</div>
            <div className="skills-subtitle">95%</div>
        </div>
    </div>
    <div className="col">
        <div className="skills-content">
            <div className="skills-icon">
                <IoLogoJavascript/>
            </div>
            <div className="skills-title">JS</div>
            <div className="skills-subtitle">40%</div>
        </div>
    </div>
    <div className="col">
        <div className="skills-content">
            <div className="skills-icon">
                <FiFigma/>
            </div>
            <div className="skills-title">Figma</div>
            <div className="skills-subtitle">99%</div>
        </div>
    </div>
    <div className="col">
        <div className="skills-content">
            <div className="skills-icon">
                <TbBrandBootstrap/>
            </div>
            <div className="skills-title">Bootstrap</div>
            <div className="skills-subtitle">95%</div>
        </div>
    </div>
    <div className="col">
        <div className="skills-content">
            <div className="skills-icon">
                <TbBrandTailwind/>
            </div>
            <div className="skills-title">Tailwind Css</div>
            <div className="skills-subtitle">55%</div>
        </div>
    </div>
    <div className="col">
        <div className="skills-content">
            <div className="skills-icon">
                <DiReact/>
            </div>
            <div className="skills-title">React</div>
            <div className="skills-subtitle">35%</div>
        </div>
    </div>
    </div> 
    </div>
  )
}

export default Skills
