import React from "react";
import "../Style/SpecialitySection.css";
import gastro from "../assets/Gastroenterologist.svg";
import general from "../assets/General_physician.svg";
import gynae from "../assets/Gynecologist.svg";
import neuro from "../assets/Neurologist.svg";
import pediatric from "../assets/Pediatricians.svg";

const specialities = [
  { image: gastro, name: "Gastroenterologist" },
  { image: general, name: "General Physician" },
  { image: gynae, name: "Gynecologist" },
  { image: neuro, name: "Neurologist" },
  { image: pediatric, name: "Pediatrician" },
];

export default function SpecialitySection() {
  return (
    <section className="speciality-section">
      <h3 className="speciality-title">Find by Speciality</h3>
      <p className="speciality-subtitle">
        Simply browse through our list of top-rated specialists.
      </p>

      <div className="speciality-container">
        {specialities.map((s, i) => (
          <div key={i} className="speciality-card">
            <img src={s.image} alt={s.name} className="speciality-img" />
            <div className="speciality-name">{s.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
