import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Services from "./Components/Services";
import "./App.css";
import About from "./Components/About";
import Search from "./Components/Search";

function App() {
  return (
    <Router>
      <h1>Hello from the darkness</h1>
      <div className="App">
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        <Route path="/search" component={Search} />
      </div>
    </Router>
  );
}

export default App;
