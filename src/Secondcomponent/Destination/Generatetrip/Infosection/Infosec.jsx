import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './infosec.css';

const Infosec = ({ trip }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');
  console.log("trip data",trip)
  // Get API key from environment
  const API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;
  
  // Verify key loading in console
  console.log('Env check:', {
    keyExists: !!API_KEY,
    envMode: import.meta.env.MODE,
    allEnv: import.meta.env
  });

  useEffect(() => {
    const fetchImage = async () => {
      try {
        // Validate API key first
        if (!API_KEY) {
          setError('Missing API configuration');
          throw new Error('Unsplash API key not found');
        }

        const location = trip?.userSelection?.location?.label;
        if (!location) {
          setError('No location specified');
          return;
        }

        const response = await axios.get('https://api.unsplash.com/search/photos', {
          params: {
            query: location,
            per_page: 1,
            orientation: 'landscape',
          },
          headers: {
            Authorization: `Client-ID ${API_KEY}`,
          },
        });

        // Handle empty results
        if (!response.data.results?.length) {
          setError('No images found for this location');
          return;
        }

        setImageUrl(response.data.results[0].urls.regular);
      } catch (err) {
        // console.error('API Error:', err.response?.data || err.message);
        setError('Failed to load destination image');
      }
    };

    fetchImage();
  }, [trip, API_KEY]);
  return (
    <>
      <div className='Info-img-box'>
      {imageUrl && <img src={imageUrl} alt="Location" className='infoimg' />}
      </div>

      {/* Location details */}
      <div className='userLocate'>
        <h2 className='userLocate-h2'> 📍{trip?.userSelection?.location?.label}</h2>
      </div>

      <div id='userdays'>
        <div className='userdays-day'>
          <h2>🪂{trip?.userSelection?.noOfDays} Days</h2>
        </div>
        <div className='userdays-budget'>
          <h2>💸{trip?.userSelection?.Budget} budget</h2>
        </div>
        <div className='userdays-traveller'>
          <h2>🍷No.of Traveller: {trip?.userSelection?.Traveller}</h2>
        </div>
      </div>
    </>
  );
};

export default Infosec;
