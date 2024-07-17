import React from "react";
import { Typewriter } from "react-simple-typewriter";
function Home() {
  return (
    <>
      <div
        id="home"
        className="container-fluid bg-dark bg-image mt-5  pt-4 section-bg"
      >
        <div className="row">
    
    <div
      className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center"
      data-aos="zoom-out-left"
      data-aos-duration="2000"
    >
        <div
          className="home-text m-5 p-5 fs-3 text-white"
          data-aos="zoom-out-left"
          data-aos-duration="2000"
        >
          <h3>Hi,</h3>
          <p>
            <p>
              I'm{" "}
              <span className="name text-orange">
                <Typewriter
                  words={["Vidhya"]}
                  loop={2}
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </p>
            An enthusiastic{" "}
            <span className="role text-orange">
              <Typewriter
                words={[
                  "MERN Stack Developer",
                  "Fullstack Developer",
                  "Web Developer",
                ]}
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
            href="https://drive.google.com/file/d/1QX10VJ3MUgR1YbAZfm7lV73hwlRk3Kqj/view?usp=sharing"
            target="_blank"
          >
            Download Resume
          </a>
        </div>
        </div>
        <div
      className="col-lg-6 col-md-6 col-sm-12"
      
    >
        <div className="home-img mt-5 pt-5 ms-4 ps-4">
          <img
            src="https://llllline.com/images/thumbs/woma/woman-girl-with-laptop-vector-0000079698-800.webp"
            alt="MyImage"
            className="myImage"
            data-aos="flip-right"
            data-aos-duration="3000"
          ></img>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default Home;
