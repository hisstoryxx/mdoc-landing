import React, { useRef, useEffect } from "react";
import {Link, useLocation} from "react-router-dom";
import hcLogo from "../img/logo-hc.png";
import logo from "../img/logo-type.png";
import "./NavBar.scss";
import gsap from 'gsap';
const NavBar = () => {
  const location = useLocation();
  const pathNameArray = location.pathname.split("/");
  const menuName = pathNameArray[pathNameArray.length - 1];

  const logoRef = useRef(null);
  const homeRef = useRef(null);
  const mobileRef = useRef(null);
  const desktopRef = useRef(null);
  const contactRef = useRef(null);
  

  useEffect(() =>{
    gsap.fromTo(logoRef.current, {
      opacity: 0,
      x: -20,
    },{
      opacity: 1,
      x: 0,
      ease: "expo.inOut",
      duration: 1,
   
    })

    gsap.fromTo(homeRef.current, {
      opacity: 0,
      x: -20,
    },{
      opacity: 1,
      x: 0,
      ease: "expo.inOut",
      duration: 1,
    })

    gsap.fromTo(mobileRef.current, {
      opacity: 0,
      x: -20,
    },{
      opacity: 1,
      x: 0,
      ease: "expo.inOut",
      duration: 1,
      delay: 0.2
    })

    gsap.fromTo(desktopRef.current, {
      opacity: 0,
      x: -20,
    },{
      opacity: 1,
      x: 0,
      ease: "expo.inOut",
      duration: 1,
      delay: 0.2 * 2
    })

    gsap.fromTo(contactRef.current, {
      opacity: 0,
      x: -20,
    },{
      opacity: 1,
      x: 0,
      ease: "expo.inOut",
      duration: 1,
      delay: 0.2 * 3
    })

   
},[location]);
  
  return (
    <div className={"nav-bar"}>
      <div className="boundary">
        <Link to={"/"}>
        <img ref={logoRef} className="logo" src={logo} alt="" /></Link>
        <div className={`menu-container ${menuName ? menuName : 'home'}`}>
          <Link ref={homeRef} className="menu home" to={"/"}>홈</Link>
          {/* <div className="divider"/> */}
          <div className="product-menus">
            {/* <span className="menu label">제품 소개</span> */}
            <div className="menu-wrapper">
              {/* <Link ref={mobileRef} className="menu mobile" to={"/product/mobile"}>환자 • 보호자용</Link> */}
              <Link ref={mobileRef} className="menu mobile" to={"/product/mobile"}>환자용</Link>
              <Link ref={desktopRef} className="menu desktop" to={"/product/desktop"}>의료진용</Link>
            </div>
          </div>
          {/* <div className="divider"/> */}
          {/* <Link ref={contactRef} className="menu contact" to={"/contact"}>문의</Link> */}
          <Link ref={contactRef} className="menu contact" to={"/contact"}>문의하기</Link>
          {/* <div className="divider"/> */}
          
          {/* <Link ref={contactRef} className="menu contact" to={"/contact"}>
            <div className="down">
              무료 다운로드 신청
              </div></Link> */}
        </div>
      </div>
    </div>
  )
}

export default NavBar;
