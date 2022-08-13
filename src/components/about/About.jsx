import React from 'react'
import './about.css'
import ME from '../../assets/Ik.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import {GiPaintBrush} from 'react-icons/gi'
import {GiAchievement} from 'react-icons/gi'

const About = () => {
  return (
    <section id='about'>
        <h5 className='h5'>Get To Know</h5>
        <h2 className='h2'>About Me...</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt='About image'/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <a href="https://instagram.com/_.ik.__?igshid=YmMyMTA2M2Y=" target='_blank'>
              <FaAward className='about__icon'/>
              <h2 className='h2__sketching'>Sketching <GiPaintBrush/></h2>
              </a>
            </article>

            <article className='about__card'>
              <a href="#projects">
              <VscFolderLibrary className='about__icon'/>
              <h2 className='h2__sketching'>Projects <GiAchievement/></h2>
              </a>
            </article>
          </div>

          <p className='about__content'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ullam, voluptatum aperiam aliquam et nemo quos quia sint maxime excepturi doloremque voluptatibus, magni in eaque.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>
    </section>
  )
}

export default About
