import React, { useState } from "react";
import { AlignJustify, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleMenuToggle() {
    setIsOpen((prevVal) => !prevVal);
  }
  return (
    <nav className="">
      <div className="flex justify-between p-4 shadow-md">
        <div>My Site</div>

        {/* desktop navigation */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        {/* navigation toggle */}
        {
          <div className="md:hidden">
            <button onClick={handleMenuToggle}>
              {isOpen ? <X /> : <AlignJustify />}
            </button>
          </div>
        }
      </div>

      {/* mobile navigation */}
      {isOpen && (
        <ul className="absolute top-0 left-0 bg-blue-600 w-2/3 h-screen z-50 p-4 text-white">
          <li>
            <a href="#" onClick={() => setIsOpen(prevVal => !prevVal)}>Home</a>
          </li>
          <li>
            <a href="#" onClick={() => setIsOpen(prevVal => !prevVal)}>About</a>
          </li>
          <li>
            <a href="#" onClick={() => setIsOpen(prevVal => !prevVal)}>Services</a>
          </li>
          <li>
            <a href="#" onClick={() => setIsOpen(prevVal => !prevVal)}>Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
