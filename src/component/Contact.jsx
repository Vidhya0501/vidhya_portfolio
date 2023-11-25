import React from 'react';
import github from '../assets/github1.png';
import linkedin from '../assets/linkedin1.webp';
function Contact() {
  return (
   <section id="contact">
        <h3>Contact me</h3>
        <div className="contact-form-div">
            <form className='contact-form'>
                <input type="text" placeholder='Enter your Fullname' className='name'/>
                <input type="email" placeholder='Enter your Email' className='email'/>
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