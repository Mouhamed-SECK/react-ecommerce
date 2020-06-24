import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./components/pages/homepage/hompage";
import ShopPage from "./components/pages/shop/ShopPage";
import Header from "./components/header/Header";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
