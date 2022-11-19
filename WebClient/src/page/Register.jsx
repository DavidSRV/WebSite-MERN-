import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Register() {

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({...user, [name]:value})

  }

  const history = useNavigate();

  const handleSubmit =  async (e) =>{
    e.preventDefault();

    const {username, email, password} = user;

    try {

      const res = await fetch('/register', {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },

        body: JSON.stringify({
          username, email, password 
        })
      })

      if(res.status === 400 || !res){
        window.alert("Already Used Details")
      }else{
        window.alert("Registered Successfully");
        history('/login');

        //history.pushState('/login ')
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section>
      <div className="container shadow my-5">
        <div className="row justify-content-end">
          <div className="col-md-5 d-flex flex-column order-2 align-items-center text-white justify-content-center form">
            <h1 className="display-4 fw-bolder">Hello Friend</h1>
            <p className="lead text-center">Enter Your Details to Register </p>
            <h5 className="mb-4">Or</h5>
            <Link
              to="/Login"
              className="btn btn-outline-light rounded-pill pb-2 w-50"
            >
              Login
            </Link>
          </div>
          <div className="col-md-6 p-5">
            <div className="display-6 fw-bolder mb-5">REGISTER</div>
            <form onSubmit={handleSubmit} method="POST">
              <div class="mb-3">
                <label for="name" class="form-label">
                  Username
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="username"
                  value={user.username}
                  onChange={handleInput}
                />
              </div>

              <div class="mb-3">
                <label for="email" class="form-label">
                  Email
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={handleInput}
                />
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  I Agree Terms and Conditions
                </label>
              </div>
              <button type="submit" class="btn btn-outline-primary w-100 mt-3">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
