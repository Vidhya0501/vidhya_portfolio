import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from 'react-hot-toast';



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4tg29ce",
        "template_vtmxbz8",
        form.current,
        "AMtxshHVEYtLsBLYb"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          toast.success("Email sent!")
        },
        (error) => {
          console.log(error.text);
          toast.error("Error occurred!")
        }
      );
  };

  return (
    <>
      <div className="conatiner-fluid bg-dark bg-image text-white" >
        <section id="contact" data-aos="zoom-in-left"  data-aos-duration="2000">
          <h4 className="fst-italic fw-bold fs-4 text-center pt-3 heading">
            Contact me
          </h4>
          <div className="contact-form-div d-flex justify-content-center p-3 ">
      <form ref={form} onSubmit={sendEmail} className='border p-5 rounded shadow'>
       
        
        <input type="text" name="user_name" placeholder="Name" className="mb-3 p-1 w-100 border rounded transparent-input"/> 
        
        
        
        <input type="email" name="user_email" placeholder="Email" className="mb-3 p-1 w-100 border rounded transparent-input"/>
        
        
        <div >
        
        <textarea rows="5" cols="50" name="message" placeholder="Message" className="mb-3 p-1 w-100 border rounded transparent-input"/>
        </div>
       
        <input type="submit" value="Send" className='btn text-orange border w-100' />
        
      </form>
      </div>
        </section>
        <div className="social-profiles text-center">
          <a
            href="https://www.linkedin.com/in/vidhya-s-92884b27b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BYilFnS0iRRCjygq%2FLiIqoQ%3D%3D"
            target="_blank"
            data-aos="zoom-in-left"  data-aos-duration="2000"
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png"
              style={{ width: "80px", height: "80px" }}
            />
          </a>
          <a href="https://github.com/Vidhya0501" target="_blank" data-aos="zoom-in-left"  data-aos-duration="3000">
            <img
              src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png"
              style={{ width: "50px", height: "50px" }}
            />
          </a>
        </div>
        <hr />
        <footer className="footer text-gray fs-6 text-center p-2">
          <span>Copyright@2023 Vidhya.All rights reserved.</span>
        </footer>
      </div>
    </>
  );
};

export default Contact;

