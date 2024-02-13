import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignIn/signIn";
import Dashboard from "./Dashboard";
import Layout from "./layout";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Messages from "./Components/Profile/messages";
import { AuthProvider } from "./Components/AuthContext/AuhContext";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Header />} /> */}
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/messages" element={<Messages />} />
          {/* <ProtectedRoute path="/messages" element={<Messages />} /> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
