import React from 'react'

function Contact() {
  return (
   <section id="contact">
        <h3>Contact me</h3>
        <div className="contact-form-div">
            <form className='contact-form'>
                <input type="text" placeholder='Enter your Fullname'/>
                <input type="email" placeholder='Enter your Email'/>
                <textarea  name="message" rows="5" placeholder='Enter your message'/>
                <button type="submit" value="send" className='submit-btn'>Send</button>
            </form>

            
        </div>
       
   </section>
  )
}

export default Contact