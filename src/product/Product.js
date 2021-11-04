import React from "react";
import "./Product.scss";
import {productData} from "../home/components/ProductSummary";
import {useLocation} from "react-router-dom";

const renderProductHeader = (platform) => {
  let product;
  if(platform === "mobile")
    product = productData[1];
  else
    product = productData[0];
  return (
    <div className={`product-header ${platform}`}>
      <div className="boundary">
        <div className="section-img"><div className="fade-layer"/></div>
        <div className="section-content">
          <span>{product.productName}</span>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
        </div>
      </div>

    </div>

  )
}

const renderProductDetail = (platform) => {
  return (
    <div className="product-body">
      <h1>Product Detail</h1>
    </div>
  )
}




const Product = () => {
  let platform;
  const location = useLocation();
  if(location.pathname.includes("mobile"))
    platform = "mobile";
  else
    platform = "desktop"

  return (
    <div className="page product">
      {renderProductHeader(platform)}
      {renderProductDetail(platform)}
    </div>
  )
}

export default Product;
