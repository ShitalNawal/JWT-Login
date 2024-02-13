// AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);

  const login = async (credentials) => {
    try {
      // Call the signIn API with user credentials
      const response = await axios.post('http://localhost:8880/signIn', credentials);
      
      // Extract access token and refresh token from the response
      const { accessToken, refreshToken } = response.data;

      // Set access token and refresh token in state
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);

      // Set isLoggedIn to true
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle login failure (e.g., display error message)
    }
  };

  const logout = () => {
    // Implement your logout logic here
    setIsLoggedIn(false);
    setAccessToken(null);
    setRefreshToken(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, accessToken, refreshToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
