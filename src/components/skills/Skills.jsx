import React from 'react'
import './Skills.css'
// import {RiChatCheckFill} from 'react-icons/ri'

const Skills = () => {


  return (
    <section id="skills">
      <div className="container">
        <div className="skills-box">
          <h1>Skills</h1>
          <p className='text-light progress'>Progressing...⌛</p>

{/* ======================================================================= */}
            <div className="container skill__container">
                {/* <h3>Frontend Development</h3> */}
                <div className="skill__content">
                  <article className='skill__details'>
                    {/* <RiChatCheckFill/> */}
                    <h4>HTML</h4>
                    <small className='text-light'>70%</small>
                  </article>

                  <article className='skill__details'>
                    {/* <RiChatCheckFill/> */}
                    <h4>CSS</h4>
                    <small className='text-light'>70%</small>
                  </article>

                  <article className='skill__details'>
                    {/* <RiChatCheckFill/> */}
                    <h4>BootStrap5</h4>
                    <small className='text-light'>70%</small>
                  </article>

                  <article className='skill__details'>
                    {/* <RiChatCheckFill/> */}
                    <h4>React</h4>
                    <small className='text-light'>40%...⌛</small>
                  </article>

                  <article className='skill__details'>
                    {/* <RiChatCheckFill/> */}
                    <h4>UI/UX Design</h4>
                    {/* <small className='text-light'>50%...⌛</small> */}
                  </article>

                  <article className='skill__details'>
                    {/* <RiChatCheckFill/> */}
                    <h4>MySQL</h4>
                    <small className='text-light'>70%</small>
                  </article>

                  <article className='skill__details'>
                    {/* <RiChatCheckFill/> */}
                    {/* <h4>Node JS</h4>
                    <small className='text-light'>40%...⌛</small> */}
                  </article>
                  
                  <article className='skill__details'>
                    {/* <RiChatCheckFill/> */}
                    {/* <h4>JavaScript</h4> */}
                    {/* <small className='text-light'></small> */}
                  </article>

                </div>
            </div>
{/* ======================================================================= */}


            </div>
      </div>
    </section>
  )
}

export default Skills


