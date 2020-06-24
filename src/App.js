import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./components/pages/homepage/hompage";

const HatsPage = () => {
  return <div>Hats Page</div>;
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/" component={HatsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
