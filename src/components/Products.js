import React from 'react';
import { BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom';

import './Products.css';

function Products() {
  const products = [
    {
      id: 1,
      name: 'Blue T-Shirt',
      description: 'A comfortable blue t-shirt made of 100% cotton.',
      price: 19.99,
      image: 'https://via.placeholder.com/250x250.png?text=Blue+T-Shirt',
    },
    {
      id: 2,
      name: 'Blue Hat',
      description: 'A stylish blue hat made of high-quality materials.',
      price: 14.99,
      image: 'https://via.placeholder.com/250x250.png?text=Blue+Hat',
    },
    {
      id: 3,
      name: 'Blue Backpack',
      description: 'A durable blue backpack with multiple pockets.',
      price: 39.99,
      image: 'https://via.placeholder.com/250x250.png?text=Blue+Backpack',
    },
    {
        id: 4,
        name: 'Blue Backpack',
        description: 'A durable blue backpack with multiple pockets.',
        price: 39.99,
        image: 'https://via.placeholder.com/250x250.png?text=Blue+Backpack',
      },
      {
        id: 5,
        name: 'Blue Backpack',
        description: 'A durable blue backpack with multiple pockets.',
        price: 39.99,
        image: 'https://via.placeholder.com/250x250.png?text=Blue+Backpack',
      },
      {
        id: 6,
        name: 'Blue Backpack',
        description: 'A durable blue backpack with multiple pockets.',
        price: 39.99,
        image: 'https://via.placeholder.com/250x250.png?text=Blue+Backpack',
      },
      {
        id: 7,
        name: 'Blue Backpack',
        description: 'A durable blue backpack with multiple pockets.',
        price: 39.99,
        image: 'https://via.placeholder.com/250x250.png?text=Blue+Backpack',
      },
      {
        id: 8,
        name: 'Blue Backpack',
        description: 'A durable blue backpack with multiple pockets.',
        price: 39.99,
        image: 'https://via.placeholder.com/250x250.png?text=Blue+Backpack',
      },
      {
        id: 9,
        name: 'Blue Backpack',
        description: 'A durable blue backpack with multiple pockets.',
        price: 39.99,
        image: 'https://via.placeholder.com/250x250.png?text=Blue+Backpack',
      },
      {
        id: 10,
        name: 'Blue Backpack',
        description: 'A durable blue backpack with multiple pockets.',
        price: 39.99,
        image: 'https://via.placeholder.com/250x250.png?text=Blue+Backpack',
      },
      {
        id: 11,
        name: 'Blue Backpack',
        description: 'A durable blue backpack with multiple pockets.',
        price: 39.99,
        image: 'https://via.placeholder.com/250x250.png?text=Blue+Backpack',
      },
      {
        id: 12,
        name: 'Blue Backpack',
        description: 'A durable blue backpack with multiple pockets.',
        price: 39.99,
        image: 'https://via.placeholder.com/250x250.png?text=Blue+Backpack',
      },
      
      
  ];

  return (
    <div id="products">
    <div class="header">
  <div class="logo">
    <h1>Give It To Us</h1>
  </div>
  <div class="search-bar">
    <input type="text" placeholder="Search..."/>
    <button>Search</button>
  </div>
  <div class="cart-icon">
  <span>
  <Link to='/Checkout'>Cart </Link>
  </span> 
  </div>
</div>
    
    
    <div className="products-page">
    <div className="category-column">
          <ul>
            <p>Category</p>
            <li>Clothing</li>
            <li>Accessories</li>
            <li>Footwear</li>
            <li>Electronics</li>
            <li>Furniture</li>
            <li>Books</li>
            

            <li>Bags</li>
            <p>Price Range</p>
            <li>$10-$50</li>
            <li>$50-$100</li>
            <li>$100-$150</li>
            
          </ul>
        </div> 
      <div className="products-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img className="product-image" src={product.image} alt={product.name} />
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price.toFixed(2)}</p>
            <button className="product-buy-button">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
    
    </div>
  );
}

export default Products;
