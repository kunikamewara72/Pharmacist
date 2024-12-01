import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleLogout = () => {
    setToken(false);
    navigate('/login');
  };

  return (
    <nav style={navbarStyle}>
      {/* Logo Section */}
      <div style={logoSectionStyle}>
        <img src={assets.logo} alt="Logo" style={logoStyle} />
        <h1 style={titleStyle}>MediNest</h1>
      </div>

      {/* Navigation Links */}
      <ul style={navLinksStyle}>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
        >
          <li style={navItemStyle}>HOME</li>
        </NavLink>
        <NavLink
          to="/pharmacists"
          style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
        >
          <li style={navItemStyle}>ALL PHARMACISTS</li>
        </NavLink>
        <NavLink
          to="/medicines"
          style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
        >
          <li style={navItemStyle}>MEDICINES</li>
        </NavLink>
        <NavLink
          to="/billing"
          style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
        >
          <li style={navItemStyle}>BILLING</li>
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
        >
          <li style={navItemStyle}>ABOUT</li>
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) => (isActive ? activeLinkStyle : linkStyle)}
        >
          <li style={navItemStyle}>CONTACT</li>
        </NavLink>
      </ul>

      {/* Button/Profile Section */}
      <div style={buttonSectionStyle}>
        {token ? (
          <div style={profileContainerStyle} onClick={toggleDropdown}>
            <img
              src={assets.profile_pic}
              alt="Profile"
              style={profilePicStyle}
            />
            <img
              src={assets.dropdown_icon}
              alt="Dropdown"
              style={dropdownIconStyle}
            />
            {showDropdown && (
              <div style={dropdownMenuStyle}>
                <p
                  style={dropdownItemStyle}
                  onClick={() => {
                    setShowDropdown(false);
                    navigate('/profile');
                  }}
                >
                  My Profile
                </p>
                <p
                  style={dropdownItemStyle}
                  onClick={() => {
                    setShowDropdown(false);
                    navigate('/appointments');
                  }}
                >
                  Appointments
                </p>
                <p
                  style={dropdownItemStyle}
                  onClick={handleLogout}
                >
                  Logout
                </p>
              </div>
            )}
          </div>
        ) : (
          <button
            style={buttonStyle}
            onClick={() => navigate('/register')}
          >
            Create Account
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

// Inline CSS Styles
const navbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: '#001F54',
  color: '#ffffff',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
};

const logoSectionStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
};

const logoStyle = {
  width: '40px',
  height: '40px',
};

const titleStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  margin: 0,
  color: '#ffffff',
};

const navLinksStyle = {
  display: 'flex',
  gap: '20px',
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

const navItemStyle = {
  cursor: 'pointer',
  transition: 'color 0.3s',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '500',
  transition: 'color 0.3s',
};

const activeLinkStyle = {
  color: '#f9a826',
};

const buttonSectionStyle = {
  display: 'flex',
  alignItems: 'center',
};

const buttonStyle = {
  backgroundColor: '#f9a826',
  color: '#001f54',
  fontSize: '14px',
  fontWeight: 'bold',
  padding: '8px 16px',
  border: 'none',
  borderRadius: '20px',
  cursor: 'pointer',
  transition: 'background-color 0.3s, transform 0.2s',
};

const profileContainerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  position: 'relative',
  cursor: 'pointer',
};

const profilePicStyle = {
  width: '30px',
  height: '30px',
  borderRadius: '50%',
};

const dropdownIconStyle = {
  width: '20px',
  height: '20px',
};

const dropdownMenuStyle = {
  position: 'absolute',
  top: '50px',
  right: 0,
  backgroundColor: '#ffffff',
  color: '#001f54',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: '10px',
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 10,
};

const dropdownItemStyle = {
  margin: '5px 0',
  padding: '5px 10px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
};

dropdownItemStyle[':hover'] = {
  backgroundColor: '#f9a826',
};

