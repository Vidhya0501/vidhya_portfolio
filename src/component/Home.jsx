import React from "react";

function Home() {
  return (
    <>
      <section
        id="home"
        className="d-flex justify-content-between bg-dark mt-5 "
      >
        <div className="home-text m-5 p-5 fs-3 text-white">
          <h3>Hi,</h3>
          <p>
            I'm <span className="name text-orange"> Vidhya</span>. <br />
            An enthusiastic{" "}
            <span className="role text-orange">MERN Stack Developer.</span>
          </p>

          <a
            className="btn text-orange border"
            href="https://drive.google.com/file/d/1QccaRgIWribL1OkjSwu1CoszDXtNHSRV/view?usp=sharing"
            target="_blank"
          >
            Download Resume
          </a>
        </div>

        <div className="home-img m-5 p-5">
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
