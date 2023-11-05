import React, { useEffect, useState } from 'react';
import './Style/Navbar.css'
export const Navbar = () => {
  const [locationText, setLocationText] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        geoLocationSuccess,
        geoLocationError,
        { timeout: 10000 }
      );
    } else {
      alert("Your browser doesn't support geolocation");
    }
  }, []);

  function geoLocationSuccess(pos) {
    const myLat = pos.coords.latitude;
    const myLng = pos.coords.longitude;
    let loadingTimeout;

    const loading = () => {
      setLocationText("Fetching...");
    };

    loadingTimeout = setTimeout(loading, 600);

    fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${myLat}&lon=${myLng}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (loadingTimeout) {
          clearTimeout(loadingTimeout);
          loadingTimeout = null;
          setLocationText(data.display_name);
        }
      })
      .catch(() => {
        // Handle error
      });
  }

  function geoLocationError(error) {
    const errors = {
      1: "Permission denied",
      2: "Position unavailable",
      3: "Request timeout",
    };
    alert("Error: " + errors[error.code]);
  }

  return (
    <div className='Nav-loc'>
        <p className='Pre-order'>Pre Order from <img className='pre-order-img' src='https://icons.veryicon.com/png/o/commerce-shopping/e-commerce-website-icon/address-81.png'/></p>
      <h3 className="location">{locationText}</h3>
    </div>
  );
};
