import React from "react";
import {Link, useLocation} from "react-router-dom";
import "./Footer.scss";
import mDocLogoType from "../img/logo-type.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import Kakao from "../img/iconkakao.png";


const menuGroups = [
  {
    title: "제품 소개",
    menus: [
      {
        // name: "환자•보호자용 모바일 앱",
        name: "환자용 모바일 앱",
        linkUrl: "/product/mobile",
      },
      {
        name: "의료진용 데스크탑 앱",
        linkUrl: "/product/desktop",
      }
    ]
  },
  {
    title: "문의",
    menus: [
      {
        // name: "문의하기",
        name: "고객센터",
        linkUrl: "/contact",
      }
    ]
  }
]

const Footer = () => {
  const location = useLocation();
  const pathNameArray = location.pathname.split("/");
  const menuName = pathNameArray[pathNameArray.length - 1];

  return (
    <div className={`footer ${menuName ? "tone-down" : ''}`}>
      <div className="boundary">
        <div className="section-company-info">
          <img className={"logo-type"} src={mDocLogoType} alt=""/>
          <div className="info-group">
            <span>(주) 엠닥</span>
            <span className="sub">서울시 서초구 서초중앙로 110, 롯데캐슬메디치 B1</span>
          </div>
          <div className="info-group">
            <div className="info-item">
              <span className="sub">대표</span>
              <span>김경이</span>
            </div>
            <div className="info-item">
              <span className="sub">사업자등록번호</span>
              <span>424-81-02294</span>
            </div>
          </div>
          <div className="info-group">
           <Link to={"/check/data"}>개인정보 처리방침</Link>
           <Link to={"/check/agree"}>개인정보 수집 및 이용 동의</Link>
           <Link to={"/check/user"}>이용약관</Link>
           
          </div>
        </div>
        <div className="section-menu">
          <div className ="section-row">
          {menuGroups.map( (menuGroup, index) => {
            return (
    
              <div className="menu-group" key={index}>
                <div className="title">
                  {menuGroup.title}
                </div>
                {menuGroup.menus.map( (menu, j) => {
                  return (
                    <Link to={menu.linkUrl} key={j}>{menu.name}</Link>
                  )
                })}
              </div>
            )
          })}
          </div>

          <div className="iconContainer">

            <div class = "media">
                <ul>
                  <li> 
                    <a href="https://www.instagram.com/official.mdoc/">
                    <img className="kakaoIcon" src={Kakao} alt="kakao icon" /></a></li>
                  <li><a href="https://www.instagram.com/official.mdoc/">
                      <FontAwesomeIcon icon={faInstagram} size="2x" /></a></li>
                  <li><a href="https://www.youtube.com/@mdoc9900">
                      <FontAwesomeIcon icon={faYoutube} size="2x" /></a></li>
                </ul>

            </div>

          
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Footer;
