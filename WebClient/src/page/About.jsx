import React from "react";
import about from "../assets/img/about1.jpg";

function About() {
  return (
    <section id="about">
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-md-6">
            <img src={about} alt="About-img" className="w-75 mt-5" />
          </div>
          <div className="col-md-6">
            <h3 className="fs-5 mb-0">About Us</h3>
            <h1 className="display-6 mb-2">
              Who <b>We</b> Are
            </h1>
            <hr className="w-50" />
            <p className="lead mb-4">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
              amet ducimus minima nulla enim a illo quos unde perferendis in
              fugiat, eos ab animi cumque reiciendis nobis autem earum itaque!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Corrupti, incidunt architecto quidem molestias error quam
              cupiditate.
            </p>
            <button className="btn btn-primary rounded-pill px-4 py-2">
              Get Started
            </button>
            <button className="btn btn-primary rounded-pill px-4 py-2 ms-2">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
