import React from "react";
import DoctorBanner from "./component/Banner";
import TopDoctors from "./component/TopDoctors";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <DoctorBanner />
      <TopDoctors />
    </div>
  );
}

export default App;