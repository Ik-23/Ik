import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Irfan K</a>

      <ul className='portfolio__links'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        {/* <li><a href="#projects">Projects</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://instagram.com/_.ik.__?igshid=YmMyMTA2M2Y=" target='_blank'><BsInstagram/></a>
        <a href="https://github.com/Ik-23" target='_blank'><BsGithub/></a>
        <a href="https://www.linkedin.com/in/irfan-kamate-523675224" target='_blank'><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Made with ❤️ by Ik</small>
      </div>

    </footer>
  )
}

export default Footer