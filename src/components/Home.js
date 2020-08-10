import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <body>
        <div className="top">
          <span className="status-bar__clock">LINK</span>
        </div>
        <div id="left" class="left">
          <img
            id="img"
            src="https://image.flaticon.com/icons/svg/2855/2855362.svg"
          />
          <p>
            <a href="8.html">Go To Buy</a>
          </p>
          <p>
            <a href="14.html">Insurance</a>
          </p>
        </div>
        <div id="right" className="right">
          <div id="link">
            <Link className="signup" to="/signup">
              Sign Up
            </Link>
            <Link className="login" to="/login">
              Log In
            </Link>
            <Link className="mypage" to="/mypage">
              My Page
            </Link>
            <Link className="home" to="/">
              Home
            </Link>
            <Link className="shop" to="/shop">
              SHOP
            </Link>
            <Link className="insurance" to="/insurance">
              INSURANCE
            </Link>
          </div>
          <input type="Goods Name" />
          <span>Search</span>
        </div>
        <div className="main">
          <span>My Page</span>
          <span>NAME</span>
          <span> </span>
          <span>ID</span>
          <span> </span>
          <span>Password</span>
          <span> </span>
          <span>Resident Registration Number</span>
          <span> </span>
          <span>Address</span>
          <span> </span>
          <span>Phone Number</span>
          <span> </span>
          <span>OK</span>
        </div>
      </body>
    );
  }
}

export default Home;
