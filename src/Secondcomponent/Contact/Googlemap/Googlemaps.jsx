import React from 'react';
import './googlemap.css';

const Googlemaps = () => {
  return (
    <div className='mapbox-img'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d487295.2289027827!2d78.07768118623206!3d17.412076749018276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1745507418331!5m2!1sen!2sin"
        width="800"
        height="600"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps - Hyderabad"
      ></iframe>
    </div>
  );
};

export default Googlemaps;
