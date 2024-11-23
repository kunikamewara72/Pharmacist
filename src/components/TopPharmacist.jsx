import React, { useContext } from "react"; // Import useContext
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext"; // Ensure this is correctly imported

export const TopPharmacist = ({ professionals: propProfessionals }) => {
  const navigate = useNavigate();
  const { defaultProfessionals } = useContext(AppContext); // Use the context value

  // Use propProfessionals if provided, fallback to defaultProfessionals from context
  const professionals = propProfessionals || defaultProfessionals;

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Top Pharmacist to Book</h1>
      <p style={subTextStyle}>
        Simply browse through our extensive list of trusted Pharmacists.
      </p>

      <div style={gridStyle}>
        {professionals.slice(0, 10).map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/appointment/${item._id}`)} // Navigate to the appointment page
            className="fade-in" // Animation class
            style={{
              ...cardStyle,
              animationDelay: `${index * 0.1}s`, // Staggered animation delay
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="animated-image" // Animation class for the image
              style={imageStyle}
            />
            <div style={cardContentStyle}>
              <div style={availabilityStyle}>
                <p style={availabilityTextStyle}>Available</p>
              </div>
              <p style={nameStyle}>{item.name}</p>
              <p style={specialityStyle}>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPharmacist;

// CSS styles
const containerStyle = {
  padding: "40px",
  backgroundColor: "#f8f9fa",
  textAlign: "center",
};

const headerStyle = {
  fontSize: "32px",
  fontWeight: "bold",
  color: "#001f54",
  marginBottom: "10px",
};

const subTextStyle = {
  fontSize: "18px",
  color: "#6c757d",
  marginBottom: "30px",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: "20px",
  justifyContent: "center",
};

const cardStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "10px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
  textAlign: "center",
  transition: "transform 0.3s, box-shadow 0.3s",
  cursor: "pointer",
  animation: "fadeIn 0.5s ease-in", // Fade-in animation
};

const imageStyle = {
  width: "100%",
  height: "200px",
  objectFit: "cover",
  transition: "transform 0.3s",
};

const cardContentStyle = {
  padding: "20px",
};

const availabilityStyle = {
  backgroundColor: "#28a745",
  color: "#ffffff",
  padding: "5px 10px",
  borderRadius: "5px",
  fontSize: "14px",
  marginBottom: "10px",
  display: "inline-block",
};

const availabilityTextStyle = {
  margin: 0,
};

const nameStyle = {
  fontSize: "20px",
  fontWeight: "bold",
  color: "#001f54",
  margin: "10px 0",
};

const specialityStyle = {
  fontSize: "16px",
  color: "#6c757d",
  margin: 0,
};



