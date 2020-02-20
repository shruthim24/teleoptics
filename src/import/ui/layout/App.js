import React from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Navigation from "../customPages/Navigation/Navigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </div>
  );
}

export default App;
