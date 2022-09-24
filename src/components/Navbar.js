import "./Navbar.css";
import logo from "./../assets/img/omnifood-logo.png";

const Navbar = () => {
  return (
    <header className="header">
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
    </header>
  );
};

export default Navbar;
