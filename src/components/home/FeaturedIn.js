import "./FeaturedIn.css";

import techcrunch from "../../assets/img/logos/techcrunch.png";
import businessInsider from "../../assets/img/logos/business-insider.png";
import forbes from "../../assets/img/logos/forbes.png";
import theNewYorkTimes from "../../assets/img/logos/the-new-york-times.png";
import usaToday from "../../assets/img/logos/usa-today.png";

const FeaturedIn = () => {
  return (
    <div className="section-featured">
      <div className="container">
        <h2 className="heading-featured-in">As featured in</h2>
        <div className="logos">
          <img src={techcrunch} alt="techcrunch" />
          <img src={businessInsider} alt="business insider" />
          <img src={forbes} alt="forbes" />
          <img src={theNewYorkTimes} alt="the new york times" />
          <img src={usaToday} alt="usa today" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedIn;
