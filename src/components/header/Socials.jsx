import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const Socials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/irfan-kamate" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Ik-23" target="_blank"><BsGithub/></a>
        <a href="https://instagram.com/_.ik.__?igshid=YmMyMTA2M2Y=" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default Socials