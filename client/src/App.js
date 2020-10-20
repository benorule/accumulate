import React from "react";
import Nav from "./components/Nav";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Track from "./pages/track.js";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Track} />
      </div>
    </Router>
  );
}

export default App;
