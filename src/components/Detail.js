import React from "react";
import { Link } from "react-router-dom";
import product_img from "./img/AU_TECH.png";
import "./Product_test.css";

class Detail extends React.Component {
    state = {
        scooterList: [],
    }

    componentDidMount() {
        const getScooterList = localStorage.getItem("scooterList");
        if (getScooterList) {
            this.setState({ scooterList: JSON.parse(getScooterList) });
        }
    }

    render() {
        return (
            <div className="main">
                <div className="product_summary">
                    <img className="product_img" src={product_img} alt="img" />
                    <div className="product_text">
                        <div className="product_text__name">제품명 : {this.state.scooterList.title}</div>
                        <div className="product_text__model">
                            aa
                        </div>
                        <div className="product_text__manufact">제조회사 : {this.state.singer}</div>
                        <div className="product_text__price">가격 : {this.state.price}</div>
                    </div>
                </div>
                <div className="product_buy">
                    <Link className="product_buy__btn" to="/shop/product/paymentcompleted"
                        onClick={this.handleClick}>
                        Buy
                    </Link>
                </div>
                <div className="product_detail">
                    <div className="product_detail__text">Detail information</div>
                    <div className="product_detail__line" />
                    <div className="product_detail__main">
                        제품 무게 : 14.9kg 탑승자 최대 무게 : 120kg 최대 등판각도 : 20도
                        최대 속력 : 25km/h 최대 주행거리 : 35km 배터리 : 36V 4.2Ah
                        타이어 :솔리드 타이어 브레이크 : 전자식 브레이크, 기계식
                        브레이크 방수 : IP54
              </div>
                </div>
            </div>
        );
    }
}

export default Detail;
