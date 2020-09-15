import React from "react";
import { Link } from "react-router-dom";
import product_img from "./img/AU TECH.png";
import Navigation_var from "./Navigation_var"; // eslint-disable-line no-unused-vars
import "./Product_AU.css";

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
                <div className="product_text__name">제품명 : Red Wing</div>
                <div className="product_text__model">모델명 : REDWINGBLACK8A</div>
                <div className="product_text__manufact">제조회사 : AU Tech</div>
                <div className="product_text__price">가격 : 299,000원</div>
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
                <div className="product_detail__main1">* 제품 무게 : 14.9kg </div>
                <div className="product_detail__main2">* 탑승자 최대 무게 : 120kg </div>
                <div className="product_detail__main3">* 최대 등판각도 : 20도</div>
                <div className="product_detail__main4">* 최대 속력 : 25km/h</div>
                <div className="product_detail__main5">* 최대 주행거리 : 35km</div>
                <div className="product_detail__main6">* 배터리 : 36V 4.2Ah</div>
                <div className="product_detail__main7">* 타이어 :솔리드 타이어</div>
                <div className="product_detail__main8">* 브레이크 : 전자식 브레이크, 기계식 브레이크</div>
                <div className="product_detail__main9">* 방수 : IP54</div>
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
