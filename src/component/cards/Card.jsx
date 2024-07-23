import React from "react";

function Card({ data }) {
  return (
    <div className="col d-flex justify-content-between m-2 p-2">
      <div className="flip-box" data-aos="flip-right" data-aos-duration="2000">
        <div className="flip-box-front">
          <div className="card p-1" style={{ width: "18rem", height: "17rem" }}>
            <img
              className="card-img-top"
              src={data.image}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title text-center pt-3">{data.name}</h5>
            </div>{" "}
          </div>
        </div>
        <div className="flip-box-back">
          <div className="card p-1" style={{ width: "18rem", height: "17rem" }}>
            <div className="card-body">
              <p className="card-text text-center">{data.description}</p>
              <p className="card-text text-center">{data.techStack}</p>
              <div className="d-flex justify-content-between">
                <a
                  href={data.sourceLink}
                  className="btn border bg-dark text-orange "
                  target="_blank"
                >
                  Github
                </a>
                <a
                  href={data.deployedLink}
                  className="btn border bg-dark text-orange "
                  target="_blank"
                >
                  Explore Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
