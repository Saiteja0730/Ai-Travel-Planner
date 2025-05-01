import React, { useState } from "react";
import "./about.css";
import { Link } from "react-router-dom";
import { AiFillBehanceCircle } from "react-icons/ai";
import {FaHome,FaHotel,FaCamera,FaUtensils,FaPlane,FaKey,FaSearch,} from "react-icons/fa";
import Searchtab from "./Searchtab/Searchtab";
import Hoteltab from "./Hoteltab/Hoteltab";
import Thingstodo from "./Thingstodo/Thingstodo";
import RestaurantTab from "./RestaurantTab/RestaurantTab";
import FlightTab from "./FlightsTab/FlightTab";

const About = () => {
  const [activeTab, setActiveTab] = useState("Search All");
  const [searchTerm, setSearchTerm] = useState("")

  const tabs = [
    { name: "Search All", icon: <FaHome /> },
    { name: "Hotels", icon: <FaHotel /> },
    { name: "Things to Do", icon: <FaCamera /> },
    { name: "Restaurants", icon: <FaUtensils /> },
    { name: "Flights", icon: <FaPlane /> },
  ];

  return (
    <>
      {/* This is Navbar section */}
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

      {/* This is the tabs section */}
      <div className="search-container">
        <h1 className="search-heading">Where to?</h1>
        <div className="tabs">
          {tabs.map((tab) => (
            <div
              key={tab.name}
              className={`tab ${activeTab === tab.name ? "active" : ""}`}
              onClick={() => setActiveTab(tab.name)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <div className="tab-text">
                <span>{tab.name}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="search-input-wrapper">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Places to go, things to do, hotels..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>Search</button>
        </div>
      </div>

      {/* This is the search all tab */}
      <div className="tab-content">
  {activeTab === "Search All" && <Searchtab searchTerm={searchTerm}/>}
  {activeTab === "Hotels" && <Hoteltab searchTerm={searchTerm}/>}
  {activeTab === "Things to Do" &&  <Thingstodo searchTerm={searchTerm}/>}
  {activeTab === "Restaurants" &&  <RestaurantTab searchTerm={searchTerm}/>}
  {activeTab === "Flights" &&  <FlightTab searchTerm={searchTerm}/>} 
</div>
    </>
  );
};

export default About;
