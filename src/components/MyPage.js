import React from "react";
import { Link } from "react-router-dom";

class MyPage extends React.Component {
  render() {
    return (
      <body>
        <div className="top">
          <span className="status-bar__clock">LINK</span>
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
          <span>Information Modification</span>
          <span>List of Goods & Insurance</span>
        </div>
      </body>
    );
  }
}

export default MyPage;
