import React from "react";
import headerImg from "../assets/header_img[1].png";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";

export default function Banner() {
  const handleBook = () => {
    alert("Booking appointment...");
  };

  return (
    <section className="banner-section">
      <div className="banner-card">
        {/* LEFT CONTENT */}
        <div className="banner-left">
          <h1 className="banner-title">
            Book Appointment <br />
            With Trusted Doctors
          </h1>

          <div className="banner-info">
            <div className="avatar-group">
              <img src={avatar1} alt="" className="avatar" />
              <img src={avatar2} alt="" className="avatar" OJ/>
              <img src={avatar3} alt="" className="avatar" />
            </div>

            <p className="banner-desc">
              Simply browse through our extensive list of trusted doctors,
              schedule your appointment hassle-free.
            </p>
          </div>

          <button onClick={handleBook} className="banner-btn">
            Book appointment
            <svg
              className="arrow-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="banner-right">
          <img src={headerImg} alt="Trusted doctors" className="doctor-img" />
        </div>
      </div>
    </section>
  );
}