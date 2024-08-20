import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = ({ onProductAdded }) => {
  const [product, setProduct] = useState({ name: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/items/create/', product)
      .then(response => {
        onProductAdded(response.data);
        setProduct({ name: '', description: '' });
      })
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <h2>Add New Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
        required
      />
      <textarea
        placeholder="Product Description"
        value={product.description}
        onChange={(e) => setProduct({ ...product, description: e.target.value })}
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;