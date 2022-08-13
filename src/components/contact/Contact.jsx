import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g0vlc2d', 'template_vtxmmyh', form.current, '9gWHNcObzeksCr2C0')
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });

      e.target.reset()
  };

  return (
    <section className='contact__body' id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>E-mail</h4>
            <h5>irfank0223@gmail.com</h5>
            <a href="mailto:irfank0223@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <BsInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>@_.ik.__</h5>
            <a href="https://instagram.com/_.ik.__?igshid=YmMyMTA2M2Y=" target="_blank">Send a message</a>
          </article>
          
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            {/* <h5>irfank0223@gmail.com</h5> */}
            <a href="https://api.whatsapp.com/send?phone=7259425023" target="_blank">Send a message</a>
          </article>

        </div>

{/* ============================================================ */}

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="email" name='email' placeholder='Your Email' required/>
            <textarea name='message' rows="7" placeholder='Your Message' required/>

            <button type='submit' className='btn btn-primary' style={{padding: '0.80rem', alignSelf: 'flex-end'}}>Send Message</button>

          </form>
      </div>
    </section>
  )
}

export default Contact
