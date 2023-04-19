import React, {useEffect, useState} from "react";
import {Switch, Route, useHistory, Router} from "react-router-dom";
import NavBar from "./general/components/NavBar";
import Home from "./home/Home";
import Contact from "./contact/Contact";
import Check from "./check/Check";
import Product from "./product/Product";
import Footer from "./general/components/Footer";
import "./App.scss";

function App() {
  const [start, setStart] = useState(false);
  let history = useHistory();

  //scroll to top when url is changed
  useEffect(() => {
    const unListen = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unListen();
    }
  }, []);

  const letsGo = () => {
    setStart(!start);
  }
  return (
    <>
    {start == false ? 
    <div onClick={letsGo} className={"landingContainer"}>
      <div className={"LandingImg"}>
      
      </div>
    </div>
   :
    <div className={"app"}>
      
      <NavBar/>

      <Switch>
        <Route path={"/"} exact component={Home}/>
        <Route path={"/product/mobile"} component={Product}/>
        <Route path={"/product/desktop"} component={Product}/>
        <Route path={"/contact"} component={Contact}/>
        <Route exact path={"/check/user"} component={Check}/>
        <Route exact path={"/check/data"} component={Check}/>
        <Route exact path={"/check/agree"} component={Check}/>
      </Switch>
      <Footer/>
    
    </div> 
    }
    </>
  );
}

export default App;
