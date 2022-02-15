import React from "react";
import {Link, useLocation} from "react-router-dom";

import logo from "../general/img/logo-type.png";
import "./SelectBar.scss";

const SelectBar = ({setValue, value}) => {
  const location = useLocation();
  const pathNameArray = location.pathname.split("/");
  const menuName = pathNameArray[pathNameArray.length - 1];

  console.log('hi',value)
  

  const clickMobile = () => {
    
    setValue("mobile")
    console.log(value)
  }

  const clickDoc = () => {
    setValue("Doctor")
    console.log(value)

  }
  

  return (
    <div className={"nav-bar"}>
      <div className="boundary">
        <div className={`menu-container ${menuName ? menuName : 'home'}`}>
          <div className="product-menus">
            <div className="menu-wrapper">
              <span className="menu" onClick={clickMobile} >환자</span>
            </div>
          </div>
          <div className="divider"/>
          <span className="menu" onClick={clickDoc}>의료진</span>
        </div>
      </div>
    </div>
  )
}

export default SelectBar;
