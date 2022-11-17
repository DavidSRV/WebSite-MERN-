import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light shadow ">
  <div class="container">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/About">About</Link>
        </li> 
        <li class="nav-item">
          <Link class="nav-link" to="/Services">Service</Link>
        </li> 
        <li class="nav-item">
          <Link class="nav-link" to="/Contact">Contact</Link>
        </li>
        
      </ul>
      <Link class="navbar-brand fw-bolder fs-4 mx-auto" to="/">Fine Art</Link>
      <Link to='/Login' className="btn btn-outline-primary ms-4 px-4 rounded-pill">
        <i className="fa fa-sign-in me-2"></i> login</Link>
      <Link to='/Register' className="btn btn-outline-primary ms-2 px-4 rounded-pill"> <i className="fa fa-user-plus me-2"></i>Register</Link>
    </div>
  </div>
</nav>
  )
}
