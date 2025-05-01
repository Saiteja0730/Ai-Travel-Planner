import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./login_image.png";
import "./signup.css";
import { auth } from "./Firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {toast} from "react-hot-toast";

const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLoginClick = (e) => {
    e.preventDefault();

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailRegex.test(email)) {
      alert("Invalid email input.");
    } else {
      
      navigate("/");
    }
  };

  function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(async (res) => {
        console.log(res);
        if(res.user){
          toast.success("Succesfully loggedin", {position:"top-center"})
          navigate("/")
        }
      })
      .catch((error) => {
        console.error("Google login error:", error);
      });
  }
      

  return (
    <div className="parent-log">
      {/* this is my login image */}
      <div className="loginimage">
        <img src={logo} alt="Logo" />
      </div>

      {/* this is the login content */}

      <div className="signpage">
        <form className="signform">
          <div className="sign-up-section">
            <p className="sign-up-text">Sign up with:</p>
            <div className="social-buttons">
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
              </button>
              <button type="button" className="btn btn-link btn-floating mx-1" onClick={googleLogin}>
                <i className="fab fa-google"></i>
              </button>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-twitter"></i>
              </button>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-github"></i>
              </button>
            </div>
          </div>

          <p className="text-center color-white">or:</p>

          <div className="form-outline mb-4">
            <input
              type="text"
              id="registerName"
              className="form-control"
              placeholder="Enter your name..."
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-outline mb-4">
            <input
              type="email"
              id="registerEmail"
              className="form-control"
              placeholder="Enter your email address..."
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-outline mb-4">
            <input
              type="password"
              id="registerPassword"
              className="form-control"
              placeholder="enter your password..."
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-check d-flex justify-content-center mb-4">
            <input
              className="form-check-input ms-5 mt-1 "
              type="checkbox"
              id="registerCheck"
              defaultChecked
            />
            <label className="form-check-label " htmlFor="registerCheck">
              <p className="agreement-text">
                I have read and agree to the terms
              </p>
            </label>
          </div>

          <Link
            to="/"
            onClick={handleLoginClick}
            className="btn btn-primary btn-block mb-3 unstyled-login"
          >
            Log in
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
