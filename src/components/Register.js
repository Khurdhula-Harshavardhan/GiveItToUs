import "./Register.css"

function Register(){
return(
<>
  
  <div className="container">
    <header> GiveItToUs Signup Form</header>
    <div className="progress-bar">
      <div className="step">
        <p>Name</p>
        <div className="bullet">
          <span>1</span>
        </div>
        <div className="check fas fa-check" />
      </div>
      <div className="step">
        <p>Contact</p>
        <div className="bullet">
          <span>2</span>
        </div>
        <div className="check fas fa-check" />
      </div>
      <div className="step">
        <p>Address</p>
        <div className="bullet">
          <span>3</span>
        </div>
        <div className="check fas fa-check" />
      </div>
      <div className="step">
        <p>Birth</p>
        <div className="bullet">
          <span>4</span>
        </div>
        <div className="check fas fa-check" />
      </div>
      <div className="step">
        <p>Submit</p>
        <div className="bullet">
          <span>5</span>
        </div>
        <div className="check fas fa-check" />
      </div>
    </div>
    <div className="form-outer">
      <form action="#">
        <div className="page slide-page">
          <div className="title">Basic Info:</div>
          <div className="field">
            <div className="label">First Name</div>
            <input type="text" />
          </div>
          <div className="field">
            <div className="label">Last Name</div>
            <input type="text" />
          </div>
          <div className="field">
            <button className="firstNext next">Next</button>
          </div>
        </div>
        <div className="page">
          <div className="title">Contact Info:</div>
          <div className="field">
            <div className="label">Email Address</div>
            <input type="text" />
          </div>
          <div className="field">
            <div className="label">Phone Number</div>
            <input type="Number" />
          </div>
          <div className="field btns">
            <button className="prev-1 prev">Previous</button>
            <button className="next-1 next">Next</button>
          </div>
        </div>
        <div className="page">
          <div className="title">Address</div>
          <div className="field">
            <div className="label">Line 1</div>
            <input type="text" />
          </div>
          <div className="field">
            <div className="label">Line 2</div>
            <input type="text" />
          </div>
          <div className="field btns">
            <button className="prev-2 prev">Previous</button>
            <button className="next-2 next">Next</button>
          </div>
        </div>
        <div className="page">
          <div className="title">Date of Birth:</div>
          <div className="field">
            <div className="label">Date</div>
            <input type="date" />
          </div>
          <div className="field">
            <div className="label">Gender</div>
            <select>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div className="field btns">
            <button className="prev-3 prev">Previous</button>
            <button className="next-3 next">Next</button>
          </div>
        </div>
        <div className="page">
          <div className="title">Login Details:</div>
          <div className="field">
            <div className="label">Username</div>
            <input type="text" />
          </div>
          <div className="field">
            <div className="label">Password</div>
            <input type="password" />
          </div>
          <div className="field btns">
            <button className="prev-4 prev">Previous</button>
            <button className="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</>
);
}
export default Register;