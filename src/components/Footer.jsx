import React from 'react';

// Replace with actual import for logo, if needed
import { assets } from '../assets/assets';

export const Footer = () => {
  // Inline styles
  const footerStyle = {
    padding: '20px',
    backgroundColor: '#f8f9fa',
    color: '#333',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    marginTop: '20px',
  };

  const leftSideStyle = {
    flex: '1 1 30%', // Flex item that grows and shrinks with a base width of 30%
    margin: '10px',
  };

  const centerStyle = {
    flex: '1 1 30%', // Flex item that grows and shrinks with a base width of 30%
    margin: '10px',
  };

  const rightSideStyle = {
    flex: '1 1 30%', // Flex item that grows and shrinks with a base width of 30%
    margin: '10px',
  };

  const logoStyle = {
    width: '150px',
    marginBottom: '10px',
  };

  const paragraphStyle = {
    fontSize: '1rem',
    color: '#555',
  };

  const listStyle = {
    listStyle: 'none',
    padding: '0',
    color: '#555',
  };

  const listItemStyle = {
    margin: '5px 0',
  };

  const contactStyle = {
    color: '#555',
  };

  const copyrightStyle = {
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '0.9rem',
    color: '#888',
  };

  return (
    <>
      <div style={footerStyle}>
        {/* Left Side */}
        <div style={leftSideStyle}>
          <img src={assets.logo} alt="Logo" style={logoStyle} />
          <p style={paragraphStyle}>
            One of the most trusted websites with 100+ trusted Pharmacists and nurses.
          </p>
        </div>

        {/* Center Section */}
        <div style={centerStyle}>
          <p style={paragraphStyle}>COMPANY</p>
          <ul style={listStyle}>
            <li style={listItemStyle}>Home</li>
            <li style={listItemStyle}>About us</li>
            <li style={listItemStyle}>Contact us</li>
            <li style={listItemStyle}>Privacy Policy</li>
          </ul>
        </div>

        {/* Right Side */}
        <div style={rightSideStyle}>
          <p style={paragraphStyle}>GET IN TOUCH</p>
          <ul style={listStyle}>
            <li style={listItemStyle}>+9024962067</li>
            <li style={listItemStyle}>kunikamewara1012@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright Text */}
      <div style={copyrightStyle}>
        <hr />
        <p>Copyright 2024@ MediNest ALL RIGHTS RESERVED.</p>
      </div>
    </>
  );
};

export default Footer;

