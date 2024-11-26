import React, { useState } from 'react';

import axios from 'axios';
import 'react-phone-input-2/lib/style.css'; // Import default styles
import PhoneInput from 'react-phone-input-2';
import './CustomerForm.css';
const CustomerForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [addresses, setAddresses] = useState([
    { addressType: '', line1: '', line2: '', city: '', state: '', country: '', pincode: '', isPrimary: false },
  ]);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [responseData, setResponseData] = useState('');

  const handleAddAddress = () => {
    setAddresses([
      ...addresses,
      { addressType: '', line1: '', line2: '', city: '', state: '', country: '', pincode: '', isPrimary: false },
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const customerData = { name, email, phone, addresses };
    console.log('Submitting Customer Data:', customerData); // Debugging

    try {
        // const response = await fetch('http://localhost:8080/save', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         // other headers if needed
        //     },
        //     body: JSON.stringify(customerData),
        //     credentials: 'include',  // Include cookies if required for authentication
        // });
     const response= await axios.post(`http://localhost:8080/savecustomer`)
    
      if (!response) {
        throw new Error('Failed to create customer');
      }

      setResponseData(response.data);
      console.log('Response:', response.data);
      setSuccessMessage('Customer created successfully!');
      console.log('Success:', result);

      // Reset form fields
      setName('');
      setEmail('');
      setPhone('');
      setAddresses([
        { addressType: '', line1: '', line2: '', city: '', state: '', country: '', pincode: '', isPrimary: false },
      ]);
    } catch (err) {
      console.error('Error:', err.message);
      setError('There was an error creating the customer.');
    }
  };

  return (
    <div>
      <h2>Create Customer</h2>
      {error && <div className="error">{error}</div>}
      {successMessage && <div className="success">{successMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
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
            <div>
              <label>Address Type:</label>
              <input
                type="text"
                value={address.addressType}
                onChange={(e) => {
                  const newAddresses = [...addresses];
                  newAddresses[index].addressType = e.target.value;
                  setAddresses(newAddresses);
                }}
              />
            </div>
            <div>
              <label>Line 1:</label>
              <input
                type="text"
                value={address.line1}
                onChange={(e) => {
                  const newAddresses = [...addresses];
                  newAddresses[index].line1 = e.target.value;
                  setAddresses(newAddresses);
                }}
              />
            </div>
            <div>
              <label>Line 2:</label>
              <input
                type="text"
                value={address.line2}
                onChange={(e) => {
                  const newAddresses = [...addresses];
                  newAddresses[index].line2 = e.target.value;
                  setAddresses(newAddresses);
                }}
              />
            </div>
            <div>
              <label>City:</label>
              <input
                type="text"
                value={address.city}
                onChange={(e) => {
                  const newAddresses = [...addresses];
                  newAddresses[index].city = e.target.value;
                  setAddresses(newAddresses);
                }}
              />
            </div>
            <div>
              <label>State:</label>
              <input
                type="text"
                value={address.state}
                onChange={(e) => {
                  const newAddresses = [...addresses];
                  newAddresses[index].state = e.target.value;
                  setAddresses(newAddresses);
                }}
              />
            </div>
            <div>
              <label> Country:</label>
              <input
                type="text"
                value={address.country}
                onChange={(e) => {
                  const newAddresses = [...addresses];
                  newAddresses[index].country = e.target.value;
                  setAddresses(newAddresses);
                }}
              />
            </div>
            <div>
              <label>Pincode:</label>
              <input
                type="text"
                value={address.pincode}
                onChange={(e) => {
                  const newAddresses = [...addresses];
                  newAddresses[index].pincode = e.target.value;
                  setAddresses(newAddresses);
                }}
              />
            </div>
            <div>
              <label>Is Primary:</label>
              <input
                type="checkbox"
                checked={address.isPrimary}
                onChange={(e) => {
                  const newAddresses = [...addresses];
                  newAddresses[index].isPrimary = e.target.checked;
                  setAddresses(newAddresses);
                }}
              />
            </div>
          </div>
        ))}
        <button type="button" onClick={handleAddAddress}>
          Add Another Address
        </button>
        <button type="submit"> Create Customer</button>
      </form>
    </div>
  );
};

export default CustomerForm;
