import React from "react"
import mainLogo from "../../general/img/main.png";
// import severance from "../../general/img/severance.png";
import "./Intro.scss";

const Intro = () => {
  const title = "안전하고 편리한\n 비대면 재택의료 플랫폼"
  return (
    <div className="intro">
      <img className="main-logo" src={mainLogo} alt="main illustration"/>
      <div className="title-wrapper">
        <h1>{title}</h1>
      </div>
      <div className="partner">
        <span>공동연구개발</span>
        <span>세브란스병원</span>
        {/*<img src={severance} alt=""/>*/}
      </div>
    </div>
  )
}

export default Intro;
