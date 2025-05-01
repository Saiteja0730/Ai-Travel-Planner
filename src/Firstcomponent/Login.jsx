import React, { useState} from "react";
import { Link, useNavigate} from "react-router-dom";
import "./login.css";
import logo from "./login_image.png";
import { OrbitProgress } from "react-loading-indicators";

const Login = () => {

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault(); 

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (emailRegex.test(email)) {
      setLoading(true);
      setTimeout(() => {
        navigate("/dash");
      }, 1500);
      
    } else {
      alert("Invalid email. Redirecting to register.");
      navigate("/signup"); 
    }
  };


  return (
    <div className="parent-log">
      {/* this is my login image */}
      <div className="loginimage">
        <img src={logo} alt="Logo" />
      </div>

      {/* this is the login content */}

      <div className="loginpage">
    {loading ? (
      <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
        <OrbitProgress
          variant="dotted"
          dense
          color="#32cd32"
          size="medium"
          text=""
          textColor=""
        />
      </div>
    ) : (
        <form className="loginform">
          {/* Title */}

          <h3>Login here</h3>

          {/* Email input */}
          <div className="form-outline mb-4 loginemail">
            <input
              type="email"
              id="form2Example1"
              className="form-control"
              placeholder="Enter your email address..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password input */}
          <div className="form-outline mb-4 loginemail">
            <input
              type="password"
              id="form2Example2"
              className="form-control"
              placeholder="Enter your password...!"
            />
          </div>

          <div className="row mb-4 remember-forgot">
            <div className="col remember-me">
              <label
                className="form-check-label-inline"
                htmlFor="form2Example31"
              >
                <input
                  className="form-check-input-inline"
                  type="checkbox"
                  id="form2Example31"
                  defaultChecked
                />
                Remember me
              </label>
            </div>

            <div className="col forgot-password">
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          <Link to="./dash" onClick={handleClick} className="btn btn-primary btn-block mb3 unstyled-submit">
            SUBMIT
          </Link>
          
          <div className="text-center social-login">
            <p>
              Not a member?{" "}
              <a href="#!">
                <Link to="/signup">Register</Link>{" "}
              </a>
            </p>
            <p>sign up with:</p>

            <div className="social-icons">
              <button type="button" className="btn-social">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button type="button" className="btn-social">
                <i className="fab fa-google"></i>
              </button>
              <button type="button" className="btn-social">
                <i className="fab fa-twitter"></i>
              </button>
              <button type="button" className="btn-social">
                <i className="fab fa-github"></i>
              </button>
            </div>
          </div>
        </form>
        )}
      </div>

    </div>
  );
};

export default Login;
