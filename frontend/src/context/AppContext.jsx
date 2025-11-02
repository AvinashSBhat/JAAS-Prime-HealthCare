import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { doctors as localDoctors } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [aToken, setAToken] = useState(localStorage.getItem("aToken") || "");
  const [doctors, setDoctors] = useState(localDoctors || []);
  const [userData, setUserData] = useState(null);

  // Function to update token
  const updateToken = (token) => {
    if (token) {
      localStorage.setItem("aToken", token);
    } else {
      localStorage.removeItem("aToken");
    }
    setAToken(token || "");
  };

  // Backend base URL — update to your running backend if different.
  // Default to http://localhost:8080 where the Spring Boot server usually runs.
  const backendUrl = "http://localhost:8080";

  // Load user profile data function that works without backend
  const loadUserProfileData = async () => {
    // This function now just returns the local data
    return userData;
  };

  // Function to get doctors data
  const getDoctosData = async () => {
    // For now, just ensure doctors are loaded from local data
    setDoctors(localDoctors);
  };

  const value = {
    aToken,
    setAToken,
    doctors,
    setDoctors,
    userData,
    setUserData,
    backendUrl,
    loadUserProfileData,
    getDoctosData,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default AppContextProvider;
