import "./Hero.css";
import heroImg from "../../assets/img/hero.png";
import customerImage1 from "../../assets/img/customers/customer-1.jpg";
import customerImage2 from "../../assets/img/customers/customer-2.jpg";
import customerImage3 from "../../assets/img/customers/customer-3.jpg";
import customerImage4 from "../../assets/img/customers/customer-4.jpg";
import customerImage5 from "../../assets/img/customers/customer-5.jpg";
import customerImage6 from "../../assets/img/customers/customer-6.jpg";

const Hero = () => {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className="hero-description">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <a className="btn btn__full margin-right-sm" href="#cta">
            Start eating well
          </a>
          <a className="btn btn__outline" href="#how">
            Learn more &darr;
          </a>

          <div className="delivered-meals">
            <div className="delivered-imgs">
              <img src={customerImage1} alt="Customer photo" />
              <img src={customerImage2} alt="Customer photo" />
              <img src={customerImage3} alt="Customer photo" />
              <img src={customerImage4} alt="Customer photo" />
              <img src={customerImage5} alt="Customer photo" />
              <img src={customerImage6} alt="Customer photo" />
            </div>
            <p className="delivered-text">
              <span>250,000+</span> meals delivered last year!
            </p>
          </div>
        </div>
        <div className="hero-img-box">
          <img className="hero-img" src={heroImg} alt="woman enjoying food" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
