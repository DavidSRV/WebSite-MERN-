import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/_Login.scss";

function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setLogin({ ...login, [name]: value });
  };

  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = login;

    try {
      const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (res.status === 400 || !res) {
        window.alert("Invalid Credentials");
      } else {
        window.alert("Login Succesfull");
        history('/')
        window.location.reload();
        
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <section>
      <div className="container shadow my-5">
        <div className="row">
          <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form">
            <h1 className="display-4 fw-bolder">Welcome Back</h1>
            <p className="lead text-center">Enter Your Credential To Login</p>
            <h5 className="mb-4">Or</h5>
            <Link
              to="/Register"
              className="btn btn-outline-light rounded-pill pb-2 w-50"
            >
              Register
            </Link>
          </div>
          <div className="col-md-6 p-5">
            <div className="display-6 fw-bolder mb-5">LOGIN</div>
            <form onSubmit={handleSubmit}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  name="email"
                  value={login.email}
                  onChange={handleLogin}
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
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
                  value={login.password}
                  onChange={handleLogin}
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Remember me
                </label>
              </div>
              <button type="submit" class="btn btn-primary w-100 mt-3">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
