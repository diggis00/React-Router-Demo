import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Services from "./Components/Users";
import About from "./Components/About";
import Search from "./Components/Search";
import Navbar from "./Components/Navbar";
import UserDetails from "./Components/UserDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/users" exact component={Services} />
        <Route path="/about" component={About} />
        <Route path="/search" component={Search} />
        <Route path="/users/:id" component={UserDetails} />
      </div>
    </Router>
  );
}
const Home = () => {
  return <div style={{ fontSize: "50px" }}>Home Page</div>;
};

export default App;
