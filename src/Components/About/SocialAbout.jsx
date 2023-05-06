import React from 'react'
import  {RiFacebookLine} from 'react-icons/ri'
import  {CiTwitter} from 'react-icons/ci'
import  {TbBrandTelegram} from 'react-icons/tb'
import { MdOutlineWhatsapp } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { FiInstagram} from "react-icons/fi";
import '../About/About.css'
const SocialAbout = () => {
  return (
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
  )
}

export default SocialAbout
