import React from "react";
import "./Home.scss";
import Intro from "./components/Intro";
import ProductSummary from "./components/ProductSummary";
import GovTimeline from "./components/GovTimeline";


const Home = () => {
  return (
    <div className="page home">
      <Intro/>
      <ProductSummary/>
      <GovTimeline/>
    </div>
  )
}

export default Home;
