import "./Register.css"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import bcrypt from "bcryptjs";

function Register(){

const navigate = useNavigate();

const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  emailAddress: "",
  phoneNumber: "",
  addLineOne: "",
  dob: "",
  gender: "Male",
  username: "",
  password: "",
  confirmPassword: "",
});

//every change within the form data, must reflect in our state.
const storeUserData = async () => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(userData.password, salt);
  const dataToStore = { ...userData, password: hashedPassword };
  localStorage.setItem("userData", JSON.stringify(dataToStore));
};

const checkEmptyFields = (page) => {
    const requiredFields = {
      1: ["firstName", "lastName"],
      2: ["emailAddress", "phoneNumber"],
      3: ["addLineOne"],
      4: ["dob", "gender", "username", "password", "confirmPassword"],
    };

    for (const field of requiredFields[page]) {
      if (formData[field] === "") {
        alert(`Please fill the ${field} field.`);
        return false;
      }
    }
    return true;
  };



//lets validate the form data at the end of submission.
const validateForm = () => {
  for (const key in formData) {
    if (formData[key] === "" && key !== "addLineTwo") {
      alert(`Please fill the ${key} field.`);
      return false;
    }
  }
  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match.");
    return false;
  }
  return true;
};

//when user hits submit, based on the fact if user already exists we must then register them.
const handleFormSubmit = async (e) => {
  e.preventDefault();
  if (validateForm()) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(formData.password, salt);
    const storedData = { ...formData, password: hashedPassword };
    localStorage.setItem("userData", JSON.stringify(storedData));
    setTimeout(function () {
      alert("Your Form Successfully Signed up");
      navigate("/", { replace: true });
    }, 800);
  }
};

useEffect(() => {
const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const nextBtnFourth = document.querySelector(".next-3");
const prevBtnFifth = document.querySelector(".prev-4");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});

nextBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnFourth.addEventListener("click", function(event){
    event.preventDefault();
    slidePage.style.marginLeft = "-100%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  });

submitBtn.addEventListener("click", function(){
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  setTimeout(function(){
    alert("Your Form Successfully Signed up");
    navigate('/', {replace: true});
  },800);
});

prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});

prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});

prevBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});

prevBtnFifth.addEventListener("click", function(event){
    event.preventDefault();
    slidePage.style.marginLeft = "-75%";
    bullet[current - 2].classList.remove("active");
    progressCheck[current - 2].classList.remove("active");
    progressText[current - 2].classList.remove("active");
    current -= 1;
  });
});


return(
<>
  
  <div className="container">
    <header>Sign Up</header>
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
              <input id="firstName" type="text" required />
            </div>
            <div className="field">
              <div className="label">Last Name</div>
              <input id="lastName" type="text" required />
            </div>
            <div className="field">
              <button className="firstNext next">Next</button>
            </div>
          </div>
          <div className="page">
            <div className="title">Contact Info:</div>
            <div className="field">
              <div className="label">Email Address</div>
              <input id="emailAddress" type="email" required />
            </div>
            <div className="field">
              <div className="label">Phone Number</div>
              <input id="phoneNumber" type="Number" required />
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
              <input id="addLineOne" type="text" required />
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
              <input id="dob" type="date" required />
            </div>
            <div className="field">
              <div className="label">Gender</div>
              <select id="gender" required>
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
              <input id="username" type="text" required />
            </div>
            <div className="field">
              <div className="label">Password</div>
              <input id="password" type="password" required />
            </div>
            <div className="field">
              <div className="label">Confirm Password</div>
              <input id="confirmPassword" type="password" required />
            </div>
            <div className="field btns">
            <button className="prev-4 prev">Previous</button>
            <button className="submit" onClick={handleFormSubmit}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</>
);
}
export default Register;