import React from "react";
import "./Product.scss";
import {productData} from "../home/components/ProductSummary";
import {useLocation} from "react-router-dom";
import desktop from "../general/img/desktop.png";

const productDetail = {
  "mobile" : [
    {
      title: "사전문진 & 메신저 정기 상담",
      description: "상담에 필요한 정보는 사전문진으로 수집하여\n" +
        "더욱 빠르고 효과적인 상담이 가능하며,\n" +
        "메신저 상담으로 모든 내용은 기록으로 남아\n" +
        "언제든 확인하실 수 있습니다",
      images : [
        require("../general/img/mobile-feature-1-1.png"),
        require("../general/img/mobile-feature-1-2.png")
      ]
    },
    {
      title: "간편한 정기상담 예약",
      description: "예약 가능한 시간을 쉽게 선택하여 예약할 수 있고,\n" +
        "언제든 직접 변경 할 수 있습니다",
      images : [
        require("../general/img/mobile-feature-2-1.png"),
        require("../general/img/mobile-feature-2-2.png")
      ]
    },
    {
      title: "응급 상담 & 일반 질의",
      description: "정기상담 이외에도 의료진에게 질의 응답을 하거나\n" +
        "응급한 겨우 응급상담을 신청할 수 있습니다",
      images : [
        require("../general/img/mobile-feature-3-1.png"),
        require("../general/img/mobile-feature-3-2.png")
      ]
    },
    {
      title: "교육 영상 & 자료 (준비 중)",
      description: "질병에 대한 다양한 자료들을 제공하여\n" +
        "환자분들이 질병을 더욱 잘 이해하고\n" +
        "잘 관리할 수 있도록 돕습니다",
      images : [
        require("../general/img/mobile-feature-preparing.png"),
      ]
    }
  ],
  "desktop" : [
    {
      title: "효율적이고 편리한 메세지 상담",
      description: "환자에게 반복적으로 전달해야하는 정보를\n" +
        "자주 사용하는 문구로 등록하여\n" +
        "더욱 효율적인 상담이 가능합니다",
      images : [
        require("../general/img/desktop-feature-1.png"),
      ]
    },
    {
      title: "상담 시간 관리",
      description: "환자들이 예약할 있는 상담 슬롯들을\n" +
        "쉽게 관리할 수 있습니다",
      images : [
        require("../general/img/desktop-feature-2.png"),
      ]
    },
    {
      title: "환자 목록 관리",
      description: "상담 환자들의 목록을 관리할 수 있습니다.\n" +
        "환자 목록 Excel 파일을 불러올 수도 있습니다",
      images : [
        require("../general/img/desktop-feature-3.png"),
      ]
    }

  ]
}

const renderProductHeader = (platform) => {
  let product;
  if(platform === "mobile")
    product = productData[1];
  else
    product = productData[0];
  return (
    <div className={`product-header ${platform}`}>
      <div className="boundary">
        <div className="section-img"><div className="fade-layer"/></div>
        <div className="section-content">
          <span>{product.productName}</span>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
        </div>
      </div>

    </div>

  )
}

const renderProductDetail = (platform) => {
  return (
    <div className={`product-body ${platform}`}>
      {productDetail[platform].map( (feature, index) => {
        return (
          <div className="feature-item" key={index}>
            <div className="feature-images">
              {feature.images.map((img, j) => {
                return <img src={img.default} alt="" key={j}/>
              })}
            </div>
            <div className="feature-content">
              <h1>{feature.title}</h1>
              <p>{feature.description}</p>
            </div>
          </div>
        )
      })}

    </div>
  )
}




const Product = () => {
  let platform;
  const location = useLocation();
  if(location.pathname.includes("mobile"))
    platform = "mobile";
  else
    platform = "desktop"

  return (
    <div className="page product">
      {renderProductHeader(platform)}
      {renderProductDetail(platform)}
    </div>
  )
}

export default Product;
