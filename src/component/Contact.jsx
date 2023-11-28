import React, { useRef } from 'react';
import github from '../assets/github1.png';
import linkedin from '../assets/linkedin1.webp';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ehfub6g', 'template_cvcb8xd', form.current, 'lcn48yiSWOhtkFBNWgB9w')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
   <section id="contact">
        <h3>Contact me</h3>
        <div className="contact-form-div">
            <form className='contact-form' ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder='Enter your Fullname' className='name' name='your_name'/>
                <input type="email" placeholder='Enter your Email' className='email' name='your_email'/>
                <textarea  name="message" rows="5" placeholder='Enter your message' className='msg'/>
                <button type="submit" value="send" className='submit-btn'>Send</button>
            </form>
            <div className="profile-links">
              <img src={github} alt="Github" className='link'/>
              <img src={linkedin} alt="Linkedin" className='link'/>
            </div>
            
        </div>
       
   </section>
  )
}

export default Contact