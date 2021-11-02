import React from "react";
import "./Home.scss";
import Intro from "./components/Intro";
import ProductSummary from "./components/ProductSummary";


const Home = () => {
  return (
    <div className="page home">
      <Intro/>
      <ProductSummary/>

    </div>
  )
}

export default Home;
