import React from "react";
import { Link } from "react-router-dom";
import Navigation_var from "./Navigation_var"; // eslint-disable-line no-unused-vars
import "./Seller.css";
import Popup_Create from "./Popup_Create.js";

class Seller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPopup: false,
      scooterList: [],
      index: 0
    };
  }

  componentDidMount() {
    const getClassList = localStorage.getItem("scooterList");
    if (getClassList) {
      this.setState({ scooterList: JSON.parse(getClassList) });
    }
  }

  setStateScooterList = scooterList => {
    this.setState({ scooterList });
    localStorage.setItem("scooterList", JSON.stringify(scooterList));
  };

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  setIndex = index => {
    this.setState({ index });
  };


  render() {
    const { scooterList, index } = this.state;
    return (
      <div className="frame">
        <body>
          <div className="header">
            <div className="title">LINK</div>
          </div>
          <div className="title_underline"></div>
          <div className="main">
            <div className="main_title">
              <div className="main_title__text">Seller</div>
            </div>
            <div className="seller_btns">
              {/* <Link className="seller_create" to="/seller/create">
                Create Scooter
              </Link> */}
              <div className="seller_change">
                <button
                  id="class_create__btn"
                  onClick={this.togglePopup.bind(this)}
                >
                  Create Scooter
                  </button>
                {this.state.showPopup ? (
                  <Popup_Create
                    closePopup={this.togglePopup.bind(this)}
                    scooterList={this.state.scooterList}
                    setStateScooterList={this.setStateScooterList}
                  />
                ) : null}
              </div>
              <Link className="seller_change" to="/seller/change">
                Change Scooter
              </Link>
              <Link className="seller_delete" to="/seller/delete">
                Delete Scooter
              </Link>
            </div>
          </div>
        </body>
        <div className="nav_var">
          <Navigation_var />
        </div>
      </div>
    );
  }
}

export default Seller;
