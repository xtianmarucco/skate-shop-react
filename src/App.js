import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/Homepage/HomePage";
import ShopPage from "../src/pages/shop/ShopPage";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/contact" component={ShopPage} />
      </Switch>
      {/* <HomePage></HomePage> */}
    </div>
  );
}

export default App;
