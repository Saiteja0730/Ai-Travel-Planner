import React from "react";
import "./footerdash.css";
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Footerdash = () => {

  const handleSubscribe = (e) => {
    e.preventDefault();
    toast.success("Subscribed successfully!", {
      position: "top-right",
      autoClose: 1000,
    });
  };


  return (
    <>
       <section className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h4 className="bethetravel">Be The Traveller</h4> 
            <p className="footer-description">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <ul className="footer-socials">
              <li><a href="#"><FaTwitter /></a></li>
              <li><a href="#"><FaFacebookF /></a></li>
              <li><a href="#"><FaInstagram /></a></li>
              <li><a href="#"><FaGithub /></a></li>
            </ul>
          </div>

          <div>
            <p className="footer-title">Company</p>
            <ul className="footer-links">
              <li><a href="#">About</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Works</a></li>
              <li><a href="#">Career</a></li>
            </ul>
          </div>

          <div>
            <p className="footer-title">Help</p>
            <ul className="footer-links">
              <li><a href="#">Customer Support</a></li>
              <li><a href="#">Delivery Details</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footer-subscribe">
            <p className="footer-title">Subscribe to newsletter</p>
            <form className="footer-form" onSubmit={handleSubscribe}>
              <input type="email" name="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        {/* <hr className="footer-divider" /> */}
        <p className="footer-copyright">
          © Copyright 2025, All Rights Reserved by Indian Government
        </p>
      </div>

      <ToastContainer />
    </section>
    </>
  );
};

export default Footerdash;
