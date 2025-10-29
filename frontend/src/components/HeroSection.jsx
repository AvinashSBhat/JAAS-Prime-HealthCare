
import React from "react";
import header_img from "../assets/header_img.png"; 




export default function HeroSection() {
  return (
    <section className="flex items-center justify-between bg-[#556ef6] text-white p-8 rounded-2xl mt-4">
      <div className="max-w-[560px]">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          Book Appointment With Trusted Doctors
        </h1>
        <p className="text-sm text-blue-100 mb-6">
          Browse doctors by specialty, read reviews, and book appointments
          easily — all on one platform.
        </p>
        <button className="bg-white text-[#556ef6] px-6 py-2 rounded-full font-semibold shadow-sm">
          Book appointment
        </button>

        <div className="mt-4 flex items-center gap-2">
          {/* small avatars under hero */}
          <img className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/32.jpg" alt="a" />
          <img className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/44.jpg" alt="b" />
          <img className="w-8 h-8 rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/men/65.jpg" alt="c" />
          <span className="text-xs text-blue-100 ml-2">Trusted by thousands</span>
        </div>
      </div>

    <div className="hidden md:block w-1/3">
  <img src={header_img} alt="doctors" className="w-full object-contain" />
</div>

    </section>
  );
}
