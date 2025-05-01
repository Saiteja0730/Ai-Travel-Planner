import React from "react";
import "./booknow.css";
import { Link, useLocation } from "react-router-dom";
import { AiFillBehanceCircle } from "react-icons/ai";
import Hotelsearch from "./Hotelsearching/Hotelsearch";
import Pricedetail from "./PriceDetails/Pricedetail";

const Booknow = () => {
 
  const location = useLocation();
  const card = location.state?.item;

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

      {/* this is the booking section */}

      <Hotelsearch card={card}/>
      
    </>
  );
};

export default Booknow;
