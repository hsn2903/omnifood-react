import "./Testimonial.css";
import dave from "../../assets/img/customers/dave.jpg";
import ben from "../../assets/img/customers/ben.jpg";
import steve from "../../assets/img/customers/steve.jpg";
import hannah from "../../assets/img/customers/hannah.jpg";
//
import gallery1 from "../../assets/img/gallery/gallery-1.jpg";
import gallery2 from "../../assets/img/gallery/gallery-2.jpg";
import gallery3 from "../../assets/img/gallery/gallery-3.jpg";
import gallery4 from "../../assets/img/gallery/gallery-4.jpg";
import gallery5 from "../../assets/img/gallery/gallery-5.jpg";
import gallery6 from "../../assets/img/gallery/gallery-6.jpg";
import gallery7 from "../../assets/img/gallery/gallery-7.jpg";
import gallery8 from "../../assets/img/gallery/gallery-8.jpg";
import gallery9 from "../../assets/img/gallery/gallery-9.jpg";
import gallery10 from "../../assets/img/gallery/gallery-10.jpg";
import gallery11 from "../../assets/img/gallery/gallery-11.jpg";
import gallery12 from "../../assets/img/gallery/gallery-12.jpg";

const Testimonial = () => {
  return (
    <section className="section-testimonials" id="testimonials">
      <div className="testimonials-container">
        <span className="subheading">Testimonials</span>
        <h2 className="heading-secondary">
          Once you try it, you can't go back
        </h2>

        <div className="testimonials">
          <figure className="testimonial">
            <img src={dave} alt="Dave Bryson" className="testimonial-img" />
            <blockquote className="testimonial-text">
              Inexpensive, healthy and great-tasting meals, without even having
              to order manually! It feels truly magical.
            </blockquote>
            <p className="testimonial-name">&mdash; Dave Bryson</p>
          </figure>
          <figure className="testimonial">
            <img src={ben} alt="Ben Hadley" className="testimonial-img" />
            <blockquote className="testimonial-text">
              The AI algorithm is crazy good, it chooses the right meals for me
              every time. It's amazing not to worry about food anymore!
            </blockquote>
            <p className="testimonial-name">&mdash; Ben Hadley</p>
          </figure>
          <figure className="testimonial">
            <img src={steve} alt="Steve Miller" className="testimonial-img" />
            <blockquote className="testimonial-text">
              Omnifood is a life saver! I just started a company, so there's no
              time for cooking. I couldn't live without my daily meals now!
            </blockquote>
            <p className="testimonial-name">&mdash; Steve Miller</p>
          </figure>
          <figure className="testimonial">
            <img src={hannah} alt="Hannah Smith" className="testimonial-img" />
            <blockquote className="testimonial-text">
              I got Omnifood for the whole family, and it frees up so much time!
              Plus, everything is organic and vegan and without plastic.
            </blockquote>
            <p className="testimonial-name">&mdash; Hannah Smith</p>
          </figure>
        </div>
      </div>
      <div className="gallery">
        <figure className="galerry-item">
          <img src={gallery1} alt="photo of food" />
          {/* <figcaption>Caption</figcaption> */}
        </figure>
        <figure className="galerry-item">
          <img src={gallery2} alt="photo of food" />
        </figure>
        <figure className="galerry-item">
          <img src={gallery3} alt="photo of food" />
        </figure>
        <figure className="galerry-item">
          <img src={gallery4} alt="photo of food" />
        </figure>
        <figure className="galerry-item">
          <img src={gallery5} alt="photo of food" />
        </figure>
        <figure className="galerry-item">
          <img src={gallery6} alt="photo of food" />
        </figure>
        <figure className="galerry-item">
          <img src={gallery7} alt="photo of food" />
        </figure>
        <figure className="galerry-item">
          <img src={gallery8} alt="photo of food" />
        </figure>
        <figure className="galerry-item">
          <img src={gallery9} alt="photo of food" />
        </figure>
        <figure className="galerry-item">
          <img src={gallery10} alt="photo of food" />
        </figure>
        <figure className="galerry-item">
          <img src={gallery11} alt="photo of food" />
        </figure>
        <figure className="galerry-item">
          <img src={gallery12} alt="photo of food" />
        </figure>
      </div>
    </section>
  );
};

export default Testimonial;
