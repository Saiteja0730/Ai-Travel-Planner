import React, { useEffect, useState } from 'react';
import './pricedetail.css'; 

const Pricedetail = ({ rooms, days, baseRate, taxes, fee }) => {
  const totalPrice = (baseRate * rooms * days) + taxes + fee;

  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); 

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

  return (
    <div className="pricedetail-container">
      <div className="limited-offer">
        <h3>Limited Time Offer!</h3>
        <p>Offer expires in: {formatTime(timeLeft)}</p>
      </div>

     <div className="price-summary">
  <h4>Price Break</h4>
  <p>
    <span>{rooms} room x {days} days</span>
    <span>${(baseRate * rooms * days).toLocaleString()}</span>
  </p>
  <p>
    <span>Hotel taxes:</span>
    <span>${taxes.toLocaleString()}</span>
  </p>
  <p>
    <span>Convenience fee:</span>
    <span>${fee.toLocaleString()}</span>
  </p>
  <div className="total-row">
    <span><strong>Total:</strong></span>
    <span><strong>${totalPrice.toLocaleString()}</strong></span>
  </div>
</div>
    </div>
  );
};

export default Pricedetail;
