import React from 'react';
import { specialityData } from '../assets/assets'; // Import the speciality data
import { Link } from 'react-router-dom'; // For navigation

const SpecialityMenu = () => {
  return (
    <div id="Speciality" style={containerStyle}>
      {/* Title Section */}
      <h1 style={headingStyle}>Find by Speciality</h1>
      <p style={descriptionStyle}>
        Simply browse through our extensive list of trusted Pharmacists, and schedule your booking.
      </p>

      {/* Grid Section */}
      <div style={gridContainerStyle}>
        {specialityData.map((item, index) => (
          <Link
            to={`/Pharmacist/${item.speciality}`}
            key={index}
            style={cardStyle}
          >
            <img
              src={item.image}
              alt={`${item.speciality}`}
              style={imageStyle}
            />
            <p style={specialityTextStyle}>{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;

// Inline CSS Styles
const containerStyle = {
  padding: '40px',
  textAlign: 'center',
  backgroundColor: '#f3f8ff',
};

const headingStyle = {
  fontSize: '36px',
  fontWeight: 'bold',
  color: '#001f54',
  marginBottom: '10px',
};

const descriptionStyle = {
  fontSize: '18px',
  color: '#4a5568',
  marginBottom: '30px',
};

const gridContainerStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
  gap: '20px',
  justifyContent: 'center',
};

const cardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textDecoration: 'none',
  padding: '20px',
  backgroundColor: '#ffffff',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',
};

cardStyle[':hover'] = {
  transform: 'scale(1.05)',
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
};

const imageStyle = {
  width: '100px',
  height: '100px',
  objectFit: 'cover',
  borderRadius: '50%',
  marginBottom: '10px',
};

const specialityTextStyle = {
  fontSize: '16px',
  color: '#001f54',
  fontWeight: 'bold',
};

