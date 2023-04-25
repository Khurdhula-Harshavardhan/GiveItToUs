import './Login.css'
import { BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useState, useEffect } from 'react';
import bcrypt from 'bcryptjs';
import { useNavigate } from 'react-router-dom';

function Login(){
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  // Check if username already exists
  async function checkUsername(username) {
    try {
      const response = await fetch(`http://localhost:3001/api/buyers/check-username/${username}`);
      
      if (response.ok) {
        const data = await response.json();
        console.log(`Username exists: ${data.exists}`);
        return data.exists;
      } else {
        console.error(`Error: ${response.status} ${response.statusText}`);
        return false;
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      return false;
    }
  }

  async function verifyCredentials(username, pass) {
    try {
      const response = await fetch(`http://localhost:3001/api/buyers/verify/${username}`);
  
      if (response.ok) {
        console.log(`Performing User Authentication!`);
        const data = await response.json();
  
        console.log(data.hashedPassword);
        return new Promise((resolve, reject) => {
          bcrypt.compare(pass, data.hashedPassword, (err, result) => {
            if (err) {
              console.log(err);
              reject(err);
            } else {
              resolve(result);
            }
          });
        });
      } else {
        console.error(`Error: ${response.status} ${response.statusText}`);
        return null;
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      return null;
    }
  };
  

  
  
  //let user login..
  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const pass = e.target[1].value;

    if (username.trim() == ""){
      window.alert("Username cannot be empty!");
      return;
    }
    else if(pass.trim() == ""){
      window.alert("Password cannot be empty!");
      return;
    }
  
    checkUsername(username).then(async (usernameExists) => {
      if (usernameExists) {
        try {
          const isAuthenticated = await verifyCredentials(username, pass);
          if (isAuthenticated) {
            console.log('User Authentication Successful!');
            if (rememberMe) {
              console.log("SETTING UP SESSION");
              const user = { id: 1, username: username, session: true };
              localStorage.setItem('user', JSON.stringify(user));
            }
            else{
              const user = { id: 1, username: username, session: false };
              localStorage.setItem('user', JSON.stringify(user));
            }
  
            navigate("/products");
          } else {
            console.log('User Authentication Failed!');
            window.alert("Invalid credentials! Please try again!");
          }
        } catch (error) {
          console.error(`Error during authentication: ${error.message}`);
        }
      }
      else{
        window.alert("No such user found! Please enter valid credentials!");
      }
    });
  };
  
  

    return(
        <>
  
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
            <a href="/admin">
              <i className="sin " aria-hidden="true" /> Admin Login{" "}
            </a>
          
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


      <form onSubmit={handleSubmit}>
      <div className="inputs">
        <input type="text" placeholder="Username" />
        <br />
        <input type="password" placeholder="password" />
      </div>
      <br />
      <br />
      <div className="remember-me--forget-password">
        <label>
        <input
              type="checkbox"
              name="item"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
        />

          <span className="text-checkbox">Remember me</span>
        </label>
        <p>forgot password?</p>
      </div>
      <br />
      <button type='submit'>Login</button>
      </form>
      <p>
        checker
        <Link to="/products"> Create Your Account</Link> it takes less
        than a minute
      </p>
    </div>
  </div>
</>

    );
}

export default Login;