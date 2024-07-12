import React from "react";
import {Typewriter} from "react-simple-typewriter"
function Home() {
  
 
  return (
    <>
      <section
        id="home"
        className="d-flex justify-content-between bg-dark mt-5  pt-4 section-bg"
      >
        <div className="home-text m-5 p-5 fs-3 text-white" data-aos="zoom-out-left" data-aos-duration="2000">
          <h3>Hi,</h3>
          <p>
      
            <p>I'm {' '} <span className="name text-orange" ><Typewriter
            words={["Vidhya"]}
            loop={2}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          /></span></p>
            An enthusiastic{" "}
            <span className="role text-orange">
            <Typewriter
            words={['MERN Stack Developer', 'Fullstack Developer', 'Web Developer']}
            loop={5}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
            
          />
              </span>
          </p>

          <a
            className="btn text-orange border"
            href="https://drive.google.com/file/d/1QccaRgIWribL1OkjSwu1CoszDXtNHSRV/view?usp=sharing"
            target="_blank"
          >
            Download Resume
          </a>
        </div>

        <div className="home-img m-5 p-5" data-aos="flip-right" data-aos-duration="1000">
          <img
            src="https://llllline.com/images/thumbs/woma/woman-girl-with-laptop-vector-0000079698-800.webp"
            alt="MyImage"
            className="myImage"
          ></img>
        </div>
      </section>
    </>
  );
}

export default Home;
