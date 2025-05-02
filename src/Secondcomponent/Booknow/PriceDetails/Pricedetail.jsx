import React, { useEffect, useState } from 'react';
import './pricedetail.css'; 
import Fakerazor from '../Razorpay/Fakerazor';

const Pricedetail = ({ rooms, days, baseRate, taxes, fee, adults, children, totalGuests, cardPrice }) => {
  // Calculate total price
  const totalPrice = (baseRate * rooms * days) + taxes + fee;

  // Calculate per room per day price
  const perRoomPerDay = days > 0 ? (cardPrice / (rooms * days)).toFixed(2) : 'N/A';

  // Calculate additional charges
  const additionalCharges = baseRate > 0 && cardPrice > 0 ? (baseRate - cardPrice).toFixed(2) : 'N/A';

  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); 

  // Function to display the Razorpay checkout popup
  const displayRazorpay = async () => {
    const res = await loadRazorpayScript();

    if (!res) {
      alert('Razorpay SDK failed to load. Check your internet connection.');
      return;
    }

    const options = {
      key: 'rzp_test_eN6ZLqHMgNIgaB',
      amount: totalPrice * 100, // Convert total price to paise
      currency: 'INR',
      name: 'Travel Booking',
      description: 'Payment for hotel booking',
      handler: function (response) {
        alert('Payment Successful! Payment ID: ' + response.razorpay_payment_id);
        console.log("Razorpay Response:", response);
      },
      modal: {
        ondismiss: function() {
          console.log('Checkout form closed');
          alert('Payment cancelled or failed.');
        }
      },
      prefill: {
        name: 'Guest',
        email: 'guest@example.com',
        contact: '9876543210'
      }
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  // Function to dynamically load the Razorpay script
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const [isPriceOpen, setIsPriceOpen] = useState(true);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const togglePriceDropdown = () => {
    setIsPriceOpen(!isPriceOpen);
  };

  return (
    <>
    <div className="pricedetail-container">
      <div className="limited-offer">
        <h3>Limited Time Offer!</h3>
        <p>Offer expires in: {formatTime(timeLeft)}</p>
      </div>

      <div className={`booking-details ${isDropdownOpen ? 'open' : ''}`} onClick={toggleDropdown}>
        <div className="booking-details-header">
          <h4>Booking Details</h4>
          <span>▼</span>
        </div>
        <div className="booking-details-content">
          <div className="detail-item">
            <span>{rooms}</span>
            <span>Rooms</span>
          </div>
          <div className="detail-item">
            <span>{days}</span>
            <span>Days</span>
          </div>
          <div className="detail-item">
            <span>{adults} Adults, {children} Children</span>
          </div>
        </div>
      </div>

      <div className={`price-summary ${isPriceOpen ? 'open' : ''}`}>
        <div className="price-summary-header" onClick={togglePriceDropdown}>
          <h3>Price Breakdown</h3>
          <span>▼</span>
        </div>
        <div className="price-summary-content">
          <div className="price-item">
            <span>Price (per room per day)</span>
            <span>₹{perRoomPerDay}</span>
          </div>
          <div className="price-item">
            <span>Price Total</span>
            <span>₹{cardPrice > 0 ? cardPrice : 'N/A'}</span>
          </div>
          <div className="price-item">
            <span>Additional Charges</span>
            <span>₹{additionalCharges}</span>
          </div>
          <div className="price-item">
            <span>Taxes</span>
            <span>₹{taxes}</span>
          </div>
          <div className="price-item">
            <span>Fee</span>
            <span>₹{fee}</span>
          </div>
          <div className="price-total">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>
        </div>
        <div className="continue-payment">
          <button onClick={displayRazorpay}>
            Continue to Payment
          </button>
        </div>
      </div>
    </div>

    <Fakerazor />
    </>
  );
};

export default Pricedetail;
