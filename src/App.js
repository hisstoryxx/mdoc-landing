import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import NavBar from "./general/components/NavBar";
import Home from "./home/Home";
import Contact from "./contact/Contact";
import ProductDesktop from "./product-desktop/ProductDesktop";
import ProductMobile from "./product-mobile/ProductMobile";
import "./App.scss";

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route path={"/"} exact component={Home}/>
          <Route path={"/product/mobile"} component={ProductMobile}/>
          <Route path={"/product/desktop"} component={ProductDesktop}/>
          <Route path={"/contact"} component={Contact}/>
        </Switch>
      </div>

    </Router>
  );
}

export default App;
