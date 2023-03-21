import './Seller.css'


function Seller(){
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

export default  Seller;