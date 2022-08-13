import React from 'react'
import './projects.css'
import IMG1 from '../../assets/1.png'
import IMG2 from '../../assets/2.png'
import IMG3 from '../../assets/3.png'
import IMG4 from '../../assets/4.png'


{/* ============================================================================================== */}

const data = [
  {
    id:1,
    image: IMG1,
    title: 'Open Course Curriculum - Smart India Hackathon',
    github: 'https://github.com/Ik-23/SIH',
    demo: 'https://default-eduhub.web.app/'
  },
   {
    id:2,
    image: IMG2,
    title: 'E-commerce Website',
    github: 'https://github.com/Ik-23/E-commerce_website',
    demo: 'https://ik-23.github.io/E-commerce_website/'
  },
  
  {
    id:3,
    image: IMG3,
    title: 'Quora Clone',
    github: 'https://github.com/Ik-23/quora-clone-ik',
    demo: 'https://quoracloneirfan.herokuapp.com/'
  },
  {
    id:4,
    image: IMG4,
    title: 'Travel System - Frontend',
    github: 'https://github.com/Ik-23/travels',
    demo: 'https://ik-23.github.io/travels/'
  },
  
  // {
  //   id:5,
  //   image: IMG5,
  //   title: '',
  //   github: '',
  //   demo: ''
  // },
  // {
  //   id:6,
  //   image: IMG6,
  //   title: '',
  //   github: '',
  //   demo: ''
  // },
  
]

{/* ============================================================================================== */}

const projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container projects__container">

        {
          data.map(({id, image, title, github, demo}) => {
            return(
      
      //======================================================================================= 
              <article key={id} className='projects__item'>
                <div className="projects__item-image">
                  <img src={image} alt="" />
                </div>

                <h3>{title}</h3>

                <div className="projects__items-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Link</a>
                </div>
              </article>
      //=======================================================================================
      
            )
          })
        }
      </div>
    </section>
  )
}

export default projects