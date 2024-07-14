import React from "react";
import reactlogo from "../assets/reactjs.png";
import expressjs from "../assets/expressjs.png";
import mongodb from "../assets/mongodb.png";

function Skills() {
  return (
    <>
      <section id="skills" className="bg-dark text-white p-5 section-bg">
        <h4 className="fst-italic fw-bold fs-4 mt-5 pt-5 text-center heading">SKILLS</h4>

        <div className="tech-list mt-5 border rounded" data-aos="flip-up"
     data-aos-duration="3000">
          <div className="skill-set1 d-flex justify-content-between flex-wrap m-3 p-3" >
            <img
              src="https://static-00.iconduck.com/assets.00/html-5-icon-726x1024-evem6gg5.png"
              alt="html5"
              className="tech-list-item"
              style={{ width: "100px", height: "120px" }}
              data-aos="flip-down"
              data-aos-duration="1000"
            />
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-css3-8-1175200.png"
              alt="css3"
              className="tech-list-item"
              style={{ width: "100px", height: "120px" }}
              data-aos="flip-down"
              data-aos-duration="1000"
            />
            <img
              src="https://static-00.iconduck.com/assets.00/javascript-js-icon-2048x2048-nyxvtvk0.png"
              alt="js"
              className="tech-list-item"
              style={{ width: "100px", height: "120px" }}
              data-aos="flip-down"
              data-aos-duration="1000"
            />
            <img
              src={reactlogo}
              alt="react"
              className="tech-list-item"
              style={{ width: "100px", height: "120px" }}
              data-aos="flip-down"
              data-aos-duration="1000"
            />
          </div>
          <div className="skill-set2 d-flex justify-content-between flex-wrap m-5 p-5">
            <img
              src="https://i.pinimg.com/1200x/d4/26/72/d42672d4d185739d26257ed5c653c740.jpg"
             
              alt="NodeJS"
              className="tech-list-item"
              style={{ width: "100px", height: "100px" }}
              data-aos="flip-down"
              data-aos-duration="1000"
            />
            <img
              src={expressjs}
              alt="ExpressJS"
              className="tech-list-item"
              style={{ width: "100px", height: "100px" }}
              data-aos="flip-down"
              data-aos-duration="1000"
            />
            <img
              src={mongodb}
              alt="MongoDB"
              className="tech-list-item"
              style={{ width: "100px", height: "100px" }}
              data-aos="flip-down"
              data-aos-duration="1000"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png"
              alt="Bootstrap"
              className="tech-list-item"
              style={{ width: "100px", height: "100px" }}
              data-aos="flip-up"
              data-aos-duration="1000"
              
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
