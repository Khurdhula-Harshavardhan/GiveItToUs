import './Login.css'
import { BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom';

function Login(){
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
            <a href="/Gmail">
              <i className="sin " aria-hidden="true" /> Login with G-Mail
            </a>
            <a href="/admin">
              <i className="sin " aria-hidden="true" /> Admin Login{" "}
            </a>
            <a href="/seller">
              <i className="sin" aria-hidden="true" /> Seller Login{" "}
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
      <div className="inputs">
        <input type="text" placeholder="user name" />
        <br />
        <input type="password" placeholder="password" />
      </div>
      <br />
      <br />
      <div className="remember-me--forget-password">
        <label>
          <input type="checkbox" name="item" defaultChecked="" />
          <span className="text-checkbox">Remember me</span>
        </label>
        <p>forget password?</p>
      </div>
      <br />
      <button>Login</button>
    </div>
  </div>
</>

    );
}

export default Login;