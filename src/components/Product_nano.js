import React from "react";
import { Link } from "react-router-dom";
import product_img from "./img/nano wheel.png";
import Navigation_var from "./Navigation_var"; // eslint-disable-line no-unused-vars
import "./Product_nano.css";

class Product extends React.Component {
  render() {
    return (
      <div className="frame">
        <body>
          <div className="header">
            <div className="title">LINK</div>
          </div>
          <div className="title_underline"></div>
          <div className="main">
            <div className="product_summary">
              <img className="product_img" src={product_img} alt="img" />
              <div className="product_text">
                <div className="product_text__name">제품명 : NQ-01+</div>
                <div className="product_text__model">모델명 : NQ01PLUS</div>
                <div className="product_text__manufact">제조회사 : Nano Wheel</div>
                <div className="product_text__price">가격 : 453,000원</div>
              </div>
            </div>
            <div className="product_buy">
              <Link className="product_buy__btn" to="/shop/product/suggestion">
                Buy
              </Link>
            </div>
            <div className="product_detail">
              <div className="product_detail__text">Detail information</div>
              <div className="product_detail__line" />
              <div className="product_detail__main">
                <div className="product_detail__main1">* 제품 무게 : 27kg </div>
                <div className="product_detail__main2">* 탑승자 최대 무게 : 12kg </div>
                <div className="product_detail__main3">* 최대 속력 : 25km/h</div>
                <div className="product_detail__main4">* 최대 주행거리 : 40km </div>
                <div className="product_detail__main5">*  최대 등판각도 : 45도</div>
                <div className="product_detail__main6">* 배터리 : 60V</div>
                <div className="product_detail__main7">* 타이어 : 전/후륜 11인치 초광폭 튜브리스 </div>
                <div className="product_detail__main8">* 브레이크 : 전/후륜 유압식+전자식</div>
                <div className="product_detail__main9">* 방수 : IPX4</div>
              </div>
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

export default Product;
