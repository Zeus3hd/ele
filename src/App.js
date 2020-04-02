import React from "react";
import "./App.css";
import Header from "./components/shared/Header";
import Promotion from "./components/layout/Promotion";
import Dress from "./components/layout/Dress";
import Abaya from "./components/layout/Abaya";
import Coat from "./components/layout/Coat";
import Newsletter from "./components/layout/Newsletter";
import Footer from "./components/shared/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Promotion />
      <Dress />
      <Coat />
      <Abaya />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
