import React, { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap
import 'react-phone-input-2/lib/style.css'; // Import Phone Input Styles
import PhoneInput from 'react-phone-input-2';
import './CustomerForm.css';

const api = import.meta.env.VITE_API_URL;

const CustomerForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [addresses, setAddresses] = useState([
    { addressType: '', line1: '', line2: '', city: '', state: '', country: '', pincode: '', isPrimary: false },
  ]);
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [responseData, setResponseData] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${api}/product/category`); // Replace with your API endpoint
        if (response) {
          setCategories(response.data); // Assuming the response is an array of categories
        } else {
          console.error("Failed to fetch categories");
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleAddAddress = () => {
    setAddresses([
      ...addresses,
      { addressType: '', line1: '', line2: '', city: '', state: '', country: '', pincode: '', isPrimary: false },
    ]);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value); // Update selected category name
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const customerData = { name, email, phone, addresses, category };
    console.log('Submitting Customer Data:', customerData);

    try {
      const response = await axios.post(`${api}/savecustomer`, customerData);
      if (!response) {
        throw new Error('Failed to create customer');
      }

      setResponseData(response.data);
      setSuccessMessage('Customer created successfully!');
      setName('');
      setEmail('');
      setPhone('');
      setAddresses([
        { addressType: '', line1: '', line2: '', city: '', state: '', country: '', pincode: '', isPrimary: false },
      ]);
    } catch (err) {
      setError('There was an error creating the customer.');
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form-div">
        <h1>Create Customer</h1>

        {error && <div className="error">{error}</div>}
        {successMessage && <div className="success">{successMessage}</div>}

        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <PhoneInput
            country="in"
            value={phone}
            onChange={(value) => setPhone(value)}
            inputStyle={{ width: '100%' }}
            required
          />
        </div>

        

        <h3>Addresses</h3>
        {addresses.map((address, index) => (
          <div key={index}>
            <h4>Address {index + 1}</h4>
            <div className="form-group">
              <label>Address Type</label>
              <input
                type="text"
                value={address.addressType}
                onChange={(e) => {
                  const newAddresses = [...addresses];
                  newAddresses[index].addressType = e.target.value;
                  setAddresses(newAddresses);
                }}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Line 1</label>
              <input
                type="text"
                value={address.line1}
                onChange={(e) => {
                  const newAddresses = [...addresses];
                  newAddresses[index].line1 = e.target.value;
                  setAddresses(newAddresses);
                }}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Line 2</label>
              <input
                type="text"
                value={address.line2}
                onChange={(e) => {
                  const newAddresses = [...addresses];
                  newAddresses[index].line2 = e.target.value;
                  setAddresses(newAddresses);
                }}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                value={address.city}
                onChange={(e) => {
                  const newAddresses = [...addresses];
                  newAddresses[index].city = e.target.value;
                  setAddresses(newAddresses);
                }}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>State</label>
              <input
                type="text"
                value={address.state}
                onChange={(e) => {
                  const newAddresses = [...addresses];
                  newAddresses[index].state = e.target.value;
                  setAddresses(newAddresses);
                }}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Country</label>
              <input
                type="text"
                value={address.country}
                onChange={(e) => {
                  const newAddresses = [...addresses];
                  newAddresses[index].country = e.target.value;
                  setAddresses(newAddresses);
                }}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Pincode</label>
              <input
                type="text"
                value={address.pincode}
                onChange={(e) => {
                  const newAddresses = [...addresses];
                  newAddresses[index].pincode = e.target.value;
                  setAddresses(newAddresses);
                }}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Is Primary</label>
              <input
                type="checkbox"
                checked={address.isPrimary}
                onChange={(e) => {
                  const newAddresses = [...addresses];
                  newAddresses[index].isPrimary = e.target.checked;
                  setAddresses(newAddresses);
                }}
                className="form-check-input"
              />
            </div>
          </div>
        ))}
        <button type="button" onClick={handleAddAddress} className="btn btn-secondary">
          Add Another Address
        </button>
        <button type="submit" className="btn btn-primary mt-3">
          Create Customer
        </button>
      </form>
    </div>
  );
};

export default CustomerForm;
