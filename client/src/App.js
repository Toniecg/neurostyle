import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Nav from "./components/Nav";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import Community from "./pages/Community";
import NoMatch from "./pages/NoMatch";
import Test from "./components/Test";
import './App.css';

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/community" component={Community} />
        <Route exact path="/test" component={Test}/>
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);


  export default App;