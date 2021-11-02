import React from "react"
import mainLogo from "../../general/img/main.png";
import severance from "../../general/img/severance.png";
import "./Intro.scss";

const Intro = () => {
  return (
    <div className="intro">
      <img className="main-logo" src={mainLogo} alt="main illustration"/>
      <div className="title-wrapper">
        <h1>안전하고 편리한 비대면 재택의료 플랫폼</h1>
      </div>
      <div className="partner">
        <span>공동 연구 개발</span>
        <img src={severance} alt=""/>
      </div>
    </div>
  )
}

export default Intro;
