import React from 'react'
import './header.css'
import CTA from './CTA'
// import ME from '../../assets/Ik-1.jpg'
import Socials from './Socials'

import { Typewriter } from 'react-simple-typewriter'


import headerImage from '../../assets/header-img.svg'


const header = () => {



  const handleType = (count: number) => {
    console.log(count)}


  const handleDone = () => {
    console.log(`Done after 50 loops!`)
  }


  return (
    <header>
      <div className="container header__container">
        <h5>Hi I'm</h5>
        <h1>Irfan Kamate</h1>


        <h5 className="text-light"     style={{ margin: 'auto 0', fontWeight: 'normal' }}>I am{' '}
            
            <span style={{ color: '#4db5ff', fontWeight: 'bold' }}>
              <Typewriter
                words={['an Artist', 'a Web Developer']}
                loop={50}
                cursor
                cursorStyle='_'
                typeSpeed={100}
                deleteSpeed={60}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}
              />
            </span>
        </h5>

        <CTA/>
        <Socials/>

        <div className="me">
          {/* <img src={ME} alt=''></img> */}
          <img className='header__img' src={headerImage} alt=''></img>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>


      </div>
    </header>
  )
}


export default header
