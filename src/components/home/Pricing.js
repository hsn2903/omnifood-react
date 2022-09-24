import "./Pricing.css";
import {
  IoCheckmarkOutline,
  IoClose,
  IoInfiniteOutline,
  IoLeafOutline,
  IoNutritionOutline,
  IoPauseOutline,
} from "react-icons/io5";

const Pricing = () => {
  return (
    <section className="section-pricing">
      <div className="container">
        <span className="subheading">Pricing</span>
        <h2 className="heading-secondary">
          Eating well without breaking the bank
        </h2>
      </div>

      <div className="grid grid--2-cols container margin-bottom-md">
        <div className="pricing-plan pricing-plan-starter">
          <header className="plan-header">
            <p className="plan-name">Starter</p>
            <p className="plan-price">
              <span>$</span> 3.99
            </p>
            <p className="plan-text">per month. That's just $13 per meal!</p>
          </header>
          <ul className="list">
            <li className="list-item">
              <IoCheckmarkOutline className="list-icon" />
              <span>1 meal per day</span>
            </li>
            <li className="list-item">
              <IoCheckmarkOutline className="list-icon" />
              <span>Order from 11am and 9pm</span>
            </li>
            <li className="list-item">
              <IoCheckmarkOutline className="list-icon" />
              <span>Delivery is free</span>
            </li>
            <li className="list-item">
              <IoClose className="list-icon" />
              <span></span>
            </li>
          </ul>
          <div className="plan-sign-up">
            <a className="btn btn__full" href="#">
              Start eating well
            </a>
          </div>
        </div>
        <div className="pricing-plan pricing-plan--complete">
          <header className="plan-header">
            <p className="plan-name">Complete</p>
            <p className="plan-price">
              <span>$</span> 6.99
            </p>
            <p className="plan-text">per month. That's just $11 per meal!</p>
          </header>
          <ul className="list">
            <li className="list-item">
              <IoCheckmarkOutline className="list-icon" />
              <span>
                <strong>2 meals</strong> per day
              </span>
            </li>
            <li className="list-item">
              <IoCheckmarkOutline className="list-icon" />
              <span>
                Order <strong>24/7</strong>
              </span>
            </li>
            <li className="list-item">
              <IoCheckmarkOutline className="list-icon" />
              <span>Delivery is free</span>
            </li>
            <li className="list-item">
              <IoCheckmarkOutline className="list-icon" />
              <span>Get access to the latest recepies</span>
            </li>
          </ul>
          <div className="plan-sign-up">
            <a className="btn btn__full" href="#">
              Start eating well
            </a>
          </div>
        </div>
      </div>

      <div className="container grid">
        <aside className="plan-details">
          Prices include all applicable taxes. Users can cancel at any time.
          Both plans also include the following:
        </aside>
      </div>

      <div className="container grid grid--4-cols">
        <div className="feature">
          <IoInfiniteOutline className="feature-icon" />
          <p className="feature-title">Never cook again!</p>
          <p className="feature-text">
            Our subscriptions cover 365 days per year, even including major
            holidays.
          </p>
        </div>
        <div className="feature">
          <IoNutritionOutline className="feature-icon" />
          <p className="feature-title">Local and organic</p>
          <p className="feature-text">
            Our cooks only use local, fresh, and organic products to prepare
            your meals.
          </p>
        </div>
        <div className="feature">
          <IoLeafOutline className="feature-icon" />
          <p className="feature-title">No waste</p>
          <p className="feature-text">
            All our partners only use reusable containers to package all your
            meals.
          </p>
        </div>
        <div className="feature">
          <IoPauseOutline className="feature-icon" />
          <p className="feature-title">Pause anytime</p>
          <p className="feature-text">
            Going on vacation? Just pause your subscription, and we refund
            unused days.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
