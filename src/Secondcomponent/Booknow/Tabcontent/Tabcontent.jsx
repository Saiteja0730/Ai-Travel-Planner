import React, { useEffect, useRef, useState } from "react";
import "./tabcontent.css";
import { Clock, Calendar, Users, Wine, Ban, Star } from "lucide-react";
// Ensure Pricedetail import is removed or commented out as it's not rendered here
// import Pricedetail from "../PriceDetails/Pricedetail";

// ... (AmenitiesContent, Rulescontent, Aboutproperty, ReviewsContent components remain the same) ...

const AmenitiesContent = () => (
  <div className="amenities-section">
    <div className="amenities-grid">
      <div className="amenity-item">
        {/* Placeholder for icon */}
        <span className="amenity-icon" style={{ maxWidth: "4vw" }}>
          <img
            src="https://cdn-icons-png.freepik.com/256/18845/18845807.png?uid=R115816223&ga=GA1.1.1273821773.1733169372&semt=ais_hybrid"
            style={{ width: "32px", height: "32px", objectFit: "contain" }}
          />
        </span>
        <span
          style={{
            fontSize: "17px",
            marginRight: "100px",
            fontFamily: "sans-serif",
          }}
        >
          Kitchenette
        </span>
        </div>
        <div className="amenity-item">
          <span className="amenity-icon" style={{ maxWidth: "4vw" }}>
            <img
              src="https://cdn-icons-png.freepik.com/256/2503/2503520.png?uid=R115816223&ga=GA1.1.1273821773.1733169372&semt=ais_hybrid"
              style={{ width: "32px", height: "32px", objectFit: "contain" }}
            />
          </span>
          <span
            style={{
              fontSize: "17px",
              marginRight: "150px",
              fontFamily: "sans-serif",
            }}
          >
            Parking
          </span>
        </div>
        <div className="amenity-item">
          {/* Placeholder for icon */}
          <span className="amenity-icon" style={{ maxWidth: "4vw" }}>
            <img
              src="https://cdn-icons-png.freepik.com/256/12211/12211039.png?uid=R115816223&ga=GA1.1.1273821773.1733169372&semt=ais_hybrid"
              style={{ width: "32px", height: "32px", objectFit: "contain" }}
            />
          </span>
          <span
            style={{
              fontSize: "17px",
              marginRight: "90px",
              fontFamily: "sans-serif",
            }}
          >
            Roomservice
          </span>
        </div>
        <div className="amenity-item" style={{ maxWidth: "20vw" }}>
          {/* Placeholder for icon */}
          <span className="amenity-icon">
            <img
              src="https://cdn-icons-png.freepik.com/256/7416/7416324.png?uid=R115816223&ga=GA1.1.1273821773.1733169372&semt=ais_hybrid"
              style={{ width: "32px", height: "32px", objectFit: "contain" }}
            />
          </span>
          <span
            style={{
              fontSize: "17px",
              marginRight: "100px",
              fontFamily: "sans-serif",
            }}
          >
            Laundryservice
          </span>
        </div>
        <div className="amenity-item" style={{ maxWidth: "19vw" }}>
          {/* Placeholder for icon */}
          <span className="amenity-icon">
            <img
              src="https://cdn-icons-png.freepik.com/256/13910/13910751.png?uid=R115816223&ga=GA1.1.1273821773.1733169372&semt=ais_hybrid"
              style={{ width: "32px", height: "32px", objectFit: "contain" }}
            />
          </span>
          <span
            style={{
              fontSize: "17px",
              marginRight: "110px",
              fontFamily: "sans-serif",
            }}
          >
            Refrigerator
          </span>
        </div>
        <div className="amenity-item" style={{ maxWidth: "20vw" }}>
          {/* Placeholder for icon */}
          <span className="amenity-icon">
            <img
              src="https://cdn-icons-png.freepik.com/256/1934/1934544.png?uid=R115816223&ga=GA1.1.1273821773.1733169372&semt=ais_hybrid"
              style={{ width: "32px", height: "32px", objectFit: "contain" }}
            />
          </span>
          <span
            style={{
              fontSize: "17px",
              marginRight: "105px",
              fontFamily: "sans-serif",
            }}
          >
            Airconditioning
          </span>
        </div>
      </div>
    </div>
);

const Rulescontent = () => (
  <div className="rules-section">
    <ul className="list-unstyled">
      <li className="d-flex align-items-center mb-2">
        <Clock
          className="me-2 text-secondary"
          style={{ height: "30px", maxWidth: "11%" }}
        />
        <span className="fs-6" style={{ fontFamily: "sans-serif" }}>
          Check-in: After 02:00 PM, Check-out: 12:00 PM
        </span>
      </li>
      <li className="d-flex align-items-center mb-2">
        <Calendar
          className="me-2 text-secondary"
          style={{ height: "30px", maxWidth: "11%", marginTop: "15px" }}
        />
        <span className="fs-6" style={{ fontFamily: "sans-serif" }}>
          Cancellation till check-in available, with ClearChoice Max
        </span>
      </li>
      <li className="d-flex align-items-center mb-2">
        <Users
          className="me-2 text-secondary"
          style={{ height: "30px", maxWidth: "11%", marginTop: "15px" }}
        />
        <span className="fs-6" style={{ fontFamily: "sans-serif" }}>
          Guests below 18 years of age allowed
        </span>
      </li>
      <li className="d-flex align-items-center mb-2">
        <Wine
          className="me-2 text-secondary"
          style={{ height: "30px", maxWidth: "11%", marginTop: "15px" }}
        />
        <span className="fs-6" style={{ fontFamily: "sans-serif" }}>
          Alcohol consumption allowed within the premises
        </span>
      </li>
      <li className="d-flex align-items-center mb-2">
        <Ban
          className="me-2 text-secondary"
          style={{ height: "30px", maxWidth: "11%", marginTop: "15px" }}
        />
        <span className="fs-6" style={{ fontFamily: "sans-serif" }}>
          Pets NOT allowed within the premises
          </span>
      </li>
      </ul>
    </div>
);

const Aboutproperty = () => (
  <div>
    <p style={{ fontFamily: "sans-serif" }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias illum
      adipisci, a non laboriosam ut. Deleniti nesciunt molestiae recusandae
      provident obcaecati dolor, eaque voluptatibus, hic, est error numquam cum.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum veniam qui
      inventore iste voluptas adipisci esse iusto exercitationem nisi. Omnis
      obcaecati, porro unde deleniti veniam odit vero aperiam iste dolorum.
    </p>
  </div>
);

// New Component for Reviews Content
const ReviewsContent = () => (
  <div className="reviews-section">
    <div className="review-item">
      <div className="review-header">
        <span className="reviewer-name">Alice Smith</span>
        <span className="review-rating">
          <Star size={16} fill="gold" stroke="gold" />
          <Star size={16} fill="gold" stroke="gold" />
          <Star size={16} fill="gold" stroke="gold" />
          <Star size={16} fill="gold" stroke="gold" />
          <Star size={16} stroke="gold" />
        </span>
      </div>
      <p className="review-text">
        Had a wonderful stay at Grand Vista Hotel! The staff was friendly, and
        the room was clean and comfortable. The location is perfect for
        exploring Manali.
      </p>
      <span className="review-date">Reviewed on: 2023-10-26</span>
    </div>

    <div className="review-item">
      <div className="review-header">
        <span className="reviewer-name">Bob Johnson</span>
        <span className="review-rating">
          <Star size={16} fill="gold" stroke="gold" />
          <Star size={16} fill="gold" stroke="gold" />
          <Star size={16} fill="gold" stroke="gold" />
          <Star size={16} fill="gold" stroke="gold" />
          <Star size={16} fill="gold" stroke="gold" />
        </span>
      </div>
      <p className="review-text">
        Excellent service and amenities. The kitchenette was a great addition.
        Highly recommend this hotel for families.
      </p>
      <span className="review-date">Reviewed on: 2023-11-15</span>
    </div>

    <div className="review-item">
      <div className="review-header">
        <span className="reviewer-name">Charlie Brown</span>
        <span className="review-rating">
          <Star size={16} fill="gold" stroke="gold" />
          <Star size={16} fill="gold" stroke="gold" />
          <Star size={16} fill="gold" stroke="gold" />
          <Star size={16} stroke="gold" />
          <Star size={16} stroke="gold" />
        </span>
      </div>
      <p className="review-text">
        Good value for money. The room was a bit small, but clean. The rules
        about pets were a bit strict for me.
      </p>
      <span className="review-date">Reviewed on: 2023-12-01</span>
    </div>
  </div>
);


// Accept the new prop: onBookNowClick
const Tabcontent = ({ card, onBookNowClick }) => {
  // console.log("Tabcontent card details:", card);
  console.log("Tabcontent onBookNowClick prop:", onBookNowClick);

  const tabs = [
    {
      label: "General",
      content: (
        <div className="booking-section">
  <div className="general-content">
    <div className="content-and-image">
      <div className="booking-text">
        <p className="text-muted-foreground">
          <strong>Hotel Name:</strong> {card?.hotelName}
        </p>
        <p className="text-muted-foreground">
          <strong>Category:</strong> {card?.category || "3-Star"}
        </p>
        <p className="text-muted-foreground">
          <strong>Location:</strong> {card?.placeName}
        </p>
        <p className="text-muted-foreground">
          <strong>Price:</strong>{card?.price}
        </p>
        <p className="text-muted-foreground">
          <strong>Rating:</strong> ⭐ {card?.rating}
        </p>
        {/* Call the passed-down function on click */}
        <button className="book-now-btn" onClick={onBookNowClick}>
              Book Now
            </button>
      </div>

      <div className="booking-image">
        <img src={card?.image} alt="Hotel" />
      </div>
    </div>
  </div>
</div>

      ),
    },

    { label: "Amenities", content: <AmenitiesContent /> },
    { label: "Rules", content: <Rulescontent /> },
    { label: "About", content: <Aboutproperty /> },
    { label: "Reviews", content: <ReviewsContent /> },
  ];

  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef(null);
  const tabRefs = useRef([]);

  const handleScroll = () => {
    if (!containerRef.current) return;

    tabRefs.current.forEach((ref, index) => {
      const rect = ref.getBoundingClientRect();
      const containerRect = containerRef.current.getBoundingClientRect();
      const relativeTop = rect.top - containerRect.top;

      if (relativeTop >= 0 && relativeTop < window.innerHeight / 3) {
        setActiveTab(index);
      }
    });
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
       <div className="content-container">
      <div className="tab-container" ref={containerRef}>
        <div className="tab-header">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => {
                if (tabRefs.current[index]) {
                  tabRefs.current[index].scrollIntoView({ behavior: "smooth" });
                }
              }}
              className={`tab-button ${activeTab === index ? "active" : ""}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {tabs.map((tab, index) => (
          <div
            key={index}
            ref={(el) => (tabRefs.current[index] = el)}
            className={`tab-section ${activeTab === index ? "active" : ""}`}
          >
            <h2>{tab.label}</h2>
            {tab.content}
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default Tabcontent;