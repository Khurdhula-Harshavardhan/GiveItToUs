import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";
import "./Register.css";

const Register = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    address: "",
    dob: "",
    gender: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [progress, setProgress] = useState(0);
  const [errors, setErrors] = useState({});
  const [usernameExists, setUsernameExists] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
    console.log(name, value);
  };
  



  const validateUserData = (userData) => {
    let errors = {};
  
    if (!userData.firstName.trim()) {
      errors.firstName = "First name is required";
    }
  
    if (!userData.lastName.trim()) {
      errors.lastName = "Last name is required";
    }
  
    if (!userData.emailAddress.trim()) {
      errors.emailAddress = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(userData.emailAddress)) {
      errors.emailAddress = "Invalid email address";
    }
  
    if (!userData.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    } else if (!/^\d{10}$/.test(userData.phoneNumber)) {
      errors.phoneNumber = "Invalid phone number";
    }
  
    if (!userData.address.trim()) {
      errors.address = "Address is required";
    }
  
    if (!userData.dob) {
      errors.dob = "Date of birth is required";
    }
  
    if (!userData.gender) {
      errors.gender = "Gender is required";
    }
  
    if (!userData.username.trim()) {
      errors.username = "Username is required";
    }
  
    if (!userData.password.trim()) {
      errors.password = "Password is required";
    } else if (userData.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    console.log("About to validate the confirm passsword");
    if (!userData.confirmPassword.trim()) {
      errors.confirmPassword = "Confirm password is needed!";
    } else if (userData.confirmPassword.length < 8) {
      errors.confirmPassword = "Password must be at least 8 characters";
    }
    else if(userData.password != userData.confirmPassword){
      errors.confirmPassword ="Passwords do not match!";
      console.log("passwords do not match");
    }
    console.log("validation completee");
  
    return errors;
  };

  useEffect(() => {
    const updatedProgress = Object.keys(errors).reduce(
      (acc, key) => (errors[key] ? acc : acc + 10),
      0
    );
    setProgress(updatedProgress);
  }, [errors]);

  useEffect(() => {

    
    

    const validate = (key, value) => {
      switch (key) {
        case "firstName":
        case "lastName":
          return value.length >= 1 ? "" : "This field is required.";
        case "emailAddress":
          const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
          return emailRegex.test(value) ? "" : "Invalid email address.";
        case "phoneNumber":
          const phoneRegex = /^\d{10}$/;
          return phoneRegex.test(value) ? "" : "Invalid phone number.";
        case "address":
          return value.length >= 5 ? "" : "Address is too short.";
        case "dob":
          const age = new Date().getFullYear() - new Date(value).getFullYear();
          return age >= 13 ? "" : "You must be at least 13 years old.";
        case "gender":
          return value ? "" : "Please select your gender.";
        case "username":
          setUsernameExists(false);
          return value.length >= 3 ? "" : "Username must be at least 3 characters.";
        case "password":
          return value.length >= 8 ? "" : "Password must be at least 8 characters.";
        case "confirmPassword":
          return value.length >= 8 ? "" : "Password must be at least 8 characters.";
        default:
          return "";
      }
    };

    const newErrors = { ...errors };
    Object.entries(userData).forEach(([key, value]) => {
      newErrors[key] = validate(key, value);
    });
    setErrors(newErrors);
  }, [userData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateUserData(userData);
  
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
  
    // Check if username already exists
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.find(
      (user) => user.username === userData.username
    );
    if (userExists) {
      setUsernameExists(true);
      return;
    }
  
    // Hash the password
    const hashedPassword = bcrypt.hashSync(userData.password, 10);
  
    // Create the new user object
    const newUser = {
      firstName: userData.firstName,
      lastName: userData.lastName,
      emailAddress: userData.emailAddress,
      phoneNumber: userData.phoneNumber,
      address: userData.address,
      dob: userData.dob,
      gender: userData.gender,
      username: userData.username,
      password: hashedPassword,
    };
  
    // Add the new user to the existing users list and store in local storage
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));
    window.alert("Registration Successfull!")
    console.log(newUser);
    // Redirect to home page
    navigate("/");
  };
  

  return (
    
    <div className="register-container">
  <h2>Register</h2>

  <div className="progress-container">
    <div className="progress-bar" style={{ width: `${progress}%` }}></div>
  </div>

  <form className="register-form" onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="firstName">First Name*</label>
      <input
        type="text"
        name="firstName"
        value={userData.firstName}
        onChange={handleChange}
      />
      {errors.firstName && <span className="error">{errors.firstName}</span>}
    </div>

    <div className="form-group">
      <label htmlFor="lastName">Last Name*</label>
      <input
        type="text"
        name="lastName"
        value={userData.lastName}
        onChange={handleChange}
      />
      {errors.lastName && <span className="error">{errors.lastName}</span>}
    </div>

    <div className="form-group">
      <label htmlFor="emailAddress">Email Address*</label>
      <input
        type="email"
        name="emailAddress"
        value={userData.emailAddress}
        onChange={handleChange}
      />
      {errors.emailAddress && <span className="error">{errors.emailAddress}</span>}
    </div>

    <div className="form-group">
      <label htmlFor="phoneNumber">Phone Number*</label>
      <input
        type="tel"
        name="phoneNumber"
        value={userData.phoneNumber}
        onChange={handleChange}
      />
      {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}
    </div>

    <div className="form-group">
      <label htmlFor="address">Address*</label>
      <textarea
        name="address"
        value={userData.address}
        onChange={handleChange}
      ></textarea>
      {errors.address && <span className="error">{errors.address}</span>}
    </div>

    <div className="form-group">
      <label htmlFor="dob">Date of Birth*</label>
      <input type="date" name="dob" value={userData.dob} onChange={handleChange} />
      {errors.dob && <span className="error">{errors.dob}</span>}
    </div>

    <div className="form-group">
      <label htmlFor="gender">Gender*</label>
      <select name="gender" value={userData.gender} onChange={handleChange}>
        <option value=""></option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      {errors.gender && <span className="error">{errors.gender}</span>}
    </div>

    <div className="form-group">
      <label htmlFor="username">Username*</label>
      <input
        type="text"
        name="username"
        value={userData.username}
        onChange={handleChange}
      />
      {errors.username && <span className="error">{errors.username}</span>}
      {usernameExists && <span className="error">Username already exists.</span>}
    </div>

    <div className="form-group">
      <label htmlFor="password">Password*</label>
      <input
        type="password"
        name="password"
        value={userData.password}
        onChange={handleChange}
      />
      {errors.password && <span className="error">{errors.password}</span>}
    </div>

    <div className="form-group">
      <label htmlFor="confirmPassword">Confirm Password*</label>
      <input
        type="password"
        name="confirmPassword"
        value={userData.confirmPassword}
        onChange={handleChange}
        />
        {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
    </div>

    <button type="submit">Register</button>
  </form>
</div>

  );
};

export default Register;


