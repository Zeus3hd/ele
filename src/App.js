import React from "react";
import "./App.css";
import Header from "./components/shared/Header";
import Promotion from "./components/layout/Promotion";
import Dress from "./components/layout/Dress";
import Abaya from "./components/layout/Abaya";
import Coat from "./components/layout/Coat";
import Newsletter from "./components/layout/Newsletter";
import Footer from "./components/shared/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Promotion />
            <Dress />
            <Coat />
            <Abaya />
            <Newsletter />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
