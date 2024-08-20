import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      <h2>Product List</h2>
      {products.length === 0 ? (
        <p>No products added yet.</p>
      ) : (
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;