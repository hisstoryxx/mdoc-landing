import React from "react";
import {Link, useLocation} from "react-router-dom";
import hcLogo from "../img/logo-hc.png";
import logo from "../img/logo-type.png";
import "./NavBar.scss";

const NavBar = () => {
  const location = useLocation();
  const pathNameArray = location.pathname.split("/");
  const menuName = pathNameArray[pathNameArray.length - 1];

  return (
    <div className={"nav-bar"}>
      <div className="boundary">
        <Link to={"/"}>
        <img className="logo" src={logo} alt=""/></Link>
        
      </div>
    </div>
  )
}

export default NavBar;
