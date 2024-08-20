import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({ name: '', description: '' });

  // Fetch products from the Django API when the component mounts
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/items/')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  // Handle form submission to add a new product
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/items/create/', product)
      .then(response => {
        setProducts([...products, response.data]);
        setProduct({ name: '', description: '' });
      })
      .catch(error => console.error(error));
  };

  return (
    <div style={styles.app}>
      <h1 style={styles.header}>Product Management</h1>

      {/* Form to add new products */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2>Add New Product</h2>
        <input
          type="text"
          placeholder="Product Name"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          required
          style={styles.input}
        />
        <textarea
          placeholder="Product Description"
          value={product.description}
          onChange={(e) => setProduct({ ...product, description: e.target.value })}
          required
          style={styles.textarea}
        />
        <button type="submit" style={styles.button}>Add Product</button>
      </form>

      {/* Display the list of added products */}
      <div style={styles.listContainer}>
        <h2>Product List</h2>
        {products.length === 0 ? (
          <p>No products added yet.</p>
        ) : (
          <ul style={styles.list}>
            {products.map(product => (
              <li key={product.id} style={styles.listItem}>
                <h3 style={styles.productName}>{product.name}</h3>
                <p style={styles.productDescription}>{product.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

// CSS-in-JS styles
const styles = {
  app: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    margin: 0,
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
  input: {
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  textarea: {
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    resize: 'none',
  },
  button: {
    padding: '10px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#218838',
  },
  listContainer: {
    width: '300px',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    backgroundColor: '#f9f9f9',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    marginBottom: '10px',
  },
  productName: {
    margin: 0,
    color: '#333',
  },
  productDescription: {
    margin: '5px 0 0 0',
    color: '#777',
  },
};

export default App;
