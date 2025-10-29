import React from "react";
import aboutImg from "../assets/about_image.png"; 
import "../Style/About.css";

export default function About() {
  return (
    <div className="about-container">
      {/* ABOUT US SECTION */}
      <section className="about-section">
        <div className="about-image">
          <img src={aboutImg} alt="Doctors" />
        </div>

        <div className="about-content">
          <h2>
            ABOUT <span>US</span>
          </h2>
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>

          <p>
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>

          <h3>Our Vision</h3>
          <p>
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="choose-section">
        <h2>
          WHY <span>CHOOSE US</span>
        </h2>

        <div className="choose-grid">
          <div className="choose-card">
            <h3>EFFICIENCY:</h3>
            <p>
              Streamlined appointment scheduling that fits into your busy
              lifestyle.
            </p>
          </div>

          <div className="choose-card">
            <h3>CONVENIENCE:</h3>
            <p>
              Access to a network of trusted healthcare professionals in your
              area.
            </p>
          </div>

          <div className="choose-card">
            <h3>PERSONALIZATION:</h3>
            <p>
              Tailored recommendations and reminders to help you stay on top of
              your health.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}