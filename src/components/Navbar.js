import "./Navbar.css";
import logo from "./../assets/img/omnifood-logo.png";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  return (
    <header className={`${isNavOpen ? "header nav-open" : "header"}`}>
      <a href="#" onClick={() => setIsNavOpen(!isNavOpen)}>
        <img src={logo} alt="Omnifood logo" className="logo" />
      </a>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a
              className="main-nav-link"
              href="#how"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              How it works
            </a>
          </li>
          <li>
            <a
              className="main-nav-link"
              href="#meals"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              Meals
            </a>
          </li>
          <li>
            <a
              className="main-nav-link"
              href="#testimonials"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              className="main-nav-link"
              href="#pricing"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              className="main-nav-link nav-cta"
              href="#cta"
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              Try for free
            </a>
          </li>
        </ul>
      </nav>

      <button
        className="btn-mobile-nav"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <IoMenuOutline className="icon-mobile-nav" name="menu-outline" />
        <IoCloseOutline className="icon-mobile-nav" name="close-outline" />
      </button>
    </header>
  );
};

export default Navbar;
