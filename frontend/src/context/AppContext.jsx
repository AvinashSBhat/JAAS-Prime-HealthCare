import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { doctors as localDoctors } from "../assets/assets";
import axios from 'axios';

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

  // Load doctors data from backend
  const getDoctosData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/doctors`);
      setDoctors(data);
      return data;
    } catch (error) {
      console.error("Error fetching doctors:", error);
      // Fallback to local data if backend fails
      setDoctors(localDoctors);
      return localDoctors;
    }
  };

  // Load user profile data function that works without backend
  const loadUserProfileData = async () => {
    // This function now just returns the local data
    return userData;
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
