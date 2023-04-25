import React, {useRef, useEffect} from "react"
import mainLogo from "../../general/img/main.png";
// import severance from "../../general/img/severance.png";
import "./Intro.scss";
import gsap from 'gsap';
const Intro = () => {
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const textsRef = useRef(null);
  useEffect(() =>{
    // gsap.fromTo(imgRef.current, {
    //   opacity: 0,
    //   y: -800
    // }, {
    //   opacity: 1,
    //   y: 0,
    //   ease: "elastic.inOut",
    //   duration: 1.8,
    //   delay: 1,
  
    // })
    gsap.fromTo(imgRef.current, {
      opacity: 0,
      x: -20,
    }, {
      opacity: 1,
      x: 0,
      ease: "expo.inOut",
      duration: 1.8,
      delay: 1,
  
    })

    

    gsap.fromTo(titleRef.current, {
      opacity: 0,
      y: 0
    }, {
      opacity: 1,
      y: -20,
      ease: "expo.inOut",
      duration: 1.5,
      delay: 1,
   
    })

    gsap.fromTo(textsRef.current, {
      opacity: 0,
      y: 0
    }, {
      opacity: 1,
      y: -20,
      ease: "expo.inOut",
      duration: 1.5,
      delay: 1.2,
   
    })
  },[ ]);


  const title = "안전하고 편리한\n 비대면 재택의료"
  return (
    <div className="intro">
      <img ref={imgRef} className="main-logo" src={mainLogo} alt="main illustration"/>
      <div ref = {titleRef} className="title-wrapper">
        <span>엠닥홈케어와 함께하는</span>
        <h1>{title}</h1>
      </div>
      <div className="partner">
        {/*<div className="severance">*/}
        {/*  <span>공동연구개발</span>*/}
        {/*  <span>세브란스병원</span>*/}
        {/*</div>*/}
        <div ref ={textsRef} className="description">
          <div className="first-line">
            <span>엠닥홈케어는 <strong>연세대학교 의과대학 연구진</strong>과&nbsp;</span>
            <span>공동으로 개발한 재택의료 통합 플랫폼으로,</span>
          </div>
          <span>임상적 근거 확보를 위한 연구를 수행 중에 있습니다</span>
        </div>
        {/*<img src={severance} alt=""/>*/}
      </div>
    </div>
  )
}

export default Intro;
