import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav>
      <h3>Some Logo</h3>
      <ul className="nav-links">
        <li>
          <Link style={{ color: "white", textDecoration: "none" }} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link style={{ color: "white", textDecoration: "none" }} to="/search">
            Search
          </Link>
        </li>
        <li>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/users"
          >
            Users
          </Link>
        </li>
      </ul>
    </nav>
  );
}
