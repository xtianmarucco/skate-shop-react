import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.scss";

import HomePage from "./pages/Homepage/HomePage";
import ShopPage from "../src/pages/shop/ShopPage";
import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import SignInPageComponent from "./pages/SignInPage/SignInPage";

import { auth } from "./firebase/firebase.util";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <HeaderComponent currentUser={this.state.currentUser}></HeaderComponent>
        <Switch>
          <Route exact path="/" component={HomePage} />
          {/* <Route path="/hats" component={HatsPage} /> */}
          <Route path="/shop" component={ShopPage} />
          <Route path="/contact" component={ShopPage} />
          <Route path="/signin" component={SignInPageComponent} />
        </Switch>
        {/* <HomePage></HomePage> */}
      </div>
    );
  }
}

export default App;
