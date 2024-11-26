import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';  // Import the NavBar
import CustomerForm from "./Components/CustomerForm";
import AdminLogin from "./Components/AdminLogin";
const App = () => {
  return (
    <Router>
      <NavBar /> {/* Add the NavBar component */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> Route for Home */}
        {/* <Route path="/about" element={<About />} /> Route for About */}
        {/* <Route path="/contact" element={<Contact />} /> Route for Contact */}
        <Route path="/customers" element={<CustomerForm />} /> {/* Route for Customer */}
        <Route path="/admin-login" element={<AdminLogin />} /> 
      </Routes>
    </Router>
  );
};
export default App;
