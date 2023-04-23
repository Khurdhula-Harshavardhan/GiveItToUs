import './Seller.css'
import { BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

function Seller(){
  
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  function handleRememberMeChange(event) {
    setRememberMe(event.target.checked);
  }
    return(
        <>
  
  <div className="box-form">
    <div className="left">
      <div className="overlay">
        <h1>Seller</h1>
        <p>
          Welcome to GiveItToUs. Your portal to give away to the poor or give us
          something to sell for you. Login or Signup to Begin
        </p>
        <span>
          <Link to='/'>Go to home page </Link>
          </span>
      </div>
    </div>
    <div className="right">
      <h5>Login</h5>
      
      <div className="inputs">
        <input type="text" placeholder="user name" />
        <br />
        <input type="password" placeholder="password" />
      </div>
      <br />
      <br />
      <div className="remember-me--forget-password">
        <p>
          <input type="checkbox"
                name="rememberMe"
                checked={rememberMe}
                onChange={handleRememberMeChange} />
          <span className="text-checkbox">Remember me</span>
        </p>
        <p>forget password?</p>
      </div>
      <br />
      <button  onClick={() => {
          navigate("/Seller_post");
        }}>Login</button>
    </div>
  </div>
</>

    );
}

export default Seller;