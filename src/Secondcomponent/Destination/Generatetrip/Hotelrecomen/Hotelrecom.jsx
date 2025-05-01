import React, { useEffect, useState } from "react";
import axios from "axios";
import "./hotelrecom.css";

const Hotelrecom = ({ trip }) => {
  const hotels = trip?.tripData?.hotelOptions || [];
  const API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;

  const [hotelImages, setHotelImages] = useState({});

  useEffect(() => {
    const fetchImages = async () => {
      if (!API_KEY || !hotels.length) return;

      const updatedImages = {};

      await Promise.all(
        hotels.map(async (hotel) => {
          try {
            const response = await axios.get("https://api.unsplash.com/search/photos", {
              params: {
                query: hotel.hotelName,
                per_page: 1,
                orientation: "landscape",
              },
              headers: {
                Authorization: `Client-ID ${API_KEY}`,
              },
            });

            const imageUrl = response.data.results[0]?.urls?.regular;
            if (imageUrl) {
              updatedImages[hotel.hotelName] = imageUrl;
            }
          } catch (error) {
            console.error(`Failed to fetch image for ${hotel.hotelName}:`, error.message);
          }
        })
      );

      setHotelImages(updatedImages);
    };

    fetchImages();
  }, [hotels, API_KEY]);

  return (
    <div className="hotelrecom">
      <h2>Hotel Recommendations</h2>

      <div className="hotel-list">
        {hotels.length > 0 ? (
          hotels.map((hotel, index) => (
            <a
              key={index}
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                hotel.hotelAddress
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hotel-card-link"
            >
              <div className="hotel-card">
                <img
                  className="hotel-image"
                  src={
                    hotelImages[hotel.hotelName] ||
                    hotel.hotelImageUri ||
                    "https://via.placeholder.com/300x200?text=No+Image"
                  }
                  alt={hotel.hotelName}
                />
                <h3>{hotel.hotelName}</h3>
                <p>📍{hotel.hotelAddress}</p>
                <p>
                  <strong>Price:</strong> ${hotel.price} 💰
                </p>
                <p>
                  <strong>Rating:</strong> {hotel.rating} 🌟
                </p>
                <p>{hotel.description}</p>
              </div>
            </a>
          ))
        ) : (
          <p>Loading hotels or no data found.</p>
        )}
      </div>
    </div>
  );
};

export default Hotelrecom;
