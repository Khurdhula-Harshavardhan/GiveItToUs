import './Login.css'
import { BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

function Login(){
  
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  function handleRememberMeChange(event) {
    setRememberMe(event.target.checked);
  }
    return(
        <>
  <div id="login">
  <div className="box-form">
    <div className="left">
      <div className="overlay">
        <h1>Hello.</h1>
        <p>
          Welcome to GiveItToUs. Your portal to give away to the poor or give us
          something to sell for you. Login or Signup to Begin
        </p>
        <nav>
          <ul>
            <Link to="/Gmail">
              <i className="sin " aria-hidden="true" /> Login with G-Mail
            </Link>
            <Link to="/admin">
              <i className="sin " aria-hidden="true" /> Admin Login
            </Link>
            <Link to="/seller">
              <i className="sin" aria-hidden="true" /> Seller Login
            </Link>
          </ul>
        </nav>
      </div>
    </div>
    <div className="right">
      <h5>Login</h5>
      <p>
        Don't have an account?
        <Link to="/register"> Create Your Account</Link> it takes less
        than a minute
      </p>
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
          navigate("/Products");
        }}>Login</button>
    </div>
  </div>
  </div>
</>

    );
}

export default Login;