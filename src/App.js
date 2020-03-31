import React from "react";
import "./App.css";
import Header from "./components/shared/Header";
import Promotion from "./components/layout/Promotion";
import Dress from "./components/layout/Dress";

function App() {
  return (
    <div className="App">
      <Header />
      <Promotion />
      <Dress />
    </div>
  );
}

export default App;
