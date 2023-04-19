import React from "react";
import "./Product.scss";
import {productData} from "../home/components/ProductSummary";
import {useLocation} from "react-router-dom";
import desktop from "../general/img/desktop.png";

const productDetail = {
  "mobile" : [
    {
      title: "건강 기록",
      description:
        "건강기록을 루틴화하여 효율적인 건강 기록이 가능합니다.\n" +
        "혈압, 혈당, 복막투석으로 나누어진 카테고리를 제공하며\n" +
        "기록된 데이터는 건강기록 분석탭에서 확인 가능합니다",
      images : [
        require("../general/img/mobile-product_test1.png")
      ]
    },
    {
      title: "의료진과 비대면 정기상담",
      description:
        "의료진과 정기상담을 시작하기 전에 \n" +
        "사전문진으로 필요한 정보를 입력하여\n" +
        "더욱 빠르고 효과적인 상담이 가능합니다.\n" +
        "또한, 정기상담으로 주고받은 모든 내용은\n" +
        "나의 기록으로 남아 언제든 확인할 수 있습니다",
      images : [
        require("../general/img/mobile-feature-1-1.png"),
        require("../general/img/mobile-product_test1.png")
      ]
    },
    {
      title: "건강기록 분석",
      description: "한눈에 보기 쉬운 그래프 형태의 분석 데이터를 확인할 수 있고\n" +
        "변화과정 보기를 통해 기간 별 건강 추이가 가능합니다.",
      images : [
        require("../general/img/mobile-feature-2-1.png"),
        
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
      title: "영상 교육콘텐츠",
      description:
        "의료진의 검수를 받은 다양한 형태의 교육자료를 제공하여\n" +
        "나의 질병을 더욱 잘 이해하고\n" +
        "관리할 수 있도록 준비하고 있습니다",
      images : [
        require("../general/img/mobile-feature-preparing.png"),
      ]
    }
  ],
  "desktop" : [
    {
      title: "효율적이고 편리한 메세지 상담",
      description:
        "환자별 상담을 한 눈에 확인할 수 있어 즉각적인 응대가 가능하며,\n" +
        "반복적으로 전달해야하는 정보를 자주 사용하는 문구로 등록하여\n" +
        "더욱 효율적인 상담이 가능합니다",
      images : [
        require("../general/img/desktop-feature-1.png"),
      ]
    },
    {
      title: "정기상담 일정관리",
      description:
        "의료진의 일정에 맞추어 상담가능한 일자를\n" +
        "예약가능 슬롯으로 쉽게 관리할 수 있습니다",
      images : [
        require("../general/img/desktop-feature-2.png"),
      ]
    },
    {
      title: "나의 환자 관리",
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
