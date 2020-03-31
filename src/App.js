import React from "react";
import "./App.css";
import Header from "./components/shared/Header";
import Promotion from "./components/layout/Promotion";
import Dress from "./components/layout/Dress";
import Coat from "./components/layout/Coat";

function App() {
  return (
    <div className="App">
      <Header />
      <Promotion />
      <Dress />
      <Coat />
    </div>
  );
}

export default App;
