import React from "react";
import { Link } from "react-router-dom";
import Navigation_var from "./Navigation_var"; // eslint-disable-line no-unused-vars
import "./Scooter_Create.css";

class Scooter_Create extends React.Component {
    state = {
        title: "", // eslint-disable-line no-unused-vars
        manufacturer: "", // eslint-disable-line no-unused-vars
        price: 20, // eslint-disable-line no-unused-vars
        walletid: "", // eslint-disable-line no-unused-vars
      };
      handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };
  render() {
    return (
      <div className="frame">
        <body>
          <div className="header">
            <div className="title">LINK</div>
          </div>
          <div className="title_underline"></div>
          <div className="main">
            <div className="main_title">
              <div className="main_title__text">Create Scooter</div>
            </div>
            <div className="create_main">
              <div className="create_main__que">
                <div className="create_que__name">Title</div>
                <div className="create_que__id">Manufacturer</div>
                <div className="create_que__password">Price</div>
                <div className="create_que__resident">
                  WalletID
                </div>
              </div>
              <div className="create_main__var">
                <div className="create_var__var">:</div>
                <div className="create_var__var">:</div>
                <div className="create_var__var">:</div>
                <div className="create_var__var">:</div>
              </div>
              <div className="create_main__input">
                <input
                  className="create_input__name"
                  onChange={this.handleChange}
                  name="title"
                  value={this.state.title} // eslint-disable-line no-unused-vars
                />
                <input
                  className="create_input__id"
                  onChange={this.handleChange}
                  name="manufacturer"
                  value={this.state.manufacturer} // eslint-disable-line no-unused-vars
                />
                <input
                  className="create_input__password"
                  onChange={this.handleChange}
                  name="price"
                  value={this.state.price} // eslint-disable-line no-unused-vars
                />
                <input
                  className="create_input__resident"
                  onChange={this.handleChange}
                  name="walletid"
                  value={this.state.walletid} // eslint-disable-line no-unused-vars
                />
              </div>
            </div>
            <div className="create_complete">
              <Link className="create_complete__btn" to="/seller">
                Confirm
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

export default Scooter_Create;
