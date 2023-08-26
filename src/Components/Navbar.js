import { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        <img src="./img/logo.svg" />
        <h1>AntonK</h1>
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <img className="ham" src="./img/ham.svg" />
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a
              href="/home"
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
              href="#p1"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setIsNavExpanded(!isNavExpanded);
              }}
              href="#p2"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
