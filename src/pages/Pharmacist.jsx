import React, { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

export const Pharmacist = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const { defaultProfessionals } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (speciality) {
      const filtered = defaultProfessionals.filter(
        (doc) => doc.speciality.toLowerCase() === speciality.toLowerCase()
      );
      setFilterDoc(filtered);
    } else {
      setFilterDoc(defaultProfessionals);
    }
  }, [speciality, defaultProfessionals]);

  // Inline styles
  const styles = {
    container: {
      display: "flex",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      gap: "20px",
    },
    sidebar: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    sidebarItem: {
      cursor: "pointer",
      padding: "10px 15px",
      border: "1px solid #ccc",
      borderRadius: "5px",
      backgroundColor: "#f9f9f9",
      transition: "all 0.3s",
    },
    sidebarItemHover: {
      backgroundColor: "#007bff",
      color: "white",
    },
    grid: {
      flex: 3,
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
    },
    card: {
      padding: "20px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      textAlign: "center",
      backgroundColor: "#fff",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.2s, box-shadow 0.2s",
    },
    cardHover: {
      transform: "translateY(-5px)",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
    },
    image: {
      width: "100px",
      height: "100px",
      objectFit: "cover",
      borderRadius: "50%",
      marginBottom: "15px",
    },
    info: {
      textAlign: "center",
    },
    availability: {
      fontSize: "14px",
      color: "green",
      marginBottom: "10px",
    },
    name: {
      fontSize: "18px",
      fontWeight: "bold",
      marginBottom: "5px",
    },
    speciality: {
      fontSize: "16px",
      color: "#555",
    },
    noResults: {
      textAlign: "center",
      fontSize: "16px",
      color: "#888",
    },
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <p
          style={styles.sidebarItem}
          onClick={() => navigate("/pharmacists")}
        >
          All Pharmacists
        </p>
        <p
          style={styles.sidebarItem}
          onClick={() => navigate("/pharmacists/general-physician")}
        >
          General Physician
        </p>
        <p
          style={styles.sidebarItem}
          onClick={() => navigate("/pharmacists/gynecologist")}
        >
          Gynecologist
        </p>
        <p
          style={styles.sidebarItem}
          onClick={() => navigate("/pharmacists/dermatologist")}
        >
          Dermatologist
        </p>
        <p
          style={styles.sidebarItem}
          onClick={() => navigate("/pharmacists/pediatricians")}
        >
          Pediatricians
        </p>
        <p
          style={styles.sidebarItem}
          onClick={() => navigate("/pharmacists/neurologist")}
        >
          Neurologist
        </p>
        <p
          style={styles.sidebarItem}
          onClick={() => navigate("/pharmacists/gastroenterologist")}
        >
          Gastroenterologist
        </p>
      </div>

      {/* Pharmacist Grid */}
      <div style={styles.grid}>
        {filterDoc.length > 0 ? (
          filterDoc.map((item) => (
            <div
              key={item._id}
              style={styles.card}
              onClick={() => navigate(`/appointment/${item._id}`)}
            >
              <img
                src={item.image}
                alt={item.name}
                style={styles.image}
              />
              <div style={styles.info}>
                <p style={styles.availability}>
                  {item.isAvailable ? "Available" : "Not Available"}
                </p>
                <p style={styles.name}>{item.name}</p>
                <p style={styles.speciality}>{item.speciality}</p>
              </div>
            </div>
          ))
        ) : (
          <p style={styles.noResults}>No pharmacists found for this specialty.</p>
        )}
      </div>
    </div>
  );
};

export default Pharmacist;
