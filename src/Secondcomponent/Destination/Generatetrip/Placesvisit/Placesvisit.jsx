import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './placesvisit.css';

const Placesvisit = ({ trip }) => {
  const [images, setImages] = useState({});

  const API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;

  useEffect(() => {
    const fetchImages = async () => {
      const itinerary = trip?.tripData?.itinerary;
      if (!itinerary || !API_KEY) return;

      for (const [_, dayValue] of Object.entries(itinerary)) {
        for (const item of dayValue.plan) {
          const query = item.placeName;
          if (!images[query]) {
            try {
              const res = await axios.get('https://api.unsplash.com/search/photos', {
                params: {
                  query,
                  per_page: 1,
                  orientation: 'landscape'
                },
                headers: {
                  Authorization: `Client-ID ${API_KEY}`
                }
              });

              const imgUrl = res.data.results[0]?.urls?.regular || '';
              setImages(prev => ({ ...prev, [query]: imgUrl }));
            } catch (error) {
              console.error(`Error fetching image for ${query}:`, error.message);
              setImages(prev => ({ ...prev, [query]: '' }));
            }
          }
        }
      }
    };

    fetchImages();
  }, [trip, API_KEY]);

  return (
    <div className="places-container">
      <h2>Places to Visit💕</h2>
      {trip?.tripData?.itinerary &&
        Object.entries(trip.tripData.itinerary).map(([dayKey, dayValue], dayIndex) => (
          <div key={dayKey} className="day-plan">
            <h3>{`Day ${dayIndex + 1} - ${dayValue.theme}`}</h3>
            {dayValue.plan.map((item, idx) => (
              <div key={idx} className="place-card">
              <img
                  src={images[item.placeName] || item.placeImageUri || "https://via.placeholder.com/400x250?text=No+Image"}
                  alt={item.placeName}
                  className="place-image"
                />
              <div className='place-info'>
                <h4>{item.placeName}</h4>
                <p><strong>Time to Visit:</strong> {item.bestTimeToVisit}</p>
                {item.timeTravel && <p><strong>Travel Info:</strong> {item.timeTravel}</p>}
                <p><strong>Ticket Price:</strong> {item.ticketPricing}</p>
                <p><strong>Rating:</strong> {item.rating}⭐</p>
                <p>{item.placeDetails}</p>
                </div>
                
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default Placesvisit;
