import React from "react";

export default function Home() {
  return (
    <section id="home">
      <div className="container">
        <div className="row justify-content-center mt-5 ">
          <div className="col-md-8">
            <h1 className="display-4 fw-bolder mb-4 mt-4 text-center text-white">Feels the Fresh Bussinnes Perspective</h1>
            <p className="lead text-center fs-4 mb-4 text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis cum ab ad consectetur voluptatibus quidem architecto tenetur ratione, aliquam non, tempore voluptates excepturi harum earum mollitia maxime possimus laudantium ullam.</p>
            <div className="buttons d-flex justify-content-center">
            <button className="btn btn-light me-4 rounded-pill px-4 py-2">Get Quote</button>
            <button className="btn btn-outline-light rounded-pill px-4 py-2">Our Services</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
