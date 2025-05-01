import React from "react";
import "./contact.css";
import { Link } from "react-router-dom";
import { AiFillBehanceCircle } from "react-icons/ai";
import Contactus from "../Contact/contact_banner.png";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Contactform from "./ContactForm/Contactform";
import Footersec from "./Footersec/Footersec";
import Googlemaps from "./Googlemap/Googlemaps";

const Contact = () => {
  return (
    <>
      <div className="navBar">
        <div className="logoDiv">
          <AiFillBehanceCircle className="icon" />
          <span>The Traveller</span>
        </div>

        <div className="menu">
          <ul className="nav-list-container">
            <li>
              <Link to="/dash" className="nav-list">
                Home
              </Link>
            </li>
            <li>
              <Link to="/destiny" className="nav-list">
                Destination
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-list">
                Tours
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-list">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/book" className="nav-list">
                Booknow
              </Link>
            </li>
          </ul>
          <div className="signDiv">
            <Link to="/" className="signout">
              Signout
            </Link>
          </div>
        </div>
      </div>

      {/* This is the Contact Component */}
      <div className="contact-container">
        <div className="contact-left">
          <img src={Contactus} alt="contact" />
        </div>

        <div className="contact-right">
          <h2 className="get-in-touch">Get in touch</h2>

          <div className="sliding-wrapper">
            <div className="slide-item">24/7 Availability</div>
            <div className="slide-item">Quick Response</div>
            <div className="slide-item">Will get back soon</div>
          </div>

          <p className="info-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus laudantium delectus. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Voluptatibus laudantium delectus.
          </p>
        </div>
      </div>

      {/* this is the contact details */}
      <div className="frosted-container">
        <div
          className="frosted-card"
          style={{
            backgroundImage:
              "url('https://plus.unsplash.com/premium_photo-1673463876287-13c16606973c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29udGFjdHxlbnwwfHwwfHx8MA%3D%3D')",
          }}
        >
          <div className="card-info">
            <h2>
              <FiPhoneCall /> Phone
            </h2>
            <p>+91 9505993063</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>

        <div
          className="frosted-card"
          style={{
            backgroundImage:
              "url('https://plus.unsplash.com/premium_photo-1677775978565-8ab75fb77f33?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZW1haWx8ZW58MHx8MHx8fDA%3D')",
          }}
        >
          <div className="card-info">
            <h2>
              <FiMail /> Email
            </h2>
            <p>contact@example.com</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>

        <div
          className="frosted-card"
          style={{
            backgroundImage:
              "url('https://plus.unsplash.com/premium_photo-1683492749168-ee69f4d90193?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29jaWFsJTIwbWVkaWF8ZW58MHx8MHx8fDA%3D')",
          }}
        >
          <div className="card-info">
            <h2>Social Media</h2>
            <div className="icons">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>

      {/* this is the contail input field */}
      <Contactform />

      {/* this is the google location */}
      <Googlemaps />

      {/* This is the footer sec */}
      <Footersec />
    </>
  );
};

export default Contact;
