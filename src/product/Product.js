import React from "react";
import "./Product.scss";
import {productData} from "../home/components/ProductSummary";
import {useLocation} from "react-router-dom";
import desktop from "../general/img/desktop.png";

const productDetail = {
  "mobile" : [
    {
      title: "사전문진",
      description:
        "의료진과 상담을 시작하기 전에 사전문진으로\n" +
        "필요한 정보를 입력하여 더욱 빠르고 효과적인 상담이 가능합니다.\n" ,
      images : [
        require("../general/img/환자용_사전문진.png")
      ]
    },
    {
      title: "정기상담",
      description:
        "월 1-2회 정기적인 상담으로 안정적으로 건강관리가 가능하며,\n" +
        "상담내용은 나의 기록으로 남아 언제든 확인할 수 있습니다.\n",
      images : [
        require("../general/img/환자용_정기상담.png"),
      ]
    },
    {
      title: "예약",
      description: "원하는 날짜에 다음 달 정기상담을 신청할 수 있어\n" +
        "예측가능하고 계획적인 건강관리가 가능합니다.",
      images : [
        require("../general/img/환자용_예약.png"),
        
      ]
    },
    // {
    //   title: "응급 상담",
    //   description: "정기상담 이외에도 의료진에게 응급상담을 요청할 수 있습니다",
    //   subDescription:
    //     "현재 근무시간 기준으로 응급상담이 가능하며,\n" +
    //     "추후 챗봇상담 기능이 추가될 예정입니다",
    //   images : [
    //     require("../general/img/mobile-feature-3-1.png"),
    //     require("../general/img/mobile-feature-3-2.png")
    //   ]
    // },
    {
      title: "교육콘텐츠",
      description:
        "의료진의 검수를 받은 다양한 형태의 교육자료를 제공하여\n" +
        "나의 질병을 더욱 잘 이해하고 관리할 수 있습니다.",
        
      images : [
        require("../general/img/환자용_교육자료.png"),
      ]
    },
    {
      title: "데이터관리",
      description:
        "혈압, 혈당, 복막투석 등 건강데이터 기록을 생활화하고,\n" +
        "기록한 데이터의 변화과정을 의료진과 공유하고\n" +
        "더욱 체계적인 건강관리가 가능합니다",
        
      images : [
        require("../general/img/환자용_건강데이터분석.png"),
      ]
    }
  ],
  "desktop" : [
    {
      title: "효율적인 환자상담",
      description:
        "환자별 상담내역을 한 눈에 확인할 수 있고,\n" +
        "작성된 사전문진표를 정기상담 전에 받아볼 수  있습니다.\n" +
        "반복적인 정보는 자주 사용하는 문구로 등록하여\n" +
        "더욱 효율적인 상담이 가능합니다",
      images : [
        require("../general/img/desktop-feature-1.png"),
      ]
    },
    {
      title: "정기상담 일정관리",
      description:
        "환자가 정기상담 일정을 예약하기 전 의료진 상담가능 일자를 확인하고,\n" +
        "예약가능 슬롯으로 쉽게 관리할 수 있습니다.",
      images : [
        require("../general/img/desktop-feature-2.png"),
      ]
    },
    {
      title: "나의 환자 정보관리",
      description:
        "나의 환자 목록을 관리할 수 있고,\n" +
        "환자 목록 Excel 파일을 불러올 수 있습니다",
      images : [
        require("../general/img/desktop-feature-3.png"),
      ]
    },
    {
      title: "EMR 시스템 연동 (준비중)",
      description:
        "병원 내 EMR 시스템과 엠닥홈케어를 연동하여,\n" +
        "더욱 효과적인 환자관리 서비스 제공을 위해 준비하고 있습니다",
      images : [
        require("../general/img/desktop-feature-4.png"),
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
              {feature.subDescription && (<p className="sub">{feature.subDescription}</p>)}
            </div>
          </div>
        )
      })}

    </div>
  );
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
