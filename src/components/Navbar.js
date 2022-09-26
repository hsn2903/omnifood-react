import "./Navbar.css";
import logo from "./../assets/img/omnifood-logo.png";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className="header nav-open">
      <a href="#">
        <img src={logo} alt="Omnifood logo" className="logo" />
      </a>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#">
              How it works
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#">
              Meals
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#">
              Testimonials
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#">
              Pricing
            </a>
          </li>
          <li>
            <a className="main-nav-link nav-cta" href="#">
              Try for free
            </a>
          </li>
        </ul>
      </nav>

      <button className="btn-mobile-nav">
        <IoMenuOutline className="icon-mobile-nav" name="menu-outline" />
        <IoCloseOutline className="icon-mobile-nav" name="close-outline" />
      </button>
    </header>
  );
};

export default Navbar;
