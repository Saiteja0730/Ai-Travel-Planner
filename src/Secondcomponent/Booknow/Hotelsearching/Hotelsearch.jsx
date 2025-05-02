// Hotelsearch.js (Modification)

import React, { useState, useEffect, useRef } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./hotelsearch.css";
import Tabcontent from "../Tabcontent/Tabcontent";
import Pricedetail from "../PriceDetails/Pricedetail";

const Hotelsearch = ({ card }) => {
  console.log("CardDEtails",card)
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [showGuests, setShowGuests] = useState(false);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  // State to control visibility of Pricedetail
  const [showPriceDetail, setShowPriceDetail] = useState(false);

  // NEW state to hold the booking data displayed in Pricedetail
  const [displayedBookingData, setDisplayedBookingData] = useState({
        rooms: 1,
        days: 0,
        baseRate: 0,
        cardPrice: 0,
        taxes: 500,
        fee: 100,
        adults: 1,
        children: 0,
        totalGuests: 1
    });

    // Initialize card price when component mounts
    useEffect(() => {
        if (card?.price) {
            console.log('Initializing card price:', card.price);
            setDisplayedBookingData(prev => ({
                ...prev,
                cardPrice: card.price
            }));
        }
    }, [card]);

  // priceKey is still useful to force Pricedetail re-render when displayedBookingData changes
  const [priceKey, setPriceKey] = useState(0);


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

  // Calculate days between start and end date (used internally to get the value for update)
  const calculateDays = (start, end) => {
    const oneDay = 24 * 60 * 60 * 1000;
    if (!start || !end) return 0;
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / oneDay);
    return Math.max(0, diffDays);
  };

    // Function to calculate and update the displayed booking data
    const updateDisplayedBookingData = () => {
        const days = calculateDays(startDate, endDate);
        const totalGuests = adults + children;
        
        // Get the base rate from the card
        const baseRatePerRoom = card?.price 
        ;
        
        // Calculate total base rate
        const baseRate = baseRatePerRoom * rooms * days;
        
        // Calculate additional charges based on guests
        const extraAdultCharge = (adults > 1) ? (adults - 1) * 50 : 0;
        const childCharge = children * 25;
        
        // Update displayed data
        setDisplayedBookingData({
            rooms: rooms,
            days: days,
            baseRate: baseRate,
            taxes: 500 + (extraAdultCharge * 0.1) + (childCharge * 0.1), // 10% tax on extra charges
            fee: 100 + extraAdultCharge + childCharge,
            adults: adults,
            children: children,
            totalGuests: totalGuests,
            cardPrice: baseRatePerRoom * rooms * days
        });
        
        // Log the updated data for debugging
        console.log('Updated booking data:', {
            rooms,
            days,
            baseRatePerRoom,
            baseRate,
            cardPrice: baseRatePerRoom * rooms * days
        });
        
        // Increment priceKey to force re-render of Pricedetail
        setPriceKey(prev => prev + 1);
    };


  // handleUpdate recalculates and updates prices
  const handleUpdate = () => {
      console.log("Update clicked, recalculating prices");
      
      // Calculate days between start and end date
      const days = calculateDays(startDate, endDate);
      const totalGuests = adults + children;
      
      // Get the base rate from the card
      const baseRatePerRoom = card?.price || 7899;
      
      // Calculate total base rate
      const baseRate = baseRatePerRoom * rooms * days;
      
      // Calculate additional charges based on guests
      const extraAdultCharge = (adults > 1) ? (adults - 1) * 50 : 0;
      const childCharge = children * 25;
      
      // Update displayed data with new prices
      setDisplayedBookingData({
          rooms: rooms,
          days: days,
          baseRate: baseRate,
          taxes: 500 + (extraAdultCharge * 0.1) + (childCharge * 0.1), // 10% tax on extra charges
          fee: 100 + extraAdultCharge + childCharge,
          adults: adults,
          children: children,
          totalGuests: totalGuests,
          cardPrice: baseRatePerRoom * rooms * days
      });
      
      // Log the updated data for debugging
      console.log('Update - Recalculated booking data:', {
          rooms,
          days,
          baseRatePerRoom,
          baseRate,
          cardPrice: baseRatePerRoom * rooms * days
      });
      
      // Increment priceKey to force re-render of Pricedetail
      setPriceKey(prev => prev + 1);
  };

  // handleTabBookNowClick shows price details with current values
  const handleTabBookNowClick = () => {
      console.log("Book Now clicked in Tabcontent, showing Price Detail");
      
      // Calculate days between start and end date
      const days = calculateDays(startDate, endDate);
      const totalGuests = adults + children;
      
      // Get the base rate from the card
      const baseRatePerRoom = card?.price || 7899;
      
      // Calculate total base rate
      const baseRate = baseRatePerRoom * rooms * days;
      
      // Calculate additional charges based on guests
      const extraAdultCharge = (adults > 1) ? (adults - 1) * 50 : 0;
      const childCharge = children * 25;
      
      // Update displayed data with card price
      setDisplayedBookingData({
          rooms: rooms,
          days: days,
          baseRate: baseRate,
          taxes: 500 + (extraAdultCharge * 0.1) + (childCharge * 0.1), // 10% tax on extra charges
          fee: 100 + extraAdultCharge + childCharge,
          adults: adults,
          children: children,
          totalGuests: totalGuests,
          cardPrice: baseRatePerRoom * rooms * days
      });
      
      // Log the updated data for debugging
      console.log('Book Now - Initial booking data:', {
          rooms,
          days,
          baseRatePerRoom,
          baseRate,
          cardPrice: baseRatePerRoom * rooms * days
      });
      
      // Show the price detail
      setShowPriceDetail(true);
  };

    // Effect to calculate initial days when card or initial dates are set
    useEffect(() => {
        if (card?.price !== undefined) {
             const initialDays = calculateDays(startDate, endDate);
             setDisplayedBookingData(prev => ({
                 ...prev,
                 baseRate: card.price,
                 days: initialDays
             }));
             // Optionally set showPriceDetail(true) here if you want the price to show on initial load
             // setShowPriceDetail(true);
        }
    }, [card?.price, startDate, endDate]); // Recalculate initial days if dates or card price change initially


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
            {startDate ? startDate.toLocaleDateString("en-GB") : "Select Date"} | {endDate ? endDate.toLocaleDateString("en-GB") : "Select Date"}
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
          {/* Pass the new function to Tabcontent */}
          <Tabcontent card={card} onBookNowClick={handleTabBookNowClick} />
        </div>
        {/* Pricedetail is only rendered here, controlled by showPriceDetail */}
        {showPriceDetail && (
            <div className="pricedetail-section">
              <Pricedetail
      key={`${displayedBookingData.rooms}-${displayedBookingData.days}-${displayedBookingData.baseRate}-${priceKey}`} // Use displayedBookingData and priceKey for the key
      rooms={displayedBookingData.rooms}
      days={displayedBookingData.days}
      baseRate={displayedBookingData.baseRate}
      taxes={displayedBookingData.taxes}
      fee={displayedBookingData.fee}
      adults={displayedBookingData.adults}
      children={displayedBookingData.children}
      totalGuests={displayedBookingData.totalGuests}
      cardPrice={displayedBookingData.cardPrice}
    />
            </div>
        )}
      </div>
    </>
  );
};

export default Hotelsearch;