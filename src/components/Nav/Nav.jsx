import { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo-section">
          <img id="logo"
            src="src/assets/DuckPixelLogo.svg"
            alt="Description of the image"
          />
        </div>
        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/topics" onClick={closeMenu}>
              Topics
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/articles" onClick={closeMenu}>
              Articles
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/users" onClick={closeMenu}>
              Users
            </Link>
          </li>
        </ul>
        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
