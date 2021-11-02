import React from "react";
import {Link} from "react-router-dom";
import hcLogo from "../img/logo-hc.png";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className={"nav-bar"}>
      <div className="boundary">
        <img className="logo" src={hcLogo} alt=""/>
        <div className="menu-container">
          <Link to={"/"}>홈</Link>
          <Link to={"/product/mobile"}>환자 • 보호자</Link>
          <Link to={"/product/desktop"}>의료진</Link>
          <Link to={"/contact"}>문의</Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar;
