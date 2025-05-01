import React, { useState, useRef, useEffect } from "react";
import "./dash.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import { AiFillBehanceCircle } from "react-icons/ai";
import Image2 from "../../assets/Fifthimage.png";
import Image3 from "../../assets/Thirdimage.png";
import Image4 from "../../assets/fourthimage.png";
import Video from "../../assets/Video2.mp4";
import PlacesAutocomplete from "react-places-autocomplete";
import Trustzero from "../../assets/Trustzero.png";
import Trustone from "../../assets/Trustone.png";
import Trustwo from "../../assets/Trusttwo.png";
import Trustthree from "../../assets/Trustthree.png";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Packageimg from "./Component/Packageimg";
import Whychooseus from "./Whychoose/Whychooseus";
import Review from "./Clientslider/Review";
import Footerdash from "./FooterDash/Footerdash";



const Dashboard = () => {
  const [address, setAddress] = useState("");
  const handleSelect = async (value) => {
    setAddress(value);
  };

  // this is guest
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGuest, setSelectedGuest] = useState("");
  const dropdownRef = useRef(null);

  const guestOptions = [
    "2 adults, 1 children",
    "2 adults, 2 children",
    "2 adults, 3 children",
    "1 adult",
    "2 adults",
    "1 adult, 1 child",
  ];

  const handleGuestClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedGuest(option);
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);

  // this is the carousal section
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Mydashboard")
      .then((res) => res.json())
      .then((data) => setSlides(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // This is scroll back top
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 20) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* This is home navbar */}
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

      {/* Video Section */}
      <div className="homevideo">
        <div className="video1">
          <video src={Video} autoPlay loop muted className="video2" />
        </div>

        <div className="sectionText">
          <h1>Unlock Your Travel Dreams With Us!</h1>
          <p>
            Discover the World's most adventurous nature, life is so short for a
            trip.
          </p>
          <button className="btnGet">GET STARTED</button>

          <div className="imageplaces">
            {/* <img src={Image} className="image1" /> */}
            <img src={Image2} className="image2" />
            <img src={Image3} className="image3" />
            <img src={Image4} className="image4" />
          </div>
        </div>
      </div>

        <div className="Dashboard-box">
      {/* This is the search function */}
      {/* <section className="searchbody">
        
        <div className="locationbody">
          <label className="locationtext">Location</label>
          <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <div className="locationinput relative">
                <input
                  id="location"
                  {...getInputProps({
                    placeholder: "Enter your destination...",
                    className:
                      "inputtext w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:border-blue-400 locationinput",
                  })}
                />
                {suggestions.length > 0 && (
                  <div className="suggestions-dropdown">
                    {loading && (
                      <div className="suggestion-item">Loading...</div>
                    )}
                    {suggestions.map((suggestion, index) => {
                      const className =  suggestion.active
                        ? "bg-blue-100 cursor-pointer p-2"
                        : "cursor-pointer p-2";
                      return (
                        <div
                          key={index}
                          {...getSuggestionItemProps(suggestion, {
                            className,
                          })}
                        >
                          {suggestion.description}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </PlacesAutocomplete>
        </div>

       
        <div className="checkbody">
          <label htmlFor="checkin" className="checktext">
            Check-in
          </label>
          <div className="relative">
            <input
              type="date"
              id="checkin"
              className="inputtext w-full p-3 pr-10 border border-gray-400 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>
        </div>

        
        <div className="checkbody">
          <label htmlFor="checkout" className="checktext">
            Check-out
          </label>
          <div className="relative">
            <input
              type="date"
              id="checkout"
              className="inputtext w-full p-3 pr-10 border border-gray-400 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>
        </div>

        
        <div className="guestbody">
          <div
            className="item-search bd-none cursor-pointer"
            onClick={handleGuestClick}
          >
            <label className="guesttext">Guest</label>
            <div className="guest-display p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:border-blue-400">
              {selectedGuest || "Select Guests"}
            </div>
          </div>

          {isOpen && (
            <div
              ref={dropdownRef}
              className="guestindex absolute left-0 mt-1 w-48 bg-white border border-gray-300 rounded-md shadow-md z-20"
            >
              {guestOptions.map((option, index) => (
                <div
                  key={index}
                  className=" px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </section> */}

      {/* this is User trust section  */}
      <section className="trustbody">
        <div className="trustelement">
          <div>
            <img src={Trustzero} alt="trust zero" />
            <div>
              <h4>Discover the Possibilites</h4>
              <p>
                With nearly half a million attractions,
                hotels&more, you're sure to find joy.
              </p>
            </div>
          </div>

          <div>
            <img src={Trustone} alt="trust one" />
            <div>
              <h4>Enjoy deals & delights</h4>
              <p>
                Quality activities.Great prices.
                Earn credits to save more.
              </p>
            </div>
          </div>

          <div>
            <img src={Trustwo} alt="trust two" />
            <div>
              <h4>Exploring made easy</h4>
              <p>
                Book last minute, skip lines
                get free cancellation for easier exploring.
              </p>
            </div>
          </div>

          <div>
            <img src={Trustthree} alt="trust three" />
            <div>
              <h4>Travel you can trust</h4>
              <p>
                Read reviews & get reliable customer
                support.We're with you at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* this is the Courosel Section */}
      <div className="main_heading">
        <h1>Top Destination For Your Next Vacation</h1>
      </div>
      <div className="slider-container">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={slide.id}
              >
                <p className="slidepara">{slide.caption}</p>
                <img
                  src={slide.image}
                  className="d-block w-100"
                  alt={slide.alt}
                />
                
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="caroicon carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="caroicon carousel-control-next-icon "
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* This is the Package images */}

      <Packageimg />

      {/* Why Choose Section */}

      <Whychooseus />

      {/* This is client Review Slider */}

      <Review />

      {/* This is The Footer section of DashBoard Section */}

      <Footerdash />

          
      {/* this is scroll back to top */}
      {showButton && (
        <div>
          
          <button
            onClick={scrollToTop}
            className="scroll-to-top-btn"
            title="Go to top"
          >
            <i class="bi bi-arrow-up"></i>
          </button>
          
        </div>
      )}
      </div>
    </>
  );
};

export default Dashboard;
