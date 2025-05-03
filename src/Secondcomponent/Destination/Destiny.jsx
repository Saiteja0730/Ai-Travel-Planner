import React, { useEffect, useState } from "react";
import "./destiny.css";
import { Link, useNavigate } from "react-router-dom";
import { AiFillBehanceCircle } from "react-icons/ai";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./Budget/Budget.jsx";
import Budgettravel from "./Budget_travel/Budgettravel";
import { ToastContainer, toast } from "react-toastify";
import { chatSession } from "./AiServices/Aimodel";
import { doc, setDoc } from "@firebase/firestore";
import { db } from "../../Firstcomponent/Firebase";


// 5GNXDVJsQLybdALC0YNrNnFEjjabhBxrTjwOMdkaNluMg2XHQisNvosm

const Destiny = () => {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const AI_PROMPT = `Generate Travel plan for location : {location}, for {totalDays} Days for {Traveller} with a  {Budget} budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image_url (actual image link from trusted source), geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place image_url (actual image link from trusted source), Geo Coordinates, ticket Pricing, rating, Time travel each of the location for {totalDays} days with each day plan with best time to visit.`

  const handleInputChange = (name, val) => {
    if (name == "noOfDays" && val > 5) {
      console.log("please enter valid trip");
    }
    setFormData({
      ...formData,
      [name]: val,
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const OnGeneratetrip = async () => {
    if (!formData?.location) {
      window.alert("Please enter a location");
      return;
    }
    
    if (formData?.noOfDays >= 1 && formData?.noOfDays >= 5) {
      window.alert("Please enter a valid number of days (max 5)");
      return;
    }

    if (!formData?.Budget) {
      window.alert("Please select a budget");
      return;
    }

    if (!formData?.Traveller) {
      window.alert("Please select a travel preference");
      return;
    }

    try {
      setLoading(true); 
  
      const FINAL_PROMPT = AI_PROMPT.replace(
        "{location}",
        formData?.location?.label
      )
        .replace("{totalDays}", formData?.noOfDays)
        .replace("{Traveller}", formData?.Traveller)
        .replace("{Budget}", formData?.Budget);
  
      const chat = await chatSession();
      const result = await chat.sendMessage(FINAL_PROMPT);
      const response = await result.response.text();
  
      const docId = await SaveAitrip(response);
      toast.success("Trip generated successfully! 🚀");

      setTimeout(() => {
        navigate(`/gentrip/${docId}`);
      }, 1000);


    } catch (error) {
      console.error("Error generating trip:", error);
      alert("Something went wrong while generating the trip.");
    } finally {
      setLoading(false); 
    }
   
  };

  const SaveAitrip = async (TripData) => {
    const docId = Date.now().toString();

    const tripDataObject = typeof TripData === 'string' 
    ? JSON.parse(TripData) 
    : TripData;

  await setDoc(doc(db, "AiTrips", docId), {
    userSelection: formData,
    tripData: tripDataObject, 
    id: docId,
  });

    return docId; 
  };

  return (
    <>
      {/* this is the Destiny Navbar */}
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

      {/* This is the User selection of destiny places */}
      <div className="Destiny-box">
      <div className="preference">
        <div className="prefer2">
          <h2 className="tellus">Tell Us your Travel Preferences 🏕️ 🏝️</h2>
          <p className="preferpara">
            Just provide some basic information, and our trip planner a
            customized itinerary
            <br />
            based on your travel preferences.
          </p>
        </div>
      </div>

      {/* Choices section */}

      <div className="choices">
        <div className="choicedestiny">
          <h2>What is your Destination Choice?</h2>
          <form className="googleform">
            <GooglePlacesAutocomplete
              apiKey="AIzaSyA4F-L1DI3D2XD-gw4i9TEALaJSeDm0ufI"
              selectProps={{
                placeholder: "Search for Destination...",
                place,
                onChange: (val) => {
                  setPlace(val);
                  handleInputChange("location", val);
                },
                classNames: {
                  control: () => "google-autocomplete-wrapper",
                  input: () => "google-autocomplete-input",
                  indicatorsContainer: () => "google-autocomplete-indicators",
                  dropdownIndicator: () => "google-autocomplete-icon",
                  clearIndicator: () => "google-autocomplete-icon",
                  indicatorSeparator: () => "d-none",
                  option: () => "google-autocomplete-option",
                  menu: () => "google-autocomplete-menu",
                },
              }}
            />
          </form>
        </div>
      </div>

      {/* This is the number of days slected section */}

      <div className="trip-plan">
        <h2>How many days are you planning your trip?</h2>
        <div className="days-select">
          <input
            type="number"
            placeholder="   Example: 1-5"
            className="example"
            onChange={(e) => handleInputChange("noOfDays", e.target.value)}
          />
        </div>
      </div>

      {/* This is the budget section */}
      <div className="budget">
        <h2>What is Your Budget ?</h2>
        <div className="budget-p">
          <p>
            The Budget is exclusively allocated for activities <br />
            and during purposes.
          </p>
        </div>
      </div>

      {/* This is the Budget Section */}
      <Budget onBudgetSelect={handleInputChange} />

      {/* This is the travelling aadventure */}
      <div className="budget-travel">
        <h2>Who do you plan on travelling with on your next adventure ?</h2>
        <div className="budget-tavel-p">
          <p>
            The Budget is exclusively allocated for activities <br />
            and during purposes.
          </p>
        </div>
      </div>

      {/* this is the budget travelling adventure */}
      <Budgettravel onBudgetTravel={handleInputChange} />

      {/* this is generate trip button */}
      <div className="tripgen">
  <button
    onClick={OnGeneratetrip}
    className="generate-trip-link"
    disabled={loading}
  >
    {loading ? (
      <span className="spinner"></span> 
    ) : (
      "Generate Trip"
    )}
  </button>
</div>
      <ToastContainer position="top-center" autoClose={3000}/>
      </div>
    </>
  );
};

export default Destiny;
