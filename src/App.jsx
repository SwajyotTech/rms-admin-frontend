import { useState } from 'react'
//import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';  
import './App.css'
import Product from './components/product-management/Product'
import Category from './components/category/Category';
import Login from './components/login/Login'
import Dashboard from './components/dashboard/Dashboard'
import CustomerForm from './components/Customer/CustomerForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/sidebar/sidebar'
import CustomerFilter from './components/Customer/CustomerFilter'


function App() {

  return (
   
    <Router>
      {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes> */}

<div className="d-flex">
        {/* Sidebar */}
        <div className="sidebar bg-dark text-white p-3">
          <h3>Modules</h3>
          <ul className="list-unstyled">
            <li>
              <Link className="text-white" to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link className="text-white" to="/product">Settings</Link>
            </li>
            <li>
            <Link className="text-white" to="/customerForm" > CustomerForm</Link>{/* Route for Customer */}
            </li>
            <li>
            <Link className="text-white" to="/customerFilter" > CustomerFilter</Link>{/* Route for Customer */}
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="content p-3 w-100">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/product" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/category" element={<Category />} />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/customerForm" element={<CustomerForm />} />
            <Route path="/customerFilter" element={<CustomerFilter />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App
