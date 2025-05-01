import React, { useState, useEffect, useRef, version } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./hotelsearch.css";
import Tabcontent from "../Tabcontent/Tabcontent";
import Pricedetail from "../PriceDetails/Pricedetail";

const Hotelsearch = ({ card }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [showGuests, setShowGuests] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [showPriceDetail, setShowPriceDetail] = useState(false);
  const [priceKey, setPriceKey] = useState(0);
  const [bookingData, setBookingData] = useState({
    rooms: 1,
    days: 1,
    baseRate: 7899,
    taxes: 35789,
    fee: 1200,
  });

  const guestsRef = useRef(null);
  const calendarRef = useRef(null);

  const handleDateClick = () => {
    setShowCalendar(!showCalendar);
    setShowGuests(false);
  };

  const handleGuestClick = () => {
    setShowGuests(!showGuests);
    setShowCalendar(false);
  };

  const handleClickOutside = (event) => {
    if (guestsRef.current && !guestsRef.current.contains(event.target)) {
      setShowGuests(false);
    }
  };

  const handleClickOutsideCalendar = (event) => {
    if (calendarRef.current && !calendarRef.current.contains(event.target)) {
      setShowCalendar(false);
    }
  };

  useEffect(() => {
    if (showGuests) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showGuests]);

  useEffect(() => {
    if (showCalendar) {
      document.addEventListener("mousedown", handleClickOutsideCalendar);
    }
    return () => document.removeEventListener("mousedown", handleClickOutsideCalendar);
  }, [showCalendar]);

  const handleUpdate = () => {
    const oneDay = 24 * 60 * 60 * 1000;
    const days = Math.round((endDate - startDate) / oneDay);

    setBookingData({
      rooms,
      days: days < 1 ? 1 : days,
      baseRate: 7899,
      taxes: 35789,
      fee: 1200,
    });
    setBookingData(newBookingData);
    setPriceKey(prev => prev + 1); 
    setShowPriceDetail(true);
  };

  return (
    <>
      <div className="booking-bar d-flex align-items-center p-2">
        {/* Location */}
        <div className="d-flex align-items-center booking-item flex-grow-1">
          <FaMapMarkerAlt className="icon" />
          <span>{card?.placeName}</span>
        </div>

        {/* Dates */}
        <div className="d-flex align-items-center booking-item flex-grow-1" onClick={handleDateClick}>
          <FaCalendarAlt className="icon" />
          <span className="text">
            {startDate.toLocaleDateString("en-GB")} | {endDate.toLocaleDateString("en-GB")}
          </span>
        </div>

        {/* Guests */}
        <div className="d-flex align-items-center booking-item flex-grow-1" onClick={handleGuestClick}>
          <FaUser className="icon" />
          <span className="text">
            {rooms} room, {adults + children} guests
          </span>
        </div>

        {/* Update Button */}
        <div className="booking-item">
          <button className="update-button" onClick={handleUpdate}>Update</button>
        </div>

        {/* Calendar */}
        {showCalendar && (
          <div className="calendar-popup" ref={calendarRef}>
            <div className="calendar-column">
              <h5>Check-In</h5>
              <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} inline />
            </div>
            <div className="calendar-column">
              <h5>Check-Out</h5>
              <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} inline minDate={startDate} />
            </div>
          </div>
        )}

        {/* Guests Popup */}
        {showGuests && (
          <div className="guests-popup" ref={guestsRef}>
            <div className="guest-rooms-scroll">
              {[...Array(rooms)].map((_, index) => (
                <div key={index}>
                  <h5>Room {index + 1}</h5>
                  <div className="guest-item">
                    <p>Adults</p>
                    <div className="counter">
                      <button onClick={() => setAdults(Math.max(1, adults - 1))}>-</button>
                      <span>{adults.toString().padStart(2, "0")}</span>
                      <button onClick={() => setAdults(adults + 1)}>+</button>
                    </div>
                  </div>
                  <div className="guest-item">
                    <p>Children</p>
                    <div className="counter">
                      <button onClick={() => setChildren(Math.max(0, children - 1))}>-</button>
                      <span>{children.toString().padStart(2, "0")}</span>
                      <button onClick={() => setChildren(children + 1)}>+</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="room-actions">
              <button
                className="add-room"
                onClick={() => rooms < 5 && setRooms(rooms + 1)}
                disabled={rooms >= 5}
              >
                + Add another room
              </button>
              {rooms > 1 && (
                <button className="remove-room" onClick={() => setRooms(Math.max(1, rooms - 1))}>
                  - Remove room
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Content and Price side by side */}
      <div className="d-flex flex-wrap">
        <div className="tabcontent-section">
          <Tabcontent card={card}/>
        </div>
        {showPriceDetail && bookingData && (
  <div className="pricedetail-section">
    <Pricedetail
  key={`${bookingData.rooms}-${bookingData.days}-${bookingData.baseRate}`}
  rooms={bookingData.rooms}
  days={bookingData.days}
  baseRate={bookingData.baseRate}
  taxes={bookingData.taxes}
  fee={bookingData.fee}
/>
  </div>
)}
      </div>
    </>
  );
};

export default Hotelsearch;
