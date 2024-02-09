import React from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignIn/signIn";
import Dashboard from "./Dashboard";
import Layout from "./layout";
import Header from "./Components/Header/Header"
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Header />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
