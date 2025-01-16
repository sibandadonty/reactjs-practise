import React, { useState } from "react";

function NavBar() {
  const [nav, setNav] = useState(false);

  return (
    <nav className="flex justify-between px-8 py-4 bg-green-500 text-white">
      <h3>Brand Name</h3>

      {/* Desktop Navigation */}

      <ul className="hidden md:flex gap-2">
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

      <p className="md:hidden" onClick={() => setNav(!nav)}>
        Menu
      </p>

      {/* Mobile Navigation */}

      <ul
        className={`${
          nav
            ? "md:hidden absolute top-0 left-0 bottom-0 w-[65%] bg-green-500 p-2 ease-in-out duration-500"
            : "md:hidden absolute top-0 left-[-1000px] bottom-0 w-[65%] bg-green-500 p-2 ease-in-out duration-500"
        }`}
      >
        <li className="flex justify-between">
          <a href="#">Brand Name</a>
          <p onClick={() => setNav(false)} className="font-bold">X</p>
        </li>
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
