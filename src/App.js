import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./page/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home}></Route>
      </Switch>
    </div>
  );
}

export default App;
