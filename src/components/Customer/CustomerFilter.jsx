import React, { useState } from 'react';
import axios from 'axios';
import './CustomerFilter.css';

const CustomerFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const fetchCustomers = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('http://localhost:8080/filter/customers', {
        params: { searchTerm },
      });

      console.log(response.data);

      const customersData = Array.isArray(response.data) ? response.data : response.data.customers;

      if (Array.isArray(customersData)) {
        setCustomers(customersData);
      } else {
        setError('Invalid response format. Expected an array of customers.');
      }
    } catch (err) {
      setError('Error fetching customers: ' + (err.response?.data?.message || err.message));
    }

    setLoading(false);
  };

  return (
    <div className="customer-filter-container">
      <div>
        <input
          type="text"
          placeholder="Enter name, email, phone, city, state, country, or pincode"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button onClick={fetchCustomers} disabled={loading}>
          {loading ? 'Loading...' : 'Search Customers'}
        </button>
      </div>
      {error && <div className="error-message">{error}</div>}
      <div>
        {customers.length === 0 ? (
          <p className="empty-state">No customers found</p>
        ) : (
          <ul className="customer-list">
            {customers.map((customer) => (
              <li key={customer.id}>
                <strong>{customer.name}</strong> - {customer.email} - {customer.phone} <br />
                {customer.addresses && customer.addresses.length > 0 ? (
                  <div>
                    <strong>Addresses:</strong>
                    <ul className="address-list">
                      {customer.addresses.map((address, index) => (
                        <li key={index}>
                          {address.addressType}: {address.line1}, {address.city}, {address.state}, {address.country} - {address.pincode}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p>No addresses available.</p>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
export default CustomerFilter;
