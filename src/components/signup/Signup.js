import React, { useState } from "react";
import "./signup.css";
import logo from "../../assets/logo.png";
import icon from "../../assets/icon.jpg";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ReactPhoneNumber from "../reactPhone/ReactPhoneNumber";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisiblity = () => {
    setShowPassword(showPassword ? false : true);
  };

  const toggleConfirmPasswordVisiblity = () => {
    setShowConfirmPassword(showConfirmPassword ? false : true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signup">
      <div className="signup-left">
        {/* <div className="circle-small"></div> */}
        <div className="signup-left-container">
          <div className="logo">
            <img src={icon} alt="icon" />
            <h3>Edufunda</h3>
          </div>
          <div className="signup-left-content">
            <img src={logo} alt="logo" />
            <h2>Assignment Solution</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content
            </p>
          </div>
        </div>
        {/* <div className="circle-big"></div> */}
      </div>
      <div className="signup-right">
        <div className="form-container">
          <h2>Welcome to Edufunda</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <form onSubmit={handleSubmit}>
            <div className="names">
              <div className="first-name">
                <label htmlFor="">First Name</label>
                <div className="input-field">
                  <PersonOutlineIcon className="person-icon" />
                  <input type="text" placeholder="Barley" />
                </div>
              </div>
              <div className="last-name">
                <label htmlFor="">Last Name</label>
                <div className="input-field">
                  <PersonOutlineIcon className="person-icon" />
                  <input type="text" placeholder="Johnson" />
                </div>
              </div>
            </div>
            <div className="country-phone">
              <div className="country">
                <label htmlFor="country">Country</label>
                <select name="country" id="country">
                  <option value="">South Africa</option>
                  <option value="">Nigeria</option>
                  <option value="">Ghana</option>
                </select>{" "}
              </div>
              <div className="phone">
                <label htmlFor="">Phone Number</label>
                <ReactPhoneNumber />
              </div>
            </div>
            <div className="email">
              <label htmlFor="">Email</label>
              <div className="input-field">
                <MailOutlineIcon className="person-icon" />
                <input type="email" placeholder="barley@dipainhouse.com" />
              </div>
            </div>
            <div className="password">
              <label htmlFor="">Password</label>
              <div className="input-field">
                <LockOutlinedIcon className="person-icon" />
                <input type={showPassword ? "text" : "password"} />
                {showPassword ? (
                  <VisibilityOutlinedIcon
                    className="eye"
                    onClick={togglePasswordVisiblity}
                  />
                ) : (
                  <VisibilityOffOutlinedIcon
                    className="eye"
                    onClick={togglePasswordVisiblity}
                  />
                )}
              </div>
            </div>
            <div className="password">
              <label htmlFor="">Confirm Password</label>
              <div className="input-field">
                <LockOutlinedIcon className="person-icon" />
                <input type={showConfirmPassword ? "text" : "password"} />
                {showConfirmPassword ? (
                  <VisibilityOutlinedIcon
                    className="eye"
                    onClick={toggleConfirmPasswordVisiblity}
                  />
                ) : (
                  <VisibilityOffOutlinedIcon
                    className="eye"
                    onClick={toggleConfirmPasswordVisiblity}
                  />
                )}
              </div>
            </div>
            <button type="submit">Register</button>
          </form>
          <p>
            Have an account? <a href="#signin">Sign In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
