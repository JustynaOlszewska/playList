import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/organism/NavBar";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Router></Router>
    </div>
  );
}

export default App;
