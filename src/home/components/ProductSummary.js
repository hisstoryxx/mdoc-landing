import React from "react";
import "./ProductSummary.scss";
import downloadIcon from "../../general/img/icon/download.svg";
import ChevronRightRound from "../../general/img/icon/chevron-right-round.svg";

const productData = [
  {
    type: "desktop",
    productName: "의료진용 데스크탑 앱",
    title: "더욱 효율적인 환자 상담",
    description: "사전 문진, 자동 리포트 작성으로 반복되는 업무를 줄여\n 더욱 효율적인 환자 상담이 가능합니다",
    backgroundImg: "../../general/img/usage-desktop_optimized.jpg",
    downloadLinks: ["https://www.google.com"]
  },
  {
    type: "mobile",
    productName: "환자용 모바일 앱",
    title: "더욱 체계적인 질병 관리",
    description: "체계적인 상담 시스템과 다양한 교육 자료로\n 환자분들의 질병관리를 돕습니다",
    backgroundImg: "../../general/img/usage-mobile_optimized.jpg",
    downloadLinks: ["https://www.google.com", "https://www.google.com"]
  }
]

const renderDownloadButton = (type) => {
  if(type === "desktop")
    return (
      <button className="btn-download-desktop-app">
        <img src={downloadIcon} alt=""/>
        <span>데스크탑 앱 다운로드</span>
      </button>
    )
  else
    return (
      <>
        <div className="btn-wrapper">
          <button className="btn-download-mobile-app android"/>
          <span>안드로이드 앱 다운로드</span>
        </div>
        <div className="btn-wrapper">
          <button className="btn-download-mobile-app ios"/>
          <span>IOS 앱 다운로드</span>
        </div>
      </>
    )
}

const ProductSummary = () => {
  return (
    <div className="product-summary">
      <div className="boundary">
        {productData.map( (platform) => {
          return (
            <div className={`product ${platform.type}`}>
              <div className="section-content">
                <span>{platform.productName}</span>
                <h1>{platform.title}</h1>
                <p>{platform.description}</p>

                <button className="btn-learn-more">
                  <span>더 알아보기</span>
                  <img src={ChevronRightRound} alt=""/>
                </button>

                <div className="download-button-container">
                  {renderDownloadButton(platform.type)}
                </div>
              </div>
              <div className="section-img">
                <div className="fade-layer"/>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ProductSummary;
