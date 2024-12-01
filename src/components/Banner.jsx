import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

export const Banner = () => {
  const navigate = useNavigate();

  // Inline styles
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#f0f8ff', // Light shade background
  };

  const leftSideStyle = {
    maxWidth: '50%',
  };

  const headerTextStyle = {
    fontWeight: 'bold', // Make it bold
    fontSize: '2rem', // Bigger font size
    color: '#333', // Dark text color
    margin: '5px 0',
  };

  const subTextStyle = {
    margin: '5px 0',
    fontSize: '1.2rem',
    color: '#555',
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
          <p style={headerTextStyle}>Book Appointment</p>
          <p style={subTextStyle}>With 100+ Trusted Pharmacists</p>
        </div>
        <button
          style={buttonStyle}
          onClick={() => {
            navigate('/login'); // Navigate to login page
            window.scrollTo(0, 0); // Scroll to the top of the page
          }}
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


