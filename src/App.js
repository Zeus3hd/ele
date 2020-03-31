import React from "react";
import "./App.css";
import Header from "./components/shared/Header";
import Promotion from "./components/layout/Promotion";
import Dress from "./components/layout/Dress";
import Abaya from "./components/layout/Abaya";
import Coat from "./components/layout/Coat";

function App() {
  return (
    <div className="App">
      <Header />
      <Promotion />
      <Dress />
      <Coat />
      <Abaya />
    </div>
  );
}

export default App;
