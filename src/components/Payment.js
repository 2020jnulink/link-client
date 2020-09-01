import React from "react";
import { Link } from "react-router-dom";
import Navigation_var from "./Navigation_var";
import "./Payment.css";

class Payment extends React.Component {
  state = {
    payment_product: "",
    payment_insurance: "",
    payment_total: "",
    payment_number: "",
    payment_password: "",
    payment_validity: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.targetname]: e.target.value,
    });
    console.log(this.state);
  };
  render() {
    const {
      payment_product,
      payment_insurance,
      payment_total,
      payment_number,
      payment_password,
      payment_validity,
    } = this.state;
    return (
      <div className="frame">
        <body>
          <div className="header">
            <div className="title">LINK</div>
          </div>
          <div className="title_underline"></div>
          <div className="main">
            <div className="main_title">
              <div className="main_title__text">Insurance Applicance</div>
            </div>
            <div className="payment_main">
              <div className="payment_main__que">
                <div className="payment_que__product">상품 금액</div>
                <div className="payment_que__insurance">보험 금액</div>
                <div className="payment_que__total">총 금액</div>
                <div className="payment_que__number">카드 번호</div>
                <div className="payment_que__password">카드 비밀번호</div>
                <div className="payment_que__validity">카드 유효기간</div>
              </div>
              <div className="payment_main__var">
                <div className="payment_var__var">:</div>
                <div className="payment_var__var">:</div>
                <div className="payment_var__var">:</div>
                <div className="payment_var__var">:</div>
                <div className="payment_var__var">:</div>
                <div className="payment_var__var">:</div>
              </div>
              <div className="payment_main__input">
                <input
                  className="payment_input__product"
                  value={this.state.payment_product}
                />
                <input
                  className="payment_input__insurance"
                  value={this.state.payment_insurance}
                />
                <input
                  className="payment_input__total"
                  value={this.state.payment_total}
                />
                <input
                  className="payment_input__number"
                  value={this.state.payment_number}
                />
                <input
                  className="payment_input__password"
                  value={this.state.payment_password}
                />
                <input
                  className="payment_input__validity"
                  value={this.state.payment_validity}
                />
              </div>
            </div>
            <div className="payment_complete">
              <Link
                className="payment_complete__btn"
                to="/shop/product/paymentcompleted"
              >
                NEXT
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

export default Payment;
