import React from 'react';
import { assets } from '../assets/assets';

export const Banner = () => {
  // Inline styles
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f0f8ff', // Light shade background (Alice Blue)
  };

  const leftSideStyle = {
    maxWidth: '50%',
  };

  const textStyle = {
    margin: '5px 0',
    fontSize: '1.2rem',
    color: '#333',
  };

  const buttonStyle = {
    padding: '10px 20px',
    marginTop: '10px',
    cursor: 'pointer',
    fontSize: '1rem',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  const rightSideImageStyle = {
    width: '300px',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '10px',
  };

  return (
    <div style={containerStyle}>
      {/* Left Side */}
      <div style={leftSideStyle}>
        <div>
          <p style={textStyle}>Book Appointment</p>
          <p style={textStyle}>With 100+ Trusted Pharmacists</p>
        </div>
        <button
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
        >
          Create Account
        </button>
      </div>

      {/* Right Side */}
      <div>
        <img
          src={assets.appointment_img}
          alt="Appointment"
          style={rightSideImageStyle}
        />
      </div>
    </div>
  );
};

export default Banner;

