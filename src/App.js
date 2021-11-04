import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import NavBar from "./general/components/NavBar";
import Home from "./home/Home";
import Contact from "./contact/Contact";
import Product from "./product/Product";
import Footer from "./general/components/Footer";
import "./App.scss";

function App() {
  return (
    <Router>
      <div className={"app"}>
        <NavBar/>
        <Switch>
          <Route path={"/"} exact component={Home}/>
          <Route path={"/product/mobile"} component={Product}/>
          <Route path={"/product/desktop"} component={Product}/>
          <Route path={"/contact"} component={Contact}/>
        </Switch>
        <Footer/>
      </div>

    </Router>
  );
}

export default App;
