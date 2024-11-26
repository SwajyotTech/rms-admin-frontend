import React, { useState } from 'react';
import './Category.css'
import axios from 'axios';



const api = import.meta.env.VITE_API_URL;


export default function Category() {
  const [categoryName, setCategoryName] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const categoryData = {
      categoryName: categoryName,
      description: categoryDescription,
    };

    try {
      const response=await axios.post(`${api}/product/save/category`, categoryData)
      if (response) {
        console.log('Category added successfully');
        // Clear form fields
        setCategoryName('');
        setCategoryDescription('');
      } else {
        console.error('Failed to add category');
      }
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Add Category</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="categoryName">Category Name</label>
          <input
            type="text"
            id="categoryName"
            className="form-control"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="Enter category name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="categoryDescription">Category Description</label>
          <textarea
            id="categoryDescription"
            className="form-control"
            value={categoryDescription}
            onChange={(e) => setCategoryDescription(e.target.value)}
            placeholder="Enter category description"
            rows="3"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Add Category
        </button>
      </form>
    </div>
  );
}
