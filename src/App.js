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
import Gallery from "./components/layout/Gallery";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";

function App() {
  const [data, setData] = useState([]);
  const [dresses, setDresses] = useState([]);
  const [coats, setCoats] = useState([]);
  const [abayas, setAbayas] = useState([]);

  useEffect(() => {
    fetch("/api/product/", {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((products) => {
        setData(products);
        const fetchedDresses = products.filter(
          (item) => item.product_type === "dress"
        );
        const fetchedCoats = products.filter(
          (item) => item.product_type === "coat"
        );
        const fetchedAbayas = products.filter(
          (item) => item.product_type === "abaya"
        );
        setDresses(fetchedDresses);
        setCoats(fetchedCoats);
        setAbayas(fetchedAbayas);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="App">
      <Router>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
        >
          <Route exact path="/">
            <Header />
            <Promotion />
            <Dress data={dresses} />
            <Coat data={coats} />
            <Abaya data={abayas} />
            <Newsletter />
          </Route>
          <Route path="/createProduct" component={PostProduct} />
          <Route path="/gallery" render={() => <Gallery data={data} />} />
        </AnimatedSwitch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
