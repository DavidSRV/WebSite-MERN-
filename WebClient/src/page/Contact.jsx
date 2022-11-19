import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import contact from "../assets/img/contact.jpg";

function Contact() {

  const [msg, setMsg] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleMsg = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setMsg({ ...msg, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = msg;

    try {
      const res = await fetch("/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      if (res.status === 400 || !res) {
        window.alert("Message Not Sent. Try Again later!");
      } else {
        window.alert("Message Sent");

        setMsg({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

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
            <form onSubmit={handleSubmit} method="POST">
              <div class="mb-3">
                <label for="name" class="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                  aria-describedby="emailHelp"
                  placeholder="Jhon Doe"
                  value={msg.name}
                  onChange={handleMsg}
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
                  name="email"
                  placeholder="JhonDoe@email.com"
                  value={msg.email}
                  onChange={handleMsg}
                />
              </div>
              <div class="mb-3">
                <label htmlFor="massage" className="form-label">
                  Your Massage Here!
                </label>
                <textarea
                  className="form-control"
                  id="text-area"
                  rows="5"
                  name="message"
                  value={msg.message}
                  onChange={handleMsg}
                ></textarea>
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
