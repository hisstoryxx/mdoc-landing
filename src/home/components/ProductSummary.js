import React from "react";
import {Link} from "react-router-dom";
import "./ProductSummary.scss";
import downloadIcon from "../../general/img/icon/download.svg";
import ChevronRightRound from "../../general/img/icon/chevron-right-round.svg";
import { Alert } from "bootstrap";

export const productData = [
  {
    type: "desktop",
    productName: "의료진용 데스크탑 앱",
    title: "더욱 효율적인 환자상담",
    description: "사전문진, 자동 리포트 작성으로 반복되는 업무를 줄여\n 환자상담에만 집중할 수 있는 환경을 제공합니다",
    learnMoreUrl: "/product/desktop",
    downloadLinks: ["https://www.google.com"]
  },
  {
    type: "mobile",
    productName: "환자용 모바일 앱",
    title: "체계적인 자기주도적 질병관리",
    description: "나의 건강데이터 관리는 물론, 체계적인 상담 시스템과\n 다양한 교육 자료로 환자분들의 질병관리를 돕습니다",
    learnMoreUrl: "/product/mobile",
    downloadLinks: ["https://www.google.com", "https://www.google.com"]
  }
]

const downDesktop = () => {
  alert('문의 메일로 연락 부탁드립니다.')
}

const renderDownloadButton = (type) => {
  if(type === "desktop")
    return (
      <button className="btn-download-desktop-app" onClick={downDesktop}>
        <img src={downloadIcon} alt=""/>
        <span>데스크탑 앱 다운로드</span>
      </button>
    )
  else
    return (
      <>
        <div className="btn-wrapper">
          <button className="btn-download-mobile-app android" onClick={() => window.open('https://play.google.com/store/apps/details?id=com.choro94.mDochome', '_blank')}/>
          <span>안드로이드 앱 다운로드</span>
        </div>
        <div className="btn-wrapper">
          <button className="btn-download-mobile-app ios" onClick={() => window.open('https://apps.apple.com/kr/app/%EC%97%A0%EB%8B%A5%ED%99%88%EC%BC%80%EC%96%B4/id1606627654?l', '_blank')}/>
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

                <Link className="btn-learn-more" to={platform.learnMoreUrl}>
                  <span>더 알아보기</span>
                  <img src={ChevronRightRound} alt=""/>
                </Link>

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
