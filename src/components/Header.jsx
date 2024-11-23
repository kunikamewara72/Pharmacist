import React from 'react';
import { assets } from '../assets/assets'; // Ensure assets are imported correctly

export const Header = () => {
  return (
    <div style={containerStyle}>
      {/* --------- Left side --------- */}
      <div style={leftSideStyle}>
        <h1 style={headerTextStyle}>
          Book Appointment
          <br />
          <span style={subHeaderTextStyle}>With Trusted Pharmacist</span>
        </h1>
        <div style={descriptionContainerStyle}>
          <img
            src={assets.group_profiles}
            alt="Group Profiles"
            style={profileImgStyle}
          />
          <p style={descriptionTextStyle}>
            Simply browse through our extensive list of trusted Pharmacists.
          </p>
        </div>
        <a
          href="#"
          style={buttonStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#f7b944')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#f9a826')}
        >
          Book Appointment{' '}
          <img
            src={assets.arrow_icon}
            alt="Arrow Icon"
            style={arrowIconStyle}
          />
          <a href="#speciality"/>
        </a>
      </div>

      {/* --------- Right side --------- */}
      <div style={rightSideStyle}>
        <img
          src={assets.header_img}
          alt="Header Image"
          style={headerImgStyle}
        />
      </div>
    </div>
  );
};

export default Header;

// CSS Styles as JavaScript Objects
const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '40px',
  background: 'linear-gradient(135deg, #f3f8ff, #e0ebff)',
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const leftSideStyle = {
  flex: 1,
  padding: '20px',
};

const headerTextStyle = {
  fontSize: '36px',
  fontWeight: 'bold',
  color: '#001f54',
  lineHeight: '1.3',
};

const subHeaderTextStyle = {
  fontSize: '28px',
  color: '#f9a826',
};

const descriptionContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  marginTop: '20px',
};

const profileImgStyle = {
  width: '60px',
  height: '60px',
  borderRadius: '50%',
};

const descriptionTextStyle = {
  fontSize: '16px',
  color: '#4a5568',
  lineHeight: '1.5',
};

const buttonStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  marginTop: '20px',
  padding: '12px 24px',
  backgroundColor: '#f9a826',
  color: '#001f54',
  fontWeight: 'bold',
  textDecoration: 'none',
  borderRadius: '25px',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
};

const arrowIconStyle = {
  width: '20px',
  height: '20px',
  marginLeft: '10px',
};

const rightSideStyle = {
  flex: 1,
  textAlign: 'center',
};

const headerImgStyle = {
  width: '80%',
  maxWidth: '500px',
  borderRadius: '12px',
};
