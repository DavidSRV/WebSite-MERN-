import React from "react";
import contact from "../assets/img/contact.jpg";

function Contact() {
  return (
    <section id="contact">
      <div className="container my-5 py-5">
        <div className="row mb-5">
          <div className="col-12">
            <h3 className="fs-5 text-center mb-0">Contact Us </h3>
            <h1 className="display-6 text-center mb-0">
              Have Some <b>Question?</b>
            </h1>
            <hr className="w-25 mx-auto" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img className="w-75" src={contact} alt="Contact" />
          </div>
          <div className="col-md-6">
            <form>
              <div class="mb-3">
                <label for="name" class="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  aria-describedby="emailHelp"
                  placeholder="Jhon Doe"
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="JhonDoe@email.com"
                />
              </div>
              <div class="mb-3">
                <label htmlFor="massage" className="form-label">Your Massage Here!</label>
                <textarea className="form-control" id="text-area" rows="5"></textarea>
              </div>
              <button type="submit" className="btn btn-outline-primary px-4">
                Send Massage <i className="fa fa-paper-plane ms-2"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
