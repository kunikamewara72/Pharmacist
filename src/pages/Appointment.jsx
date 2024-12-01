import React, { useState } from 'react';

const Appointment = ({ professional }) => {
  const [selectedDay, setSelectedDay] = useState('MON');
  const [selectedTime, setSelectedTime] = useState('');

  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const times = ['8:00 AM', '8:30 AM', '9:00 AM', '10:00 AM', '10:30 AM', '11:00 AM'];

  return (
    <div style={styles.appointmentPage}>
      {/* Profile Section */}
      <div style={styles.profileSection}>
        <img src={professional.image} alt={professional.name} style={styles.profileImage} />
        <h1 style={styles.doctorName}>
          {professional.name} <span style={styles.verifiedIcon}>✔️</span>
        </h1>
        <h3 style={styles.speciality}>{professional.degree} - {professional.speciality}</h3>
        <p style={styles.experience}>{professional.experience}</p>
        <p style={styles.about}>{professional.about}</p>
        <p style={styles.fees}>
          Appointment Fee: <span style={styles.feeAmount}>${professional.fees}</span>
        </p>
      </div>

      {/* Booking Section */}
      <div style={styles.bookingSection}>
        <h2>Booking Slots</h2>
        <div style={styles.daysContainer}>
          {days.map((day) => (
            <button
              key={day}
              style={selectedDay === day ? { ...styles.dayButton, ...styles.selectedButton } : styles.dayButton}
              onClick={() => setSelectedDay(day)}
            >
              {day}
            </button>
          ))}
        </div>

        <div style={styles.timeSlots}>
          {times.map((time) => (
            <button
              key={time}
              style={selectedTime === time ? { ...styles.timeSlot, ...styles.selectedButton } : styles.timeSlot}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </button>
          ))}
        </div>

        <button style={styles.bookButton}>
          Book an Appointment
        </button>
      </div>

      {/* Related Doctors Section */}
      <div style={styles.relatedDoctorsSection}>
        <h2>Related Doctors</h2>
        <div style={styles.relatedDoctors}>
          {/* Example Related Doctor */}
          <div style={styles.doctorCard}>
            <img src={professional.image} alt={professional.name} style={styles.relatedDoctorImage} />
            <p>{professional.name}</p>
            <p>{professional.speciality}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Inline CSS Styles
const styles = {
  appointmentPage: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    background: '#ffffff',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
  },
  profileSection: {
    textAlign: 'center',
    borderBottom: '1px solid #ddd',
    paddingBottom: '20px',
  },
  profileImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    marginBottom: '20px',
    objectFit: 'cover',
    border: '4px solid #ddd',
  },
  doctorName: {
    fontSize: '24px',
    fontWeight: '600',
    margin: '0',
    color: '#333',
  },
  verifiedIcon: {
    fontSize: '18px',
    color: '#008000',
  },
  speciality: {
    fontSize: '18px',
    color: '#555',
    margin: '5px 0',
  },
  experience: {
    fontSize: '16px',
    color: '#666',
    margin: '10px 0',
  },
  about: {
    fontSize: '16px',
    color: '#666',
    margin: '10px 0',
  },
  fees: {
    fontSize: '16px',
    color: '#666',
    margin: '10px 0',
  },
  feeAmount: {
    color: '#007bff',
    fontWeight: 'bold',
  },
  bookingSection: {
    padding: '20px 0',
  },
  daysContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
    dayButton: {
    padding: '10px 20px',
    margin: '0 5px',
    border: '1px solid #ddd',
    backgroundColor: '#ffffff',
    cursor: 'pointer',
    fontSize: '14px',
    borderRadius: '5px',
  },
  selectedButton: {
    backgroundColor: '#007bff',
    color: '#ffffff',
    borderColor: '#007bff',
  },
  timeSlots: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  timeSlot: {
    padding: '10px 20px',
    margin: '5px',
    border: '1px solid #ddd',
    backgroundColor: '#ffffff',
    cursor: 'pointer',
    fontSize: '14px',
    borderRadius: '5px',
  },
  bookButton: {
    marginTop: '20px',
    padding: '12px 25px',
    backgroundColor: '#007bff',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  relatedDoctorsSection: {
    padding: '20px 0',
    borderTop: '1px solid #ddd',
  },
  relatedDoctors: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
  },
  doctorCard: {
    textAlign: 'center',
    width: '150px',
  },
  relatedDoctorImage: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    marginBottom: '10px',
  },
};

// Example Usage
const professionals = [

    {
        _id: 'prof1',
        name: 'John Smith',
        image: doc1,
        speciality: 'Compounding Pharmacist',
        degree: 'Pharm.D',
        experience: '4 Years',
        about: 'John specializes in compounding medications tailored to individual patient needs, ensuring personalized and effective treatment.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, Udaipur'
        }
    },
    {
        _id: 'prof2',
        name: 'Sarah Johnson',
        image: doc2,
        speciality: 'Compounding Pharmacist',
        degree: 'Pharm.D',
        experience: '3 Years',
        about: 'Sarah is experienced in creating customized medications with precision, catering to unique patient requirements.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, Udaipur'
        }
    },
    {
        _id: 'prof3',
        name: 'Emily Davis',
        image: doc3,
        speciality: 'Registered Nurse',
        degree: 'RN, BSN',
        experience: '2 Years',
        about: 'Emily is committed to providing compassionate care and ensuring patient comfort and well-being.',
        fees: 40,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, Udaipur'
        }
    },
    {
        _id: 'prof4',
        name: 'Michael Brown',
        image: doc4,
        speciality: 'Registered Nurse',
        degree: 'RN',
        experience: '4 Years',
        about: 'Michael offers expert nursing care with a focus on patient education and recovery support.',
        fees: 50,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, Udaipur'
        }
    },
    {
        _id: 'prof5',
        name: 'Jennifer Lopez',
        image: doc5,
        speciality: 'Compounding Pharmacist',
        degree: 'Pharm.D',
        experience: '5 Years',
        about: 'Jennifer specializes in crafting medications for complex conditions, ensuring patient-specific solutions.',
        fees: 60,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, Udaipur'
        }
    },
    {
        _id: 'prof6',
        name: 'Christopher Lee',
        image: doc6,
        speciality: 'Registered Nurse',
        degree: 'RN',
        experience: '3 Years',
        about: 'Christopher is dedicated to delivering professional and empathetic care to his patients.',
        fees: 45,
        address: {
            line1: '67th Cross, Richmond',
            line2: 'Circle, Ring Road, Udaipur'
        }
    },
    {
        _id: 'prof7',
        name: 'Sophia White',
        image: doc7,
        speciality: 'Compounding Pharmacist',
        degree: 'Pharm.D',
        experience: '6 Years',
        about: 'Sophia provides innovative solutions through expertly compounded medications.',
        fees: 70,
        address: {
            line1: '77th Cross, Richmond',
            line2: 'Circle, Ring Road, Udaipur'
        }
    },
    {
        _id: 'prof8',
        name: 'Liam Green',
        image: doc8,
        speciality: 'Registered Nurse',
        degree: 'RN, BSN',
        experience: '5 Years',
        about: 'Liam excels in patient care and recovery, ensuring quality and comfort for all.',
        fees: 50,
        address: {
            line1: '87th Cross, Richmond',
            line2: 'Circle, Ring Road, Udaipur'
        }
      }
];

const App = () => {
  return (
    <div>
      {professionals.map((professional, index) => (
        <Appointment key={index} professional={professional} />
      ))}
    </div>
  );
};

export default App;

