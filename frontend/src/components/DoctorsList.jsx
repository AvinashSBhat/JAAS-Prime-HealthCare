import React from "react";
import "../Style/DoctorsList.css";
import rakesh from "../assets/doc1.png";
import sujata from "../assets/doc2.png";
import amit from "../assets/doc3.png";
import subash from "../assets/doc4.png";

const doctors = [
  {
    name: "Dr. Rakesh Mehta",
    specialty: "General physician",
    image: rakesh,
    availability: "Available",
  },
  {
    name: "Dr. Sujata Puhan",
    specialty: "Gynecologist",
    image: sujata,
    availability: "Available",
  },
  {
    name: "Dr. Amit Saha",
    specialty: "Dermatologist",
    image: amit,
    availability: "Available",
  },
  {
    name: "Dr. Subash Chandra Das",
    specialty: "Neurologist",
    image: subash,
    availability: "Available",
  },
];

const DoctorsList = () => {
  return (
    <div className="doctors-section">
      <h2 className="section-title">Top Doctors to Book</h2>
      <p className="section-subtitle">
       Simply browse through our extensive list of trusted doctors.
      </p>

      <div className="doctors-container">
        {doctors.map((doctor, index) => (
          <div key={index} className="doctor-card">
            <img src={doctor.image} alt={doctor.name} className="doctor-img" />
            <div className="doctor-info">
              <p className="availability">
                <span className="status-dot"></span> {doctor.availability}
              </p>
              <h3 className="doctor-name">{doctor.name}</h3>
              <p className="doctor-specialty">{doctor.specialty}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;