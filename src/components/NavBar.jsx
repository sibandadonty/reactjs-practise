import React from "react";

function NavBar() {
  return (
    <nav>
      <h3>Brand Name</h3>

      {/* Desktop Navigation */}

      <ul>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Technologies</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <p>Menu</p>

      {/* Mobile Navigation */}

      <ul>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Technologies</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
