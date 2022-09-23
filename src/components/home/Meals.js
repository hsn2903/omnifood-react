import "./Meals.css";
import meal1 from "../../assets/img/meals/meal-1.jpg";
import meal2 from "../../assets/img/meals/meal-2.jpg";

import {
  IoFlameOutline,
  IoRestaurantOutline,
  IoStarOutline,
  IoCheckmarkOutline,
} from "react-icons/io5";

const Meals = () => {
  return (
    <section className="section-meals">
      <div className="container center-text">
        <span className="subheading">Meals</span>
        <h2 className="heading-secondary">
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>

      <div className="container">
        <div className="grid grid--3-cols margin-bottom-md">
          <div className="meal">
            <img src={meal1} alt="Japanese Gyozas" className="meal-img" />
            <div className="meal-content">
              <div className="meal-tags">
                <span className="tag tag--vegatarian">Vegetarian</span>
              </div>
              <p className="meal-title">Japanese Gyozas</p>
              <ul className="meal-attributes">
                <li className="meal-attribute">
                  <IoFlameOutline className="meal-icon" />
                  <span>
                    <strong>650</strong> calories
                  </span>
                </li>
                <li className="meal-attribute">
                  <IoRestaurantOutline className="meal-icon" />
                  <span>
                    NutriScore &reg; <strong>74</strong>
                  </span>
                </li>
                <li className="meal-attribute">
                  <IoStarOutline className="meal-icon" />
                  <span>
                    <strong>4.9</strong> rating (537)
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="meal">
            <img src={meal2} alt="Avacado Salad" className="meal-img" />
            <div className="meal-content">
              <div className="meal-tags">
                <span className="tag tag--vegan">Vegan</span>
                <span className="tag tag--paleo">Paleo</span>
              </div>
              <p className="meal-title">Avacado Salad</p>
              <ul className="meal-attributes">
                <li className="meal-attribute">
                  <IoFlameOutline className="meal-icon" />
                  <span>
                    <strong>400</strong> calories
                  </span>
                </li>
                <li className="meal-attribute">
                  <IoRestaurantOutline className="meal-icon" />
                  <span>
                    NutriScore &reg; <strong>92</strong>
                  </span>
                </li>
                <li className="meal-attribute">
                  <IoStarOutline className="meal-icon" />
                  <span>
                    <strong>4.8</strong> rating (441)
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="diets">
            <h3 className="heading-tertiary">Works with any diet</h3>
            <ul className="list">
              <li className="list-item">
                <IoCheckmarkOutline className="list-icon" />
                <span>Vegetarian</span>
              </li>
              <li className="list-item">
                <IoCheckmarkOutline className="list-icon" /> <span>Vegan</span>
              </li>
              <li className="list-item">
                <IoCheckmarkOutline className="list-icon" />
                <span>Pescatarian</span>
              </li>
              <li className="list-item">
                <IoCheckmarkOutline className="list-icon" />
                <span>Gluten-free</span>
              </li>
              <li className="list-item">
                <IoCheckmarkOutline className="list-icon" />
                <span>Lactose-free</span>
              </li>
              <li className="list-item">
                <IoCheckmarkOutline className="list-icon" /> <span>Paleo</span>
              </li>
              <li className="list-item">
                <IoCheckmarkOutline className="list-icon" />
                <span>Low FODMAP</span>
              </li>
              <li className="list-item">
                <IoCheckmarkOutline className="list-icon" />
                <span>Kid-friendly</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container all-recepies">
        <a href="#" className="link">
          See all recepies &rarr;
        </a>
      </div>
    </section>
  );
};

export default Meals;
