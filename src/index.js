import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Admin from './components/Admin';
import Register from './components/Register';
import Gmail from './components/Gmail';
import Seller from './components/Seller';
import ProductsPage from './components/ProductsPage';
import SellProducts from './components/SellProducts';
import Cart from './components/Cart';
import Orders from './components/Orders';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/register" element={<Register />} />
      <Route path="/gmail" element={<Gmail />} />
      <Route path="/seller" element={<Seller />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/sellproducts" element={<SellProducts />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
