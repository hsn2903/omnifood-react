import "./CallToAction.css";
import eatingImage from "../../assets/img/eating.jpg";

const CallToAction = () => {
  return (
    <section id="cta" className="section-cta">
      <div className="container">
        <div className="cta">
          <div className="cta-text-box">
            <h2 className="heading-secondary">Get your first meal for free</h2>
            <p className="cta-text">
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>

            <form className="cta-form" action="#">
              <div>
                <label htmlFor="fullname">Full Name</label>
                <input
                  type="text"
                  id="fullname"
                  placeholder="John Smith"
                  required
                />
              </div>

              <div>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="me@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="select-where">
                  Where did you hear from us?
                </label>
                <select name="" id="select-where" required>
                  <option value="">Please choose one option</option>
                  <option value="friends">Friends and family</option>
                  <option value="youtube">Youtube video</option>
                  <option value="podcasts">Podcasts</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button type="submit" className="btn btn--form">
                Sign up now
              </button>
            </form>
          </div>
          <div
            className="cta-img-box"
            role="img"
            aria-label="Woman enjoying food"
            style={{ backgroundImage: `url(${eatingImage})` }}
          >
            IMG
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
