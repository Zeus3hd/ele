import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/shared/Header";
import Promotion from "./components/layout/Promotion";
import Dress from "./components/layout/Dress";
import Abaya from "./components/layout/Abaya";
import Coat from "./components/layout/Coat";
import Newsletter from "./components/layout/Newsletter";
import PostProduct from "./components/layout/PostProduct";
import Footer from "./components/shared/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch("/api/product/", {
    //   method: "GET",
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((products) => setData(products))
    //   .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Promotion />
            <Dress data={data} />
            <Coat />
            <Abaya />
            <Newsletter />
          </Route>
          <Route path="/createProduct" component={PostProduct} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
