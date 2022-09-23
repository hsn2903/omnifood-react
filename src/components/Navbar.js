import "./Navbar.css";
import logo from "./../assets/img/omnifood-logo.png";

const Navbar = () => {
  return (
    <header className="header">
      <img src={logo} alt="Omnifood logo" className="logo" />
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#">
              Section 1
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#">
              Section 2
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#">
              Section 3
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#">
              Section 4
            </a>
          </li>
          <li>
            <a className="main-nav-link nav-cta" href="#">
              Section 5
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
