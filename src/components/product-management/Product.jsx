//import React from 'react'

import React, { useState, useEffect } from "react";
import './Product.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";


const api = import.meta.env.VITE_API_URL;

function AddProductForm() {

  const [category, setCategory] = useState("");
  const [productName, setProductName] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState([{ featureName: "", featureValue: "" }]);
  const [images, setImages] = useState([{ featureName: "", featureValue: "" }]);
  const [categoryName, setCategoryName] = useState(""); // Selected category

  const [categories, setCategories] = useState([]);

  //Fetch categories from the backend when the component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${api}/product/category`); // Replace with your API endpoint
        console.log("categoriesss",response)
        
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



  // Example of fetching categories from an API or setting them manually
 
 
  // useEffect(() => {
  //   const fetchedCategories = ["Electronics", "Furniture", "Clothing", "Books"];
  //   setCategories(fetchedCategories);
  //   console.log("Fetched Categories:", fetchedCategories);  // Log to check
  // }, []);
  
  const handleCategoryChange = (e) => {
    console.log("categoryName",e.target.value)
    setCategoryName(e.target.value); // Update selected category name
  };

  // Handle changes in product fields
  const handleProductChange = (e) => {
    const { name, value } = e.target;
    if (name === "productName") setProductName(value);
    if (name === "customerId") setCustomerId(value);
    if (name === "description") setDescription(value);
  };

  // Handle changes in feature fields
  const handleFeatureChange = (index, e) => {
    const newFeatures = [...features];
    newFeatures[index][e.target.name] = e.target.value;
    setFeatures(newFeatures);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]); // Add selected files to the state
  };

  // Add new feature row
  const addFeature = () => {
    setFeatures([...features, { featureName: "", featureValue: "" }]);
  };

  // Remove feature row
  const removeFeature = (index) => {
    const newFeatures = features.filter((_, i) => i !== index);
    setFeatures(newFeatures);
  };

  // Submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const productData = {
      productName,
      customerId,
      description,
      categoryName,
      productFeatures: features,
    };
console.log("productDataToStore",productData)
    try {
   

      const response = await axios.post(`${api}/product/add`, productData);

      if (response) {
        console.log("Product added successfully");
        // Reset form after submission
        setProductName("");
        setCustomerId("");
        setDescription("");
        setCategory("");
        setFeatures([{ featureName: "", featureValue: "" }]);
      } else {
        console.error("Failed to add product");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };


  const removeImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index)); // Remove an image by index
  };


  return (
<>
    <div className="container">
   
    <form onSubmit={handleSubmit} className="form-div">
    <h1>Add Product</h1>
      
      <div className="form-group">
        <label htmlFor="category">Select Category</label>
       
        <select className="form-control"
       id="category"
       value={categoryName}
       onChange={handleCategoryChange}
         >
            <option value="">-- Select a Category --</option>
            
            {categories.map((category) => (
              <option key={category.id} value={category.categoryName}>
                {category.categoryName}
              </option>
            ))}
          </select>
      </div>

 

      <div className="form-group">
        <label>Product Name</label>
        <input
          type="text"
          name="productName"
          value={productName}
          onChange={handleProductChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Customer ID</label>
        <input
          type="number"
          name="customerId"
          value={customerId}
          onChange={handleProductChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          name="description"
          value={description}
          onChange={handleProductChange}
          required
        />
      </div>

      <h3>Product Features</h3>
      
      <div className="feature">
        {features.map((feature, index) => (
          <div className="feature-row" key={index}>
            <input
              type="text"
              name="featureName"
              value={feature.featureName}
              onChange={(e) => handleFeatureChange(index, e)}
              placeholder="Feature Name"
            />
            <input
              type="text"
              name="featureValue"
              value={feature.featureValue}
              onChange={(e) => handleFeatureChange(index, e)}
              placeholder="Feature Value"
            />
            <button
              type="button"
              className="delete-btn"
              onClick={() => removeFeature(index)}
            >
              Delete
            </button>
          </div>
        ))}
        <button type="button" className="add-feature-btn" onClick={addFeature}>
          Add Feature
        </button>
      </div>

<div>
      <label>Images</label>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
      />

{images.length > 0 && (
        <div>
          <h4>Selected Images:</h4>
          <ul>
            {images.map((image, index) => (
              <li key={index}>
                {image.name} <button type="button" onClick={() => removeImage(index)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      )}
      
</div>
      <button type="submit" className="submit-btn">
        Submit
      </button>

    

      
    </form>

    </div>
    </>
  );
}

export default AddProductForm;

