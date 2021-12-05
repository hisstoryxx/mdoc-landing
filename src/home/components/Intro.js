import React from "react"
import mainLogo from "../../general/img/main.png";
// import severance from "../../general/img/severance.png";
import "./Intro.scss";

const Intro = () => {
  const title = "안전하고 편리한\n 비대면 재택의료"
  return (
    <div className="intro">
      <img className="main-logo" src={mainLogo} alt="main illustration"/>
      <div className="title-wrapper">
        <span>엠닥홈케어와 함께하는</span>
        <h1>{title}</h1>
      </div>
      <div className="partner">
        {/*<div className="severance">*/}
        {/*  <span>공동연구개발</span>*/}
        {/*  <span>세브란스병원</span>*/}
        {/*</div>*/}
        <div className="description">
          <p>엠닥홈케어는 <strong>연세대학교 의과대학 연구진</strong>과 공동으로 개발한 재택의료 통합 플랫폼으로,</p>
          <p>임상적 근거 확보를 위한 연구를 수행 중에 있습니다</p>
        </div>
        {/*<img src={severance} alt=""/>*/}
      </div>
    </div>
  )
}

export default Intro;
